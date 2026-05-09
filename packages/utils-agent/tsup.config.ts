import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  minify: true,
  clean: true,
  dts: true,
  target: 'esnext',
  sourcemap: true,
})
