import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: './index.ts',
    output: [
      {
        file: './dist/utils.js',
        format: 'es',
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      getBabelOutputPlugin({
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              useBuiltIns: 'usage',
              corejs: '3.38.0',
            },
          ],
        ],
        plugins: ['@babel/plugin-transform-runtime'],
      }),
      terser(),
    ],
  },
  {
    input: './index.ts',
    output: [
      {
        file: './dist/utils.d.ts',
        format: 'es',
      },
    ],
    plugins: [dts()],
  },
]
