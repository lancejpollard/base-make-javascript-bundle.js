
const generateJS = require('@lancejpollard/generate-javascript-from-link-deck.js')
const webpack = require('webpack')
const make = require('..')

async function compileWebpack({
  entryPath,
  outputPath,
}) {
  return new Promise((res, rej) => {
    webpack({
      mode: 'development',
      entry: entryPath,
      output: {
        filename: outputPath,
        // path: pathResolver.resolve(pathResolver.join(__dirname, '../..'))
      }
    }, (err, stats) => {
      if (err || stats.hasErrors()) {
        console.log(err);
        return rej(err)
      } else {
        return res()
      }
    })
  })
}

module.exports = compileWebpack
