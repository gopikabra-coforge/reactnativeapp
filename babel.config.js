const alias = { '^@/(.+)': './src/\\1' }; // @/folder will be an alias to <root>/src/folder

module.exports = {
  plugins: [['module-resolver', { alias }]],
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
