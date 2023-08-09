# Template crxjs web extension

Simple template made to simplify the work with crxjs library to quickly make / prototype the easily deployable web extensions.

# TODO:

## Simple template

- change "welcome" page (App.vue) for content script to match the one in popup
- rename vue files to be kebab-case (not Pascal)
- Add loading app var / handling

- Add vitest
- Add i18n

- (?) Add storybook

- (!) prepare logic for synch communication between background, content-script, popup and options

- Prepare background script to include "html" file which can use html related libraries like sound playing API
- (?) Figure out how to put "popup.html" inside public/pages without breaking building process.

## Complex template (code-structure wise / architecture wise)

- Layered structure
- Dependency injection (perhaps)

Legend:
(!) - must have
(?) - good to have but not must to have
