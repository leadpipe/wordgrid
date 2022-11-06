const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const FontPreloadPlugin = require('webpack-font-preload-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

let debugMode = true;
const baseConfig = {
  entry: './src/bootstrap.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '',
  },
  experiments: {
    syncWebAssembly: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  performance: {
    // The words file is extra large; that's ok.
    assetFilter: filename => !/^words-v.\.txt$/.test(filename),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, '../crate'),
      outName: 'leadpipe_wordgrid',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/index.html',
          to: __dirname + '/dist',
          transform(content) {
            return content
              .toString()
              .replaceAll('$debugMode', String(debugMode));
          },
        },
        {from: '../icons', to: __dirname + '/dist'},
        {from: '../wordgrid.webmanifest', to: __dirname + '/dist'},
        {from: '../words-v1.txt', to: __dirname + '/dist'},
      ],
    }),
    new ForkTsCheckerWebpackPlugin(),
    new FontPreloadPlugin(),
  ],
};

module.exports = (_env, argv) => {
  let config = baseConfig;
  debugMode = argv.mode === 'development'
  if (debugMode) {
    config = {
      ...config,
      devServer: {
        devMiddleware: {
          writeToDisk: true,
        },
      },
    };
  } else {
    config = {
      ...config,
      plugins: [
        ...config.plugins,
        new WorkboxPlugin.GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
          maximumFileSizeToCacheInBytes: 4 * 1024 * 1024, // for the words file
          dontCacheBustURLsMatching: /^([0-9a-f]{20}\.|words-v.\.txt$)/,
        }),
      ],
    };
  }
  return config;
};
