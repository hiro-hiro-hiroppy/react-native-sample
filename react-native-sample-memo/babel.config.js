module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    //追加(React-Native-Paper)
    env: {
      production: {
        plugins: ['react-native-paper/babel']
      },
    },
  };
};
