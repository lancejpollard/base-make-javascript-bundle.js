
const compile = require('..')

start()

async function start() {
  await compile({
    configPath: './test/config.json',
    outputPath: './tmp/out.js'
  })
}
