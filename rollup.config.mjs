import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

/** @type {import("rollup").RollupOptions} */
export default {
  input: 'src/index.ts',
  plugins: [
    typescript({
      tsconfig: 'tsconfig.build.json',
      outDir: 'lib',
      rootDir: 'src',
    }),
    terser(),
  ],
  external: [/metadata\.json/],
  output: [
    {
      format: 'esm',
      dir: 'lib',
    },
  ],
}
