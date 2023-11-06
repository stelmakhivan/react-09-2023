import createExpoWebpackConfigAsync from '@expo/webpack-config/webpack';
import { Arguments, Environment } from '@expo/webpack-config/webpack/types';

module.exports = async function (env: Environment, argv: Arguments) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ["nativewind"],
      },
    },
    argv,
  );

  config.module?.rules?.push({
    test: /\.css$/i,
    use: ["postcss-loader"],
  });

  if (config.resolve?.alias) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/*": "./src/*",
      "@/components/*": "./src/components/*"
    }
  }


  return config;
};
