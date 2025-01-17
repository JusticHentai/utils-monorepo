import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  minify: true,
  sourcemap: true,
  format: ['esm'],
})
