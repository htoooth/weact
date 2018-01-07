import string from 'rollup-plugin-string'
import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

export default {
  input: 'src/weact.js',
  output: {
    file: 'dist/weact.js',
    format: 'cjs',
  },
  plugins: [
    json(),
    commonjs(),
    uglify({}, minify),
  ],
}
