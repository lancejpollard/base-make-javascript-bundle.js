
const webpack = require('webpack')

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
        const json = stats.toJson()
        console.log(err ?? json.errors[0].message);
        return rej(err)
      } else {
        return res()
      }
    })
  })
}

module.exports = compileWebpack
