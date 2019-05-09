
const puppeteer = require('puppeteer');
const genericPool = require('generic-pool');

class Browser {
    isReady() {
        return !!this.browser;
    }

    getPool() {
        return this.pool;
    }

    async load(conf = {}) {
        if (this.browser) {
            return this.browser;
        }

        console.log('Launching browser');
        let browser = await puppeteer.launch({
            args: ['--enable-logging', '--v=1'],
            timeout: 10000,
            ...conf
        });
        this.browser = browser;

        let factory = {
            create() {
                return browser.newPage();
            },
            destroy(page) {
                return page.close();
            }
        };
        let pool = genericPool.createPool(factory, {
            max: process.env.MAX_CHROMIUM_PAGE_NUM || 10,
            min: 1,
            acquireTimeoutMillis: 3e4,
            evictionRunIntervalMillis: 10 * 6e4,
            softIdleTimeoutMillis: 5 * 6e4
        });
        this.pool = pool;
        console.log('Browser launched');
    }

    getNewPage() {
        if (!this.pool) {
            throw new Error('Browser is not ready');
        }
        return this.pool.acquire();
    }

    async releasePage(page) {
        await this.pool.release(page);
    }

    async destroy() {
        console.log('Destroy browser');
        if (this.pool) {
            await this.pool.drain();
            await this.pool.clear();
        }
        if (this.browser) {
            await this.browser.close();
        }
        this.browser = undefined;
    }

    async reload() {
        console.log('Reload browser');
        await this.destroy();
        await this.load();
    }
}

let browser = new Browser();
browser.load();
module.exports = browser;

process.on('SIGINT', async function () {
    console.log('Caught interrupt signal. Closing browser...');
    await browser.destroy();
    process.exit();
});
