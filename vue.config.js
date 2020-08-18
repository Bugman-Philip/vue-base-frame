const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    productionSourceMap: true,
    configureWebpack: {
        optimization: {
            minimizer: [
                new TerserPlugin({
                    sourceMap: false, // Must be set to true if using source-maps in production
                    terserOptions: {
                        compress: {
                            warnings: false,
                            // eslint-disable-next-line @typescript-eslint/camelcase
                            drop_console: true,
                            // eslint-disable-next-line @typescript-eslint/camelcase
                            drop_debugger: true,
                            // eslint-disable-next-line @typescript-eslint/camelcase
                            pure_funcs: ['console.log']
                        }
                    }
                })
            ]
        }
    },

    devServer: {
        host: '0.0.0.0',
        port: 8080,
        https: false,
        // 设置代理
        proxy: {
            '/api': {
                target: 'http://192.168.1.17:9210/',
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
