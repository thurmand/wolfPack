module.exports = {
  // exportPathMap: function() {
  //   return {
  //     "/": { page: "/" },
  //     "/about": { page: "/about" }
  //   };
  // },
  assetPrefix: process.env.NODE_ENV === "production" ? "/wolfPack" : "",
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
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
