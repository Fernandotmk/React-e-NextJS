module.exports = {
  addons: ['@storybook/addon-essentials'],
  "stories": [
    "../src/components/**/stories.mdx",
    "../src/components/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: '@storybook/react',
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
}