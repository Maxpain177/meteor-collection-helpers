Package.describe({
  name: "maxpain:collection-helpers",
  summary: "Transform your collections with helpers that you define",
  version: "1.1.2",
  documentation: "README.md",
  git: "https://github.com/Maxpain177/meteor-collection-helpers.git",
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2');
  api.use([
    'underscore',
    'mongo']);

  api.addFiles('collection-helpers.js');
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'underscore',
    'mongo',
    'maxpain:collection-helpers']);

  api.addFiles('collection-helpers_tests.js');
});
