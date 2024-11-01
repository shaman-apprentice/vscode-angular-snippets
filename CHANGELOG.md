# Changelog

This changelog is roughly based on [Keep a Changelog](http://keepachangelog.com/).

## [unreleased] (Breaking 🐱 | Feat 🚀 | Fixed 🐞)

## [2.2.0] 2024-11-01

### Feat 🚀

- Add command `a-directive`, which templates an Angular directive.

### Fixed 🐞

- Use *angular.json's* prefix for `a-pipe` to align selector naming with other commands and remove doubled space its import. 

## [2.1.0] 2024-06-02

### Feat 🚀

- Remove `styleUrl` from component template, as styling with utility class names often don't need it.
- Add command `a-component-folder`, which creates folder, component class and component html template file base on given name by user prompt.

## [2.0.1] 2024-04-28

### Fixed 🐞

- Delay extension activation until first call of a contributed command. This fixes error message popping up at start, that angular.json couldn't be found, when you open a non-Angular project. Also change type of message from error to warning, as we already gracefully default to "app".

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
