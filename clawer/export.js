const fse = require('fs-extra')
const path = require('path')
const {Device} = require('./model')

setTimeout(main, 100)

async function main() {
    let devices = await Device.findAll()
    devices = devices.filter(device => device.resolution && device.resolution !== '其他')

    let pattern = /（(\w+)）/i
    devices = devices.map(function ({jdid, brand, name, resolution}) {
        name = name.replace(/【[^】]+】/g, '')

        let matched = brand.match(pattern)
        let brands = [brand.trim()]
        if (matched) {
            brands.push(brand.split('（')[0].trim())
            brands.push(matched[1].trim())
        }
        name = brands.reduce(function (ret, brand) {
            return ret.trim().replace(new RegExp(brand, 'ig'), '')
        }, name)

        let index = 0
        // 找到西文字符后的第一个中文
        let hasMeetWesternChar = false
        while (index < name.length) {
            if (/\w/.test(name[index])) {
                hasMeetWesternChar = true
            }
            else if (/[\u4E00-\u9FCC]/.test(name[index]) && hasMeetWesternChar) {
                break
            }
            index++
        }
        name = name.substring(0, index).trim()

        if (/^\d+$/.test(name)) {
            name = (brands[1] || brands[0]) + name
        }

        return {jdid, brand, name, resolution}
    }).sort(function (a, b) {
        return a.name.length > b.name.length
    })

    let deviceNameIndexMap = devices.reduce(function (ret, {name}, index) {
        if (!Object.keys(ret).some(key => key.includes(name))) {
            ret[name] = index
        }
        return ret;
    }, {})

    devices = Object.values(deviceNameIndexMap).map(i => devices[i])

    await fse.writeJSON(path.resolve(__dirname, '../www/public/devices.json'), devices)
}
