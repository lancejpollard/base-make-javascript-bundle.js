

const fs = require('fs')
const mkdirp = require('mkdirp')
const generateJS = require('@lancejpollard/generate-javascript-from-link-deck.js')
const load = require('@lancejpollard/load-link-deck.js')
const compileBrowser = require('./browser')
const compileNode = require('./node')

module.exports = compile

async function compile({
  configPath,
  outputPath,
  type = 'browser'
}) {
  const site = load(configPath)
  const js = generateJS(site)
  mkdirp.sync('dist')
  const entryPath = `./dist/input.js`
  fs.writeFileSync(entryPath, js)

  try {
    if (type === 'browser') {
      await compileBrowser({
        entryPath,
        outputPath
      })
    } else {
      await compileNode({
        entryPath,
        outputPath
      })
    }
  } catch (e) {
    console.log(e)
  }

  fs.unlinkSync(entryPath)
}
