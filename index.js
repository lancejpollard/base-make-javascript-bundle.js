
const fs = require('fs')
const makeText = require('./text/javascript')
const makeRoad = require('./text/javascript/make')

module.exports = make

function make(base, ROAD_TO_MINT, dock, compile) {
  const deck = {}
  const file = deck[base] = makeTestFile(base)
  file.mint = 'test-file'
  load(deck[base], deck, ROAD_TO_MINT)
  muse(file)
  const text = makeText(file, deck)
  // save(dock, text)
  // if (compile) compile()
}


function save(name, text) {
  if (!fs.existsSync(`load/${name}`)) {
    fs.mkdirSync(`load/${name}`)
  }
  fs.writeFileSync(`load/${name}/base.js`, text)
}

function makeViewFile(road) {
  const [host, name, ...rest] = road.split('/')
  const text = readFile(`../${name}/${rest.join('/')}/base.link`)
  const tree = makeTree(text, road.replace(/\//g, '-'))
  const file = mintViewFile(road, tree)
  file.text = text
  return file
}

function makeTestFile(road) {
  const [host, name, ...rest] = road.split('/')
  const text = readFile(`../${name}/${rest.join('/')}/base.link`)
  const tree = makeTree(text, road.replace(/\//g, '-'))
  const file = mintTestFile(road, tree)
  file.text = text
  return file
}

function makeFormFile(road) {
  const [host, name, ...rest] = road.split('/')
  const text = readFile(`../${name}/${rest.join('/')}/base.link`)
  const tree = makeTree(text, road.replace(/\//g, '-'))
  const file = mintFormFile(road, tree)
  return file
}

function makeCallFile(road) {
  const text = readFile(`./${road}/base.link`)
  const tree = makeTree(text, road.replace(/\//g, '-'))
  const file = mintCallFile(road, tree)
}

function makeTaskFile(road) {
  const [host, name, ...rest] = road.split('/')
  const text = readFile(`../${name}/${rest.join('/')}/base.link`)
  const tree = makeTree(text, road.replace(/\//g, '-'))
  const file = mintTaskFile(road, tree)
  return file
}

function readFile(road) {
  return fs.readFileSync(road, 'utf-8');
}
