const outputPath = `${__dirname}/public`;

// noinspection WebpackConfigHighlighting
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/index.tsx',
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: outputPath,
    // 出力ファイル名
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /^(?!.*\.test\.ts)(?!.*\.d\.ts).*\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /.*\.md$/,
        use: 'raw-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(yml|yaml)$/,
        use: [{ loader: 'json-loader' }, { loader: 'yaml-flat-loader' }],
      },
    ],
  },
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ['web', 'es5'],
  devServer: {
    contentBase: outputPath,
    historyApiFallback: true,
  },
};
