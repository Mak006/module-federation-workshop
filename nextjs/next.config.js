const packageJsonDeps = require("./package.json").dependencies;

module.exports = {
  future: { webpack5: true },
  webpack: (config, options) => {
    const federationConfig = {
      name: "nextjs",
      filename: "static/chunks/remoteEntry.js",
      shared: {
        //...packageJsonDeps,
        react: {
          eager: true,
          requiredVersion: packageJsonDeps.react,
        },
        "react-dom": {
          eager: true,
          requiredVersion: packageJsonDeps["react-dom"],
        },
      },
      exposes: {
        "./ReactReactiveMap": "./components/ReactReactiveMap.jsx",
        "./Connectors": "./components/connectors.js",
      },
    };

    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin(federationConfig)
    );

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};
