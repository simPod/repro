import path from 'path';
import type webpack from 'webpack';

interface Argv {
  mode: string;
  hot?: true;
}

interface EntryObject {
  [index: string]: string | string[];
}

const mainConfig: (env: object, argv: Argv) => webpack.Configuration = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  const entries: EntryObject = { App: './src/index.ts' };

  const config: webpack.Configuration = {
    entry: entries,
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.tsx?$/,
          use: [{ loader: 'ts-loader' }],
        },
      ],
    },
    output: {
      clean: true,
      filename: `[name]${isDevelopment ? '' : '.[chunkhash]'}.js`,
      hotUpdateChunkFilename: '[id].[fullhash].hot-update.js',
      hotUpdateMainFilename: '[runtime].[fullhash].hot-update.json',
      path: path.join(__dirname, '../public/dist'),
    },
    resolve: {
      extensions: ['.tsx', '.ts'],
    },
  };

  return config;
};

// eslint-disable-next-line import/no-default-export
export default mainConfig;
