const path = require('path');

module.exports = {
    mode: "development", //makes slitted file more readable
   // devtool: "none", //deletes evict()
    entry: "./src/index.js", // choose entry-point
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
};

