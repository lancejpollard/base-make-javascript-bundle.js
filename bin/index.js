#!/usr/bin/node

const compileToBrowserJS = require('../browser')
const compileToNodeJS = require('../browser')

const location = process.argv[2]
const configPath = process.argv[3]
const compile = location === 'browser'
  ? compileToBrowserJS
  : compileToNodeJS
