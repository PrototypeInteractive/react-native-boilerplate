module.exports = (api) => {
  api.cache(true);

  const presets = ['module:metro-react-native-babel-preset'];
  const plugins = [
    '@babel/plugin-transform-flow-strip-types',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-proposal-object-rest-spread',
  ];

  return {
    presets,
    plugins,
  };
};
