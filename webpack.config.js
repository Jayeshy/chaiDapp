module.exports = {
  // other webpack configuration settings

  module: {
    rules: [
      {
        test: /\.node$/,
        use: "file-loader",
      },
    ],
  },
};
