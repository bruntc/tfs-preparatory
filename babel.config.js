module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "module-name-mapper",
      {
        moduleNameMapper: {
          "\\.css$": "<rootDir>/test/mock-styles/style-mock.js",
        },
      },
    ],
  ],
};
