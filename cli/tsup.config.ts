import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['index.ts'],
  minify: true,
  dts: true,
  sourcemap: true,
  format: ['esm'],
})
