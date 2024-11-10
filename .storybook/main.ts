const path = require('path');

const config: {
  webpackFinal: (config) => Promise<any>;
  stories: string[];
  framework: { name: string; options: {} };
  addons: string[];
} = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  webpackFinal: async (config) => {
    // Find and remove Storybook's default SVG rule
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test('.svg')
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    });

    return config;
  },
};
export default config;
