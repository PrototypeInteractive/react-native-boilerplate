module.exports = (api) => {
  api.cache(true);

  const presets = ['module:metro-react-native-babel-preset'];
  const plugins = [
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ];

  return {
    presets,
    plugins,
  };
};
