
const { getLoader, loaderByName } = require('@craco/craco');

module.exports = {
    mode: 'development',
    devServer:{
        port: 3000
    },
    webpack: {
        configure: (webpackConfig) => {
            const rules = [
                // {
                //   test: /\.svg$/i,
                //   type: 'asset',
                //   resourceQuery: /url/, // *.svg?url
                // },
                // {
                //   test: /\.svg$/i,
                //   issuer: /\.[jt]sx?$/,
                //   resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
                //   use: ['@svgr/webpack'],
                // },
                // {
                //     test: /\.(png|jp(e*)g|svg|gif)$/,
                //     type: "asset/resource",
                //   },
                  {
                    test: /\.(png|jp(e*)g|svg|gif)$/,
                    use: [
                      {
                        loader: 'file-loader',
                        options: {
                          name: 'images/[hash]-[name].[ext]',
                        },
                      },
                    ],
                  },
                  {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                  },
                    
                  
            ];
            console.log(webpackConfig.module.rules);
            webpackConfig.module.rules = [...webpackConfig.module.rules , ...rules];
            return webpackConfig;
        }
       
    },
  };