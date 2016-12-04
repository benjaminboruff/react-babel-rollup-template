import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import globals from 'rollup-plugin-node-globals';
import flow from 'rollup-plugin-flow';

export default {
    entry: 'src/main.js',
    format: 'iife',
    plugins:[
        resolve({
            browser: true,
            main: true
        }),
        cjs(),
        flow(),
        babel({
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
        globals(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    dest: 'src/bundle.js'
};
