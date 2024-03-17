# Changelog

This changelog is roughly based on [Keep a Changelog](http://keepachangelog.com/).

## [unreleased] (Breaking 🐱 | Feat | Fixed 🐞)

## [2.0.0] 2024-03-17

### Breaking 🐱

- All snippets are now commands to support dynamic content like using angular.json's project prefix.

### Feat 🚀

- Instead of always using `"app"` as component prefix, read the prefix from angular.json at project root at VS Code start time.
- Add snippet `a-service` for an Angular service.
- Add snippet `a-pipe` for an Angular pipe.
- Add snippet `a-jest` for a Jest unit test.


## [1.0.1] 2024-01-21

### Fixed 🐞

- Transform camel case file names to kebab case component selectors, e.g. `someTool.component.ts` to `app-some-tool`.

## [1.0.0] 2024-01-21

- Release initial version.
