import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import globals from 'rollup-plugin-node-globals';

export default {
    entry: 'src/main.js',
    format: 'iife',
    plugins: [babel({
        "babelrc": false,
        "exclude": 'node_modules/**',
        "presets": [
            ["es2015", {
                "modules": false
            }],
            "react"
        ],
        "plugins": ["external-helpers"]
    }),
    cjs(),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({
      browser: true,
      main: true
    })
    ],
    dest: 'src/bundle.js'
};
