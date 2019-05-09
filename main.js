const delay = require('delay')
const url = require('url')
const path = require('path')
const {Device} = require('./model')
const browser = require('./browser')

setTimeout(main, 1000)

async function main() {

    for (let pageNo = 1; pageNo < 3; pageNo++) {
        let page = await browser.getNewPage()

        console.log(`PageNo: ${pageNo}`)
        await page.goto(getPageURL(pageNo))

        let prevScrollY = 0
        while (true) {
            let scrollY = await page.evaluate(function () {
                window.scrollBy(0, 100)
                return window.scrollY
            })
            if (scrollY - prevScrollY < 100) {
                break
            }
            await delay(100)
            prevScrollY = scrollY
        }

        let urls = await page.evaluate(function () {
            return Array.from(document.querySelectorAll('#plist ul.gl-warp li.gl-item div.p-img a')).map(item => item.href)
        })
        let ids = urls.map(pageURL => getJdID(pageURL)).filter(id => /^\d+$/.test(id))
        let matcheds = await Promise.all(ids.map(async function (jdid) {
            let result = await Device.findOne({where: {jdid}})
            return !!result
        }))
        urls = ids.filter(function (_, index) {
            return !matcheds[index]
        }).map(id => `https://item.jd.com/${id}.html`)

        await browser.releasePage(page)

        await fetchProducts(urls);
    }


}

async function fetchProducts(urls) {
    for (let i = 0; i < urls.length; i++) {
        let pageURL = urls[i];
        let page = await browser.getNewPage()

        try {
            await page.goto(pageURL)
        }
        catch (err) {
            console.log(`Fail goto page: ${pageURL}`, err.message)
            continue
        }

        await page.evaluate(function () {
            window.scrollBy(0, 100)
            window.scrollBy(0, 100)
            window.scrollBy(0, 100)
        })

        let result = await page.evaluate(function () {
            let elem = document.querySelector('#detail .tab-con div.p-parameter')

            let brand = elem.querySelector('#parameter-brand li')
            if (brand) {
                brand = brand.title
            }

            let resolution = elem.querySelector('ul.parameter1 li.fore0 .detail p')
            if (resolution) {
                resolution = resolution.title
            }

            let name = elem.querySelector('ul.parameter2 li')
            if (name) {
                name = name.title
            }

            return { brand, name, resolution }
        })

        let jdid = getJdID(page.url())
        console.log('%s\t%s\t%s\t%s', jdid, result.brand, result.name, result.resolution)

        try {
            await Device.create({jdid, ...result})
        }
        catch (err) {
            console.log('Save fail.', err.message)
        }

        await browser.releasePage(page)
        await delay(500)
    }
}

function getJdID(pageURL) {
    return path.basename(url.parse(pageURL).pathname, '.html')
}

function getPageURL(pageNo) {
    return `https://list.jd.com/list.html?cat=9987,653,655&page=${pageNo}&sort=sort_rank_asc&trans=1&JL=6_0_0#J_main`
}