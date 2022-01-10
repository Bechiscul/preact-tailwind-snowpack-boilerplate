// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/static",
    public: "/",
  },
  plugins: [
    "inline-svg",
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-postcss",
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  buildOptions: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: 'import {h, Fragment} from "preact";',
  },
};
