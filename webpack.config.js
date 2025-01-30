const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/fonts"),
          to: path.resolve(__dirname, "dist/assets/fonts")
        }
      ]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'responsive-loader',
            options: {
              sizes: [1920,767],
              quality: 85,
              placeholder: true,
              outputPath: 'assets/images',
              format: 'webp',
              // If you want to enable sharp support:
              adapter: require('responsive-loader/sharp'),
              additionalPaths: [
                {
                  width: 0,
                  format: 'webp',
                  quality: 85,
                  outputPath: 'assets/images',
                },
              ],
            },
          },
          // {
          //   loader: 'file-loader',
          //   options: {

          //   }
          // }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "assets/fonts/[name][ext]"
        }
      },      
    ],
  },
};