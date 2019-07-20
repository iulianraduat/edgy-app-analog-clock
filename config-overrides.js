module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }

    if (env === 'production') {
        config.devtool = false;
    }

    config.output.filename = 'static/js/[name].js';

    delete config.optimization.splitChunks;
    delete config.optimization.runtimeChunk;

    return config;
}