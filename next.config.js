module.exports = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/{reponame}" : "",
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // // Note: we provide webpack above so you should not `require` it
    // // Perform customizations to webpack config
    // // Important: return the modified config

    // // Example using webpack option
    // //   config.plugins.push(new webpack.IgnorePlugin(//__tests__//));
    // //   return config;
    // config.module.rules.push({
    //   test: /\.(woff|woff2|eot|ttf|otf)$/,
    //   use: [
    //     {
    //       loader: "url-loader",
    //       options: {
    //         limit: 8192,
    //         fallback: "file-loader",
    //         publicPath: "/_next/static/fonts/",
    //         outputPath: "static/fonts/",
    //         name: "[name]-[hash].[ext]"
    //       }
    //     }
    //   ]
    // });
    // return config;
    config.module.rules.push({
      test: /\.(png|PNG|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 8192,
          fallback: "file-loader",
          publicPath: "/_next/static/fonts/",
          outputPath: "static/fonts/",
          name: "[name]-[hash].[ext]"
        }
      }
    });

    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  }
};
