module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]]
    }
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.output.chunkFilename = 'static/js/[name].[contenthash:8].chunk.js';
  config.optimization.splitChunks = {
    chunks: 'all',
    name: false
  };
  config.optimization.runtimeChunk = true;
  return config;
};
