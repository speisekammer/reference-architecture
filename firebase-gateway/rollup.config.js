import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import tsConfig from './tsconfig.json'
import babel from 'rollup-plugin-babel'

const config = [
  {
    input: 'src/index.ts',
    output: [{ file: 'build/src/index.js', sourcemap: true, format: 'commonjs' }],
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      typescript(
        {
          sourceMap: tsConfig.compilerOptions.sourceMap
        }
      )
    ],
    external: ['firebase/app', 'firebase/firestore', 'entities']
  },
  {
    input: 'build/src/index.d.ts',
    output: [{ file: 'build/src/index.d.ts', format: 'commonjs' }],
    plugins: [
      dts(
        {
          compilerOptions: {
            baseUrl: tsConfig.compilerOptions.baseUrl
          }
        }
      )
    ]
  }
]

export default config
