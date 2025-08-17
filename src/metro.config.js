const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add exclusions to reduce file watching
config.resolver.blockList = [
  /.*\/__tests__\/.*/,
  /.*\/\.git\/.*/,
  /.*\/node_modules\/.*\/test\/.*/,
  /.*\/node_modules\/.*\/tests\/.*/,
  /.*\/node_modules\/.*\/spec\/.*/,
  /.*\/node_modules\/.*\/specs\/.*/,
];

// Disable watchman for file watching
config.watchFolders = [];

module.exports = config;