import WebExtPlugin from "web-ext-plugin";
import CopyPlugin from "copy-webpack-plugin";
// import LicenseCheckerWebpackPlugin from"license-checker-webpack-plugin";
import { readFile } from "fs/promises";

import path from "path";
import { Transform } from "stream";
const __dirname = path.resolve();

let pckgJson;
readFile("./package.json").then(data => {
  pckgJson = JSON.parse(data);
});

const config = {
  entry: {},
  devtool: "source-map",
  output: {
    path: __dirname+"/dist",
    filename: "[name]/[name].js"
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/static", to: "static" },
        {
          from: "src/manifest.json",
          to: "manifest.json",
          info: {minimized: false},
          transform(content, absoluteFrom) {
            content = JSON.parse(content);
            content.version = pckgJson.version;
            content.description = pckgJson.description;
            return JSON.stringify(content, null, 2);
          }, 
        },
        // { from: "node_modules/webextension-polyfill/dist/browser-polyfill.js" },
        { from: "src/background/", to: "background/", info: { minimized: false}},
        { from: "src/settings/", to: "settings/", info: {minimized: false} }
      ],
    }),
    new WebExtPlugin({
      sourceDir: __dirname+"/dist",
      overwriteDest: true,
      startUrl: "about:debugging"
    }),
    // new LicenseCheckerWebpackPlugin({
    //   outputFilename: "/license-acknowledgements.txt"
    // })
  ]
};

export default config;