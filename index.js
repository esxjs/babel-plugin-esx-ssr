'use strict'

const convert = require('to-esx')
const { parse } = require('babylon')
var done = false
function transform () {
  return {
    visitor: {
      Program(program, { file }) {
        if (done) return
        const { code } = file
        const converted = parse(convert(code), {
          allowImportExportEverywhere: true,
          plugins: ['jsx']
        })
        program.replaceWith(converted.program)
        done = true
      }
    },
    manipulateOptions(_, parserOpts) { parserOpts.plugins.push("jsx") }
  }
}

module.exports = transform