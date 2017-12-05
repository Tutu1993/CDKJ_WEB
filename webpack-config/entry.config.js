const path = require('path')
const dirVars = require('./base/dirVars.config.js')
const entryArr = require('./base/entryArr.config.js')
const entryConfig = {}

entryConfig.vendor = ['jsDir/swiper.min.js', 'jsDir/global.js']

entryArr.forEach(entry =>
	entryConfig[entry] = path.resolve(dirVars.htmlDir, `${entry}/index.js`)
)

module.exports = entryConfig
