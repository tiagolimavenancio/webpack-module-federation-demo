const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
    mode,
    entry: './src/index',    
    devtool: 'source-map',
    
    optimization: {
      minimize: mode === 'production',
    },

    output: {
        publicPath: "http://localhost:3001/"
    },
    
    resolve: {
        extensions: [".jsx", ".js", ".json"]
    },
    
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            loader: require.resolve("babel-loader"),
            options: {
              presets: [require.resolve("@babel/preset-react")]
            }
          }
        ]
    },

    plugins: [
        new ModuleFederationPlugin({
          name: "app_one",
          library: { type: "var", name: "app_one" },
          filename: "remoteEntry.js",
          remotes: {
            app_two: "app_two",
            app_three: "app_three"
          },
          exposes: {
            'AppContainer':'./src/App'
          },
          shared: ["react", "react-dom", "react-router-dom"]
        }),
        new HtmlWebpackPlugin({
          template: "./public/index.html"
        })
    ]
};