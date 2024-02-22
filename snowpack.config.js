module.exports = {
  plugins: [
    // ['@snowpack/plugin-sass' ],
  ],
  mount: {
    src: "/",
  },
  buildOptions: {
    out: "build",
    baseUrl: "/EM shopping Cart/build/",
    clean: true,
    htmlFragments: true,
  },
    optimize: {
      // 'bundle': true,
      minify: true,
      target: "es2015",
    },
};
