import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const isDev = process.env.NODE_ENV !== 'production'

const filename = 'helpers';
const name = 'Helpers';

const config = [];

if (isDev) {  // Dev
  config.push({
    input: 'src/index.dev.ts',
    output: {
      sourcemap: true,
      name,
      format: 'iife',
      file: `dev/${filename}.dev.js`,
    },
    plugins: [
      typescript({
        target: 'esnext',
      }),
    ]
  });
} else {  // Prod
  config.push({
    input: 'src/index.ts',
    output: [
      {
        sourcemap: true,
        name,
        format: 'es',
        file: `dist/${filename}.es.js`,
      }
    ],
    plugins: [
      typescript({
        target: 'esnext',
      }),
      terser({
        format: {
          beautify: true,
          comments: true,
        },
        mangle: false
      }),
    ],
  });
}

export default config;