/**
 * Daily Batch Jobs Entry Script, allowing for
 * runtime babel compilation in DEV, or using the pre-compiled
 * output in production.
 */
require("core-js/stable");
require("regenerator-runtime/runtime");

// if (process.env.NODE_ENV === "production") {
//   // In production, serve the compiled file.
//   require("../dist/batchJobs/run.js");
// } else {
//   // Babel polyfill to convert es6 code in runtime
//   require("@babel/register")({
//     extensions: [".js", ".jsx", ".ts", ".tsx"],
//     ignore: [/node_modules/],
//   });

require("dotenv");
require("./connect.js");
