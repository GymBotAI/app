module.exports = function (api) {
  api.cache.forever();
  return {
    presets: ["babel-preset-expo"],
    plugins: ["expo-router/babel"],
  };
};
