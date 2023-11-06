import createExpoWebpackConfigAsync from '@expo/webpack-config/webpack';
import { Arguments, Environment } from '@expo/webpack-config/webpack/types';

module.exports = async function (env: Environment, argv: Arguments) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['nativewind'],
      },
    },
    argv,
  );

  if (config.module?.rules) {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.css$/i,
        use: ['postcss-loader'],
      },
    ]
  }

  if (config.resolve?.alias) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/*': './src/*',
      '@/components': './src/components',
    }
  }

  return config;
};
