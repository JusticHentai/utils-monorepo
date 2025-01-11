import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  minify: true,
  clean: true,
  dts: true,
  target: 'es5',
  external: ['@swc/helpers'],
  sourcemap: true,
})
