# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.18.1](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/shared@0.18.0...@iliad-ui/shared@0.18.1) (2021-10-21)

**Note:** Version bump only for package @iliad-ui/shared

# 0.18.0 (2021-10-21)

### Bug Fixes

-   add likeAnchor API to Card element ([5c338fb](https://github.com/gaoding-inc/iliad-ui/commit/5c338fbfc73d9d20c8f771e11114064cadeeb732))
-   allow detached elements to be used as content for an overlay ([3ad8383](https://github.com/gaoding-inc/iliad-ui/commit/3ad83837b6c9a693a4fc24501e3fc7fb2383a12b))
-   allow rendered anchors to be aria-hidden ([2e9aa23](https://github.com/gaoding-inc/iliad-ui/commit/2e9aa2324013e1d2311a8d4307dafe17912328ee))
-   apply Focuable styles in class extensions ([38f7afd](https://github.com/gaoding-inc/iliad-ui/commit/38f7afd7cdb317d5c8b6e69f1301decd21364b1d))
-   ensure browser understandable extensions ([f4e59f7](https://github.com/gaoding-inc/iliad-ui/commit/f4e59f76f86369593810463c6406565e28ad97e9))
-   ensure lazily loaded focusElements do not crash ([64f2a54](https://github.com/gaoding-inc/iliad-ui/commit/64f2a54a5a6934306e97433e8102da6fe38b2660))
-   flatten assigned nodes to observe text of nested slots ([08ffd68](https://github.com/gaoding-inc/iliad-ui/commit/08ffd68bf31222019ec947b6aa32feada39f4fd2))
-   include "type" in package.json, generate custom-elements.json ([1a8d716](https://github.com/gaoding-inc/iliad-ui/commit/1a8d716f2f787deb8d868a78bd28c8e62fe90e21))
-   include default export in the "exports" fields ([f32407d](https://github.com/gaoding-inc/iliad-ui/commit/f32407d7bbfd18e72c35b6f27740549e79957858))
-   include the "types" entry in package.json files ([b432f59](https://github.com/gaoding-inc/iliad-ui/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   manage "lang" via context provided by "sp-theme" ([b1e3457](https://github.com/gaoding-inc/iliad-ui/commit/b1e3457ae447427c54f8645c478866340329750c))
-   no scroll update when managing elements outside of the tab order ([144c548](https://github.com/gaoding-inc/iliad-ui/commit/144c548d3eeeaec6054057f124e73bbb8928c73b))
-   normalize "event" and "error" argument names ([8d382cd](https://github.com/gaoding-inc/iliad-ui/commit/8d382cdac98282c886f23c4a8d6cf4910c4a606c))
-   prevent tabindex=-1 elements from placing focus on their host ([1ac1293](https://github.com/gaoding-inc/iliad-ui/commit/1ac12931771c6d5fdbc99f5d214702ed644cb81a))
-   renamed the file but not this ([ad94e53](https://github.com/gaoding-inc/iliad-ui/commit/ad94e53a8932b395d916693b147eee3eef4ca043))
-   split-button tests & lots of cleanup based on review feedback ([10b4a04](https://github.com/gaoding-inc/iliad-ui/commit/10b4a04c5791d1acd9e59d48a8960b9c17aa89c7)), closes [#1189](https://github.com/gaoding-inc/iliad-ui/issues/1189)
-   update "reparentChildren" types for flexibility ([2d358be](https://github.com/gaoding-inc/iliad-ui/commit/2d358be094cf73785d0858545ccd0f9ca2aa8db0))
-   update to latest spectrum-css packages ([a5ca19f](https://github.com/gaoding-inc/iliad-ui/commit/a5ca19f67d5b3f0951667c4441d4d977bf1e0937))
-   **button:** relate to this.href correctly ([fade3ea](https://github.com/gaoding-inc/iliad-ui/commit/fade3ea9bd6bda6192f84a0ab9af4b812517e267))
-   update side effect listings ([8160d3a](https://github.com/gaoding-inc/iliad-ui/commit/8160d3ab2c4f5ea11ac40897a5cf1fdaa357f4a8))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/gaoding-inc/iliad-ui/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))
-   **shared:** fixes focus-visible types in test ([0dc7d68](https://github.com/gaoding-inc/iliad-ui/commit/0dc7d6822820bd6fdb53bc21f37b4f8eb55d2bfd))
-   **shared:** fixes search input - fixes [#463](https://github.com/gaoding-inc/iliad-ui/issues/463) ([6833944](https://github.com/gaoding-inc/iliad-ui/commit/68339448bdcc86dd6478f0f5e78c0b93a75e2110))
-   **shared:** improves types for focus-visible ([b980f2a](https://github.com/gaoding-inc/iliad-ui/commit/b980f2af2c6635ec6cb2d367b673b08d8e1c4482))
-   **shared:** include an actual entry point for bundlephobia ([00fd6ab](https://github.com/gaoding-inc/iliad-ui/commit/00fd6abb070e1eddfb8a640f19548289ef6e7acc))
-   **shared:** make Focusable pass disabled always ([a339d6f](https://github.com/gaoding-inc/iliad-ui/commit/a339d6fb2aa9645e7bca5472487618edff5f1182))
-   **shared:** prevent focusable returning focus to host ([745f7b0](https://github.com/gaoding-inc/iliad-ui/commit/745f7b0d23c14efd937e4a0be4d488c5d0865f34))
-   **shared:** prevent focusing focusable root on second click ([0fb5006](https://github.com/gaoding-inc/iliad-ui/commit/0fb50068c844de91134f4dd15e7fef1df5ef354b))
-   **shared:** quiet the angry soul of the explicit any linter ([c278263](https://github.com/gaoding-inc/iliad-ui/commit/c2782634dd0478c20ff3972398909b334aad5cb0))
-   **shared:** removes mousedown event handling in focusable ([4e90d4c](https://github.com/gaoding-inc/iliad-ui/commit/4e90d4c7a8bf2887f372d3e0f38083c2424c4f66))
-   **split-button:** follow visible tab order ([966d3b6](https://github.com/gaoding-inc/iliad-ui/commit/966d3b601a1eda5bf45394fad3bb7d100c7d3b84))
-   **tabs:** correct entry focus element ([64407d3](https://github.com/gaoding-inc/iliad-ui/commit/64407d37fd09d3d598253a66c3b342882d51a826))
-   **top-nav:** prototype top-nav pattern ([9708f6f](https://github.com/gaoding-inc/iliad-ui/commit/9708f6f63e080c0ec91c11763d3121a407349d1a))

### Features

-   update lit-\* dependencies, wip ([aad74d6](https://github.com/gaoding-inc/iliad-ui/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))
-   **picker:** process field-label content for more accurate a11y tree ([dc9df54](https://github.com/gaoding-inc/iliad-ui/commit/dc9df54d052edc46c2399f0f7b12d3b5d4aff740))
-   add screenshot regression testing to CI ([8205dfe](https://github.com/gaoding-inc/iliad-ui/commit/8205dfe33c725e13f74f411779c2ff3b6061a913))
-   allow activation of longpress content ([55e71fd](https://github.com/gaoding-inc/iliad-ui/commit/55e71fdf9fd5dde489871c3d9798ef8957f4e5b6))
-   deprecate sp-menu in PickerBase derived classes ([bbb773c](https://github.com/gaoding-inc/iliad-ui/commit/bbb773c915587b9d92875e333a6b422ec878a8ea))
-   leverage "exports" field in package.json ([321abd7](https://github.com/gaoding-inc/iliad-ui/commit/321abd7b7e78ccd9157cff75a1fa3dbd06e81f79))
-   use :focus-visable (via polyfill) instead of :focus ([11c6fc7](https://github.com/gaoding-inc/iliad-ui/commit/11c6fc77960de8e57dd9c49bb7669df689f0ebaa))
-   use 3.0.0-beta.\* release for styles ([877b485](https://github.com/gaoding-inc/iliad-ui/commit/877b485f20c76ec8f77975747322f572eea88e97))
-   use latest exports specification ([a7ecf4b](https://github.com/gaoding-inc/iliad-ui/commit/a7ecf4b6da7996f36a8a89f62cc2384709497008))
-   **button:** use synthetic button instead of native ([49e94bc](https://github.com/gaoding-inc/iliad-ui/commit/49e94bcf79da6ec1ef05f4197042f992922b91ca))
-   **link:** support rel attribute ([df4b5a8](https://github.com/gaoding-inc/iliad-ui/commit/df4b5a831aa35f5992b183cbba3cad18eb3dbb53))
-   **shared:** add mixing for observing text content changes in a slot ([1318150](https://github.com/gaoding-inc/iliad-ui/commit/1318150ca6282c0b15dc06fe0e821d142175455e))
-   **shared:** conditionally apply focus-visible polyfill ([b854df6](https://github.com/gaoding-inc/iliad-ui/commit/b854df6dd050da4762eaf75eca1a7a62673b3828))
-   **sidenav:** add keyboard accessibility ([6ff622b](https://github.com/gaoding-inc/iliad-ui/commit/6ff622bf89ad319a7d464fbdd2477c7b55b65cdd))
-   **split-button:** add split-button pattern ([4833a59](https://github.com/gaoding-inc/iliad-ui/commit/4833a598bb3da3552d194586350a3888dba79543))
-   **tab-list:** autofocus, :before/after processing, visual test ([83dddb0](https://github.com/gaoding-inc/iliad-ui/commit/83dddb03f2e1ea460567b2fa27b02e88099cfa42))

### Performance Improvements

-   **shared:** focus-visible, lazily instantiate the focus-visible polyfilling ([fe257c1](https://github.com/gaoding-inc/iliad-ui/commit/fe257c1eb10bcb8cfb8ca6700e89efb2386980e5))
-   use "sideEffects" listing in package.json ([7271614](https://github.com/gaoding-inc/iliad-ui/commit/7271614c0ca3ccf3566583bb59467eb15a6199cd))
-   use imported TypeScript helpers instead of inlining them ([cc2bd0a](https://github.com/gaoding-inc/iliad-ui/commit/cc2bd0accd643c2f35cbf1ba809b54f52c25628d))

### Reverts

-   Revert "chore: release new versions" ([a6d655d](https://github.com/gaoding-inc/iliad-ui/commit/a6d655d1435ee6427a3778b89f1a6cf9fe4beb9d))

## [0.17.3](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/shared@0.17.2...@iliad-ui/shared@0.17.3) (2021-10-20)

**Note:** Version bump only for package @iliad-ui/shared

## [0.17.3-alpha.0](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/shared@0.17.2...@iliad-ui/shared@0.17.3-alpha.0) (2021-10-20)

**Note:** Version bump only for package @iliad-ui/shared

## [0.17.2](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/shared@0.17.1...@iliad-ui/shared@0.17.2) (2021-10-20)

**Note:** Version bump only for package @iliad-ui/shared

## [0.17.2](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/shared@0.17.1...@iliad-ui/shared@0.17.2) (2021-10-19)

**Note:** Version bump only for package @iliad-ui/shared

## [0.17.1](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/shared@0.17.0...@iliad-ui/shared@0.17.1) (2021-10-19)

**Note:** Version bump only for package @iliad-ui/shared

## [0.17.1](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/shared@0.17.0...@iliad-ui/shared@0.17.1) (2021-10-18)

**Note:** Version bump only for package @iliad-ui/shared

# 0.17.0 (2021-10-18)

### Bug Fixes

-   add likeAnchor API to Card element ([5c338fb](https://github.com/gaoding-inc/iliad-ui/commit/5c338fbfc73d9d20c8f771e11114064cadeeb732))
-   allow detached elements to be used as content for an overlay ([3ad8383](https://github.com/gaoding-inc/iliad-ui/commit/3ad83837b6c9a693a4fc24501e3fc7fb2383a12b))
-   allow rendered anchors to be aria-hidden ([2e9aa23](https://github.com/gaoding-inc/iliad-ui/commit/2e9aa2324013e1d2311a8d4307dafe17912328ee))
-   apply Focuable styles in class extensions ([38f7afd](https://github.com/gaoding-inc/iliad-ui/commit/38f7afd7cdb317d5c8b6e69f1301decd21364b1d))
-   ensure browser understandable extensions ([f4e59f7](https://github.com/gaoding-inc/iliad-ui/commit/f4e59f76f86369593810463c6406565e28ad97e9))
-   ensure lazily loaded focusElements do not crash ([64f2a54](https://github.com/gaoding-inc/iliad-ui/commit/64f2a54a5a6934306e97433e8102da6fe38b2660))
-   flatten assigned nodes to observe text of nested slots ([08ffd68](https://github.com/gaoding-inc/iliad-ui/commit/08ffd68bf31222019ec947b6aa32feada39f4fd2))
-   include "type" in package.json, generate custom-elements.json ([1a8d716](https://github.com/gaoding-inc/iliad-ui/commit/1a8d716f2f787deb8d868a78bd28c8e62fe90e21))
-   include default export in the "exports" fields ([f32407d](https://github.com/gaoding-inc/iliad-ui/commit/f32407d7bbfd18e72c35b6f27740549e79957858))
-   include the "types" entry in package.json files ([b432f59](https://github.com/gaoding-inc/iliad-ui/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   manage "lang" via context provided by "sp-theme" ([b1e3457](https://github.com/gaoding-inc/iliad-ui/commit/b1e3457ae447427c54f8645c478866340329750c))
-   no scroll update when managing elements outside of the tab order ([144c548](https://github.com/gaoding-inc/iliad-ui/commit/144c548d3eeeaec6054057f124e73bbb8928c73b))
-   normalize "event" and "error" argument names ([8d382cd](https://github.com/gaoding-inc/iliad-ui/commit/8d382cdac98282c886f23c4a8d6cf4910c4a606c))
-   prevent tabindex=-1 elements from placing focus on their host ([1ac1293](https://github.com/gaoding-inc/iliad-ui/commit/1ac12931771c6d5fdbc99f5d214702ed644cb81a))
-   renamed the file but not this ([ad94e53](https://github.com/gaoding-inc/iliad-ui/commit/ad94e53a8932b395d916693b147eee3eef4ca043))
-   split-button tests & lots of cleanup based on review feedback ([10b4a04](https://github.com/gaoding-inc/iliad-ui/commit/10b4a04c5791d1acd9e59d48a8960b9c17aa89c7)), closes [#1189](https://github.com/gaoding-inc/iliad-ui/issues/1189)
-   update "reparentChildren" types for flexibility ([2d358be](https://github.com/gaoding-inc/iliad-ui/commit/2d358be094cf73785d0858545ccd0f9ca2aa8db0))
-   update to latest spectrum-css packages ([a5ca19f](https://github.com/gaoding-inc/iliad-ui/commit/a5ca19f67d5b3f0951667c4441d4d977bf1e0937))
-   **button:** relate to this.href correctly ([fade3ea](https://github.com/gaoding-inc/iliad-ui/commit/fade3ea9bd6bda6192f84a0ab9af4b812517e267))
-   update side effect listings ([8160d3a](https://github.com/gaoding-inc/iliad-ui/commit/8160d3ab2c4f5ea11ac40897a5cf1fdaa357f4a8))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/gaoding-inc/iliad-ui/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))
-   **shared:** fixes focus-visible types in test ([0dc7d68](https://github.com/gaoding-inc/iliad-ui/commit/0dc7d6822820bd6fdb53bc21f37b4f8eb55d2bfd))
-   **shared:** fixes search input - fixes [#463](https://github.com/gaoding-inc/iliad-ui/issues/463) ([6833944](https://github.com/gaoding-inc/iliad-ui/commit/68339448bdcc86dd6478f0f5e78c0b93a75e2110))
-   **shared:** improves types for focus-visible ([b980f2a](https://github.com/gaoding-inc/iliad-ui/commit/b980f2af2c6635ec6cb2d367b673b08d8e1c4482))
-   **shared:** include an actual entry point for bundlephobia ([00fd6ab](https://github.com/gaoding-inc/iliad-ui/commit/00fd6abb070e1eddfb8a640f19548289ef6e7acc))
-   **shared:** make Focusable pass disabled always ([a339d6f](https://github.com/gaoding-inc/iliad-ui/commit/a339d6fb2aa9645e7bca5472487618edff5f1182))
-   **shared:** prevent focusable returning focus to host ([745f7b0](https://github.com/gaoding-inc/iliad-ui/commit/745f7b0d23c14efd937e4a0be4d488c5d0865f34))
-   **shared:** prevent focusing focusable root on second click ([0fb5006](https://github.com/gaoding-inc/iliad-ui/commit/0fb50068c844de91134f4dd15e7fef1df5ef354b))
-   **shared:** quiet the angry soul of the explicit any linter ([c278263](https://github.com/gaoding-inc/iliad-ui/commit/c2782634dd0478c20ff3972398909b334aad5cb0))
-   **shared:** removes mousedown event handling in focusable ([4e90d4c](https://github.com/gaoding-inc/iliad-ui/commit/4e90d4c7a8bf2887f372d3e0f38083c2424c4f66))
-   **split-button:** follow visible tab order ([966d3b6](https://github.com/gaoding-inc/iliad-ui/commit/966d3b601a1eda5bf45394fad3bb7d100c7d3b84))
-   **tabs:** correct entry focus element ([64407d3](https://github.com/gaoding-inc/iliad-ui/commit/64407d37fd09d3d598253a66c3b342882d51a826))
-   **top-nav:** prototype top-nav pattern ([9708f6f](https://github.com/gaoding-inc/iliad-ui/commit/9708f6f63e080c0ec91c11763d3121a407349d1a))

### Features

-   update lit-\* dependencies, wip ([aad74d6](https://github.com/gaoding-inc/iliad-ui/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))
-   **picker:** process field-label content for more accurate a11y tree ([dc9df54](https://github.com/gaoding-inc/iliad-ui/commit/dc9df54d052edc46c2399f0f7b12d3b5d4aff740))
-   add screenshot regression testing to CI ([8205dfe](https://github.com/gaoding-inc/iliad-ui/commit/8205dfe33c725e13f74f411779c2ff3b6061a913))
-   allow activation of longpress content ([55e71fd](https://github.com/gaoding-inc/iliad-ui/commit/55e71fdf9fd5dde489871c3d9798ef8957f4e5b6))
-   deprecate sp-menu in PickerBase derived classes ([bbb773c](https://github.com/gaoding-inc/iliad-ui/commit/bbb773c915587b9d92875e333a6b422ec878a8ea))
-   leverage "exports" field in package.json ([321abd7](https://github.com/gaoding-inc/iliad-ui/commit/321abd7b7e78ccd9157cff75a1fa3dbd06e81f79))
-   use :focus-visable (via polyfill) instead of :focus ([11c6fc7](https://github.com/gaoding-inc/iliad-ui/commit/11c6fc77960de8e57dd9c49bb7669df689f0ebaa))
-   use 3.0.0-beta.\* release for styles ([877b485](https://github.com/gaoding-inc/iliad-ui/commit/877b485f20c76ec8f77975747322f572eea88e97))
-   use latest exports specification ([a7ecf4b](https://github.com/gaoding-inc/iliad-ui/commit/a7ecf4b6da7996f36a8a89f62cc2384709497008))
-   **button:** use synthetic button instead of native ([49e94bc](https://github.com/gaoding-inc/iliad-ui/commit/49e94bcf79da6ec1ef05f4197042f992922b91ca))
-   **link:** support rel attribute ([df4b5a8](https://github.com/gaoding-inc/iliad-ui/commit/df4b5a831aa35f5992b183cbba3cad18eb3dbb53))
-   **shared:** add mixing for observing text content changes in a slot ([1318150](https://github.com/gaoding-inc/iliad-ui/commit/1318150ca6282c0b15dc06fe0e821d142175455e))
-   **shared:** conditionally apply focus-visible polyfill ([b854df6](https://github.com/gaoding-inc/iliad-ui/commit/b854df6dd050da4762eaf75eca1a7a62673b3828))
-   **sidenav:** add keyboard accessibility ([6ff622b](https://github.com/gaoding-inc/iliad-ui/commit/6ff622bf89ad319a7d464fbdd2477c7b55b65cdd))
-   **split-button:** add split-button pattern ([4833a59](https://github.com/gaoding-inc/iliad-ui/commit/4833a598bb3da3552d194586350a3888dba79543))
-   **tab-list:** autofocus, :before/after processing, visual test ([83dddb0](https://github.com/gaoding-inc/iliad-ui/commit/83dddb03f2e1ea460567b2fa27b02e88099cfa42))

### Performance Improvements

-   **shared:** focus-visible, lazily instantiate the focus-visible polyfilling ([fe257c1](https://github.com/gaoding-inc/iliad-ui/commit/fe257c1eb10bcb8cfb8ca6700e89efb2386980e5))
-   use "sideEffects" listing in package.json ([7271614](https://github.com/gaoding-inc/iliad-ui/commit/7271614c0ca3ccf3566583bb59467eb15a6199cd))
-   use imported TypeScript helpers instead of inlining them ([cc2bd0a](https://github.com/gaoding-inc/iliad-ui/commit/cc2bd0accd643c2f35cbf1ba809b54f52c25628d))

### Reverts

-   Revert "chore: release new versions" ([a6d655d](https://github.com/gaoding-inc/iliad-ui/commit/a6d655d1435ee6427a3778b89f1a6cf9fe4beb9d))

# 0.16.0 (2021-10-18)

### Bug Fixes

-   add likeAnchor API to Card element ([5c338fb](https://github.com/gaoding-inc/iliad-ui/commit/5c338fbfc73d9d20c8f771e11114064cadeeb732))
-   allow detached elements to be used as content for an overlay ([3ad8383](https://github.com/gaoding-inc/iliad-ui/commit/3ad83837b6c9a693a4fc24501e3fc7fb2383a12b))
-   allow rendered anchors to be aria-hidden ([2e9aa23](https://github.com/gaoding-inc/iliad-ui/commit/2e9aa2324013e1d2311a8d4307dafe17912328ee))
-   apply Focuable styles in class extensions ([38f7afd](https://github.com/gaoding-inc/iliad-ui/commit/38f7afd7cdb317d5c8b6e69f1301decd21364b1d))
-   ensure browser understandable extensions ([f4e59f7](https://github.com/gaoding-inc/iliad-ui/commit/f4e59f76f86369593810463c6406565e28ad97e9))
-   ensure lazily loaded focusElements do not crash ([64f2a54](https://github.com/gaoding-inc/iliad-ui/commit/64f2a54a5a6934306e97433e8102da6fe38b2660))
-   flatten assigned nodes to observe text of nested slots ([08ffd68](https://github.com/gaoding-inc/iliad-ui/commit/08ffd68bf31222019ec947b6aa32feada39f4fd2))
-   include "type" in package.json, generate custom-elements.json ([1a8d716](https://github.com/gaoding-inc/iliad-ui/commit/1a8d716f2f787deb8d868a78bd28c8e62fe90e21))
-   include default export in the "exports" fields ([f32407d](https://github.com/gaoding-inc/iliad-ui/commit/f32407d7bbfd18e72c35b6f27740549e79957858))
-   include the "types" entry in package.json files ([b432f59](https://github.com/gaoding-inc/iliad-ui/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   manage "lang" via context provided by "sp-theme" ([b1e3457](https://github.com/gaoding-inc/iliad-ui/commit/b1e3457ae447427c54f8645c478866340329750c))
-   no scroll update when managing elements outside of the tab order ([144c548](https://github.com/gaoding-inc/iliad-ui/commit/144c548d3eeeaec6054057f124e73bbb8928c73b))
-   normalize "event" and "error" argument names ([8d382cd](https://github.com/gaoding-inc/iliad-ui/commit/8d382cdac98282c886f23c4a8d6cf4910c4a606c))
-   prevent tabindex=-1 elements from placing focus on their host ([1ac1293](https://github.com/gaoding-inc/iliad-ui/commit/1ac12931771c6d5fdbc99f5d214702ed644cb81a))
-   renamed the file but not this ([ad94e53](https://github.com/gaoding-inc/iliad-ui/commit/ad94e53a8932b395d916693b147eee3eef4ca043))
-   split-button tests & lots of cleanup based on review feedback ([10b4a04](https://github.com/gaoding-inc/iliad-ui/commit/10b4a04c5791d1acd9e59d48a8960b9c17aa89c7)), closes [#1189](https://github.com/gaoding-inc/iliad-ui/issues/1189)
-   update "reparentChildren" types for flexibility ([2d358be](https://github.com/gaoding-inc/iliad-ui/commit/2d358be094cf73785d0858545ccd0f9ca2aa8db0))
-   update to latest spectrum-css packages ([a5ca19f](https://github.com/gaoding-inc/iliad-ui/commit/a5ca19f67d5b3f0951667c4441d4d977bf1e0937))
-   **button:** relate to this.href correctly ([fade3ea](https://github.com/gaoding-inc/iliad-ui/commit/fade3ea9bd6bda6192f84a0ab9af4b812517e267))
-   update side effect listings ([8160d3a](https://github.com/gaoding-inc/iliad-ui/commit/8160d3ab2c4f5ea11ac40897a5cf1fdaa357f4a8))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/gaoding-inc/iliad-ui/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))
-   **shared:** fixes focus-visible types in test ([0dc7d68](https://github.com/gaoding-inc/iliad-ui/commit/0dc7d6822820bd6fdb53bc21f37b4f8eb55d2bfd))
-   **shared:** fixes search input - fixes [#463](https://github.com/gaoding-inc/iliad-ui/issues/463) ([6833944](https://github.com/gaoding-inc/iliad-ui/commit/68339448bdcc86dd6478f0f5e78c0b93a75e2110))
-   **shared:** improves types for focus-visible ([b980f2a](https://github.com/gaoding-inc/iliad-ui/commit/b980f2af2c6635ec6cb2d367b673b08d8e1c4482))
-   **shared:** include an actual entry point for bundlephobia ([00fd6ab](https://github.com/gaoding-inc/iliad-ui/commit/00fd6abb070e1eddfb8a640f19548289ef6e7acc))
-   **shared:** make Focusable pass disabled always ([a339d6f](https://github.com/gaoding-inc/iliad-ui/commit/a339d6fb2aa9645e7bca5472487618edff5f1182))
-   **shared:** prevent focusable returning focus to host ([745f7b0](https://github.com/gaoding-inc/iliad-ui/commit/745f7b0d23c14efd937e4a0be4d488c5d0865f34))
-   **shared:** prevent focusing focusable root on second click ([0fb5006](https://github.com/gaoding-inc/iliad-ui/commit/0fb50068c844de91134f4dd15e7fef1df5ef354b))
-   **shared:** quiet the angry soul of the explicit any linter ([c278263](https://github.com/gaoding-inc/iliad-ui/commit/c2782634dd0478c20ff3972398909b334aad5cb0))
-   **shared:** removes mousedown event handling in focusable ([4e90d4c](https://github.com/gaoding-inc/iliad-ui/commit/4e90d4c7a8bf2887f372d3e0f38083c2424c4f66))
-   **split-button:** follow visible tab order ([966d3b6](https://github.com/gaoding-inc/iliad-ui/commit/966d3b601a1eda5bf45394fad3bb7d100c7d3b84))
-   **tabs:** correct entry focus element ([64407d3](https://github.com/gaoding-inc/iliad-ui/commit/64407d37fd09d3d598253a66c3b342882d51a826))
-   **top-nav:** prototype top-nav pattern ([9708f6f](https://github.com/gaoding-inc/iliad-ui/commit/9708f6f63e080c0ec91c11763d3121a407349d1a))

### Features

-   update lit-\* dependencies, wip ([aad74d6](https://github.com/gaoding-inc/iliad-ui/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))
-   **picker:** process field-label content for more accurate a11y tree ([dc9df54](https://github.com/gaoding-inc/iliad-ui/commit/dc9df54d052edc46c2399f0f7b12d3b5d4aff740))
-   add screenshot regression testing to CI ([8205dfe](https://github.com/gaoding-inc/iliad-ui/commit/8205dfe33c725e13f74f411779c2ff3b6061a913))
-   allow activation of longpress content ([55e71fd](https://github.com/gaoding-inc/iliad-ui/commit/55e71fdf9fd5dde489871c3d9798ef8957f4e5b6))
-   deprecate sp-menu in PickerBase derived classes ([bbb773c](https://github.com/gaoding-inc/iliad-ui/commit/bbb773c915587b9d92875e333a6b422ec878a8ea))
-   leverage "exports" field in package.json ([321abd7](https://github.com/gaoding-inc/iliad-ui/commit/321abd7b7e78ccd9157cff75a1fa3dbd06e81f79))
-   use :focus-visable (via polyfill) instead of :focus ([11c6fc7](https://github.com/gaoding-inc/iliad-ui/commit/11c6fc77960de8e57dd9c49bb7669df689f0ebaa))
-   use 3.0.0-beta.\* release for styles ([877b485](https://github.com/gaoding-inc/iliad-ui/commit/877b485f20c76ec8f77975747322f572eea88e97))
-   use latest exports specification ([a7ecf4b](https://github.com/gaoding-inc/iliad-ui/commit/a7ecf4b6da7996f36a8a89f62cc2384709497008))
-   **button:** use synthetic button instead of native ([49e94bc](https://github.com/gaoding-inc/iliad-ui/commit/49e94bcf79da6ec1ef05f4197042f992922b91ca))
-   **link:** support rel attribute ([df4b5a8](https://github.com/gaoding-inc/iliad-ui/commit/df4b5a831aa35f5992b183cbba3cad18eb3dbb53))
-   **shared:** add mixing for observing text content changes in a slot ([1318150](https://github.com/gaoding-inc/iliad-ui/commit/1318150ca6282c0b15dc06fe0e821d142175455e))
-   **shared:** conditionally apply focus-visible polyfill ([b854df6](https://github.com/gaoding-inc/iliad-ui/commit/b854df6dd050da4762eaf75eca1a7a62673b3828))
-   **sidenav:** add keyboard accessibility ([6ff622b](https://github.com/gaoding-inc/iliad-ui/commit/6ff622bf89ad319a7d464fbdd2477c7b55b65cdd))
-   **split-button:** add split-button pattern ([4833a59](https://github.com/gaoding-inc/iliad-ui/commit/4833a598bb3da3552d194586350a3888dba79543))
-   **tab-list:** autofocus, :before/after processing, visual test ([83dddb0](https://github.com/gaoding-inc/iliad-ui/commit/83dddb03f2e1ea460567b2fa27b02e88099cfa42))

### Performance Improvements

-   **shared:** focus-visible, lazily instantiate the focus-visible polyfilling ([fe257c1](https://github.com/gaoding-inc/iliad-ui/commit/fe257c1eb10bcb8cfb8ca6700e89efb2386980e5))
-   use "sideEffects" listing in package.json ([7271614](https://github.com/gaoding-inc/iliad-ui/commit/7271614c0ca3ccf3566583bb59467eb15a6199cd))
-   use imported TypeScript helpers instead of inlining them ([cc2bd0a](https://github.com/gaoding-inc/iliad-ui/commit/cc2bd0accd643c2f35cbf1ba809b54f52c25628d))

### Reverts

-   Revert "chore: release new versions" ([a6d655d](https://github.com/gaoding-inc/iliad-ui/commit/a6d655d1435ee6427a3778b89f1a6cf9fe4beb9d))

## [0.15.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.15.0...@iliad-ui/shared@0.15.1) (2021-10-15)

**Note:** Version bump only for package @iliad-ui/shared

# 0.15.0 (2021-10-14)

### Bug Fixes

-   add likeAnchor API to Card element ([5c338fb](https://github.com/adobe/spectrum-web-components/commit/5c338fbfc73d9d20c8f771e11114064cadeeb732))
-   allow detached elements to be used as content for an overlay ([3ad8383](https://github.com/adobe/spectrum-web-components/commit/3ad83837b6c9a693a4fc24501e3fc7fb2383a12b))
-   allow rendered anchors to be aria-hidden ([2e9aa23](https://github.com/adobe/spectrum-web-components/commit/2e9aa2324013e1d2311a8d4307dafe17912328ee))
-   apply Focuable styles in class extensions ([38f7afd](https://github.com/adobe/spectrum-web-components/commit/38f7afd7cdb317d5c8b6e69f1301decd21364b1d))
-   ensure browser understandable extensions ([f4e59f7](https://github.com/adobe/spectrum-web-components/commit/f4e59f76f86369593810463c6406565e28ad97e9))
-   ensure lazily loaded focusElements do not crash ([64f2a54](https://github.com/adobe/spectrum-web-components/commit/64f2a54a5a6934306e97433e8102da6fe38b2660))
-   flatten assigned nodes to observe text of nested slots ([08ffd68](https://github.com/adobe/spectrum-web-components/commit/08ffd68bf31222019ec947b6aa32feada39f4fd2))
-   include "type" in package.json, generate custom-elements.json ([1a8d716](https://github.com/adobe/spectrum-web-components/commit/1a8d716f2f787deb8d868a78bd28c8e62fe90e21))
-   include default export in the "exports" fields ([f32407d](https://github.com/adobe/spectrum-web-components/commit/f32407d7bbfd18e72c35b6f27740549e79957858))
-   include the "types" entry in package.json files ([b432f59](https://github.com/adobe/spectrum-web-components/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   manage "lang" via context provided by "sp-theme" ([b1e3457](https://github.com/adobe/spectrum-web-components/commit/b1e3457ae447427c54f8645c478866340329750c))
-   no scroll update when managing elements outside of the tab order ([144c548](https://github.com/adobe/spectrum-web-components/commit/144c548d3eeeaec6054057f124e73bbb8928c73b))
-   normalize "event" and "error" argument names ([8d382cd](https://github.com/adobe/spectrum-web-components/commit/8d382cdac98282c886f23c4a8d6cf4910c4a606c))
-   prevent tabindex=-1 elements from placing focus on their host ([1ac1293](https://github.com/adobe/spectrum-web-components/commit/1ac12931771c6d5fdbc99f5d214702ed644cb81a))
-   renamed the file but not this ([ad94e53](https://github.com/adobe/spectrum-web-components/commit/ad94e53a8932b395d916693b147eee3eef4ca043))
-   split-button tests & lots of cleanup based on review feedback ([10b4a04](https://github.com/adobe/spectrum-web-components/commit/10b4a04c5791d1acd9e59d48a8960b9c17aa89c7)), closes [#1189](https://github.com/adobe/spectrum-web-components/issues/1189)
-   update "reparentChildren" types for flexibility ([2d358be](https://github.com/adobe/spectrum-web-components/commit/2d358be094cf73785d0858545ccd0f9ca2aa8db0))
-   update to latest spectrum-css packages ([a5ca19f](https://github.com/adobe/spectrum-web-components/commit/a5ca19f67d5b3f0951667c4441d4d977bf1e0937))
-   **button:** relate to this.href correctly ([fade3ea](https://github.com/adobe/spectrum-web-components/commit/fade3ea9bd6bda6192f84a0ab9af4b812517e267))
-   update side effect listings ([8160d3a](https://github.com/adobe/spectrum-web-components/commit/8160d3ab2c4f5ea11ac40897a5cf1fdaa357f4a8))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/adobe/spectrum-web-components/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))
-   **shared:** fixes focus-visible types in test ([0dc7d68](https://github.com/adobe/spectrum-web-components/commit/0dc7d6822820bd6fdb53bc21f37b4f8eb55d2bfd))
-   **shared:** fixes search input - fixes [#463](https://github.com/adobe/spectrum-web-components/issues/463) ([6833944](https://github.com/adobe/spectrum-web-components/commit/68339448bdcc86dd6478f0f5e78c0b93a75e2110))
-   **shared:** improves types for focus-visible ([b980f2a](https://github.com/adobe/spectrum-web-components/commit/b980f2af2c6635ec6cb2d367b673b08d8e1c4482))
-   **shared:** include an actual entry point for bundlephobia ([00fd6ab](https://github.com/adobe/spectrum-web-components/commit/00fd6abb070e1eddfb8a640f19548289ef6e7acc))
-   **shared:** make Focusable pass disabled always ([a339d6f](https://github.com/adobe/spectrum-web-components/commit/a339d6fb2aa9645e7bca5472487618edff5f1182))
-   **shared:** prevent focusable returning focus to host ([745f7b0](https://github.com/adobe/spectrum-web-components/commit/745f7b0d23c14efd937e4a0be4d488c5d0865f34))
-   **shared:** prevent focusing focusable root on second click ([0fb5006](https://github.com/adobe/spectrum-web-components/commit/0fb50068c844de91134f4dd15e7fef1df5ef354b))
-   **shared:** quiet the angry soul of the explicit any linter ([c278263](https://github.com/adobe/spectrum-web-components/commit/c2782634dd0478c20ff3972398909b334aad5cb0))
-   **shared:** removes mousedown event handling in focusable ([4e90d4c](https://github.com/adobe/spectrum-web-components/commit/4e90d4c7a8bf2887f372d3e0f38083c2424c4f66))
-   **split-button:** follow visible tab order ([966d3b6](https://github.com/adobe/spectrum-web-components/commit/966d3b601a1eda5bf45394fad3bb7d100c7d3b84))
-   **tabs:** correct entry focus element ([64407d3](https://github.com/adobe/spectrum-web-components/commit/64407d37fd09d3d598253a66c3b342882d51a826))
-   **top-nav:** prototype top-nav pattern ([9708f6f](https://github.com/adobe/spectrum-web-components/commit/9708f6f63e080c0ec91c11763d3121a407349d1a))

### Features

-   update lit-\* dependencies, wip ([aad74d6](https://github.com/adobe/spectrum-web-components/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))
-   **picker:** process field-label content for more accurate a11y tree ([dc9df54](https://github.com/adobe/spectrum-web-components/commit/dc9df54d052edc46c2399f0f7b12d3b5d4aff740))
-   add screenshot regression testing to CI ([8205dfe](https://github.com/adobe/spectrum-web-components/commit/8205dfe33c725e13f74f411779c2ff3b6061a913))
-   allow activation of longpress content ([55e71fd](https://github.com/adobe/spectrum-web-components/commit/55e71fdf9fd5dde489871c3d9798ef8957f4e5b6))
-   deprecate sp-menu in PickerBase derived classes ([bbb773c](https://github.com/adobe/spectrum-web-components/commit/bbb773c915587b9d92875e333a6b422ec878a8ea))
-   leverage "exports" field in package.json ([321abd7](https://github.com/adobe/spectrum-web-components/commit/321abd7b7e78ccd9157cff75a1fa3dbd06e81f79))
-   use :focus-visable (via polyfill) instead of :focus ([11c6fc7](https://github.com/adobe/spectrum-web-components/commit/11c6fc77960de8e57dd9c49bb7669df689f0ebaa))
-   use 3.0.0-beta.\* release for styles ([877b485](https://github.com/adobe/spectrum-web-components/commit/877b485f20c76ec8f77975747322f572eea88e97))
-   use latest exports specification ([a7ecf4b](https://github.com/adobe/spectrum-web-components/commit/a7ecf4b6da7996f36a8a89f62cc2384709497008))
-   **button:** use synthetic button instead of native ([49e94bc](https://github.com/adobe/spectrum-web-components/commit/49e94bcf79da6ec1ef05f4197042f992922b91ca))
-   **link:** support rel attribute ([df4b5a8](https://github.com/adobe/spectrum-web-components/commit/df4b5a831aa35f5992b183cbba3cad18eb3dbb53))
-   **shared:** add mixing for observing text content changes in a slot ([1318150](https://github.com/adobe/spectrum-web-components/commit/1318150ca6282c0b15dc06fe0e821d142175455e))
-   **shared:** conditionally apply focus-visible polyfill ([b854df6](https://github.com/adobe/spectrum-web-components/commit/b854df6dd050da4762eaf75eca1a7a62673b3828))
-   **sidenav:** add keyboard accessibility ([6ff622b](https://github.com/adobe/spectrum-web-components/commit/6ff622bf89ad319a7d464fbdd2477c7b55b65cdd))
-   **split-button:** add split-button pattern ([4833a59](https://github.com/adobe/spectrum-web-components/commit/4833a598bb3da3552d194586350a3888dba79543))
-   **tab-list:** autofocus, :before/after processing, visual test ([83dddb0](https://github.com/adobe/spectrum-web-components/commit/83dddb03f2e1ea460567b2fa27b02e88099cfa42))

### Performance Improvements

-   **shared:** focus-visible, lazily instantiate the focus-visible polyfilling ([fe257c1](https://github.com/adobe/spectrum-web-components/commit/fe257c1eb10bcb8cfb8ca6700e89efb2386980e5))
-   use "sideEffects" listing in package.json ([7271614](https://github.com/adobe/spectrum-web-components/commit/7271614c0ca3ccf3566583bb59467eb15a6199cd))
-   use imported TypeScript helpers instead of inlining them ([cc2bd0a](https://github.com/adobe/spectrum-web-components/commit/cc2bd0accd643c2f35cbf1ba809b54f52c25628d))

### Reverts

-   Revert "chore: release new versions" ([a6d655d](https://github.com/adobe/spectrum-web-components/commit/a6d655d1435ee6427a3778b89f1a6cf9fe4beb9d))

# [0.14.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.12.9...@iliad-ui/shared@0.14.0) (2021-10-14)

### Features

-   update lit-\* dependencies, wip ([aad74d6](https://github.com/adobe/spectrum-web-components/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))

# [0.13.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.12.9...@iliad-ui/shared@0.13.0) (2021-10-14)

### Features

-   update lit-\* dependencies, wip ([aad74d6](https://github.com/adobe/spectrum-web-components/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))

## [0.12.9](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.12.8...@iliad-ui/shared@0.12.9) (2021-10-12)

### Bug Fixes

-   add likeAnchor API to Card element ([5c338fb](https://github.com/adobe/spectrum-web-components/commit/5c338fbfc73d9d20c8f771e11114064cadeeb732))

## [0.12.8](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.12.7...@iliad-ui/shared@0.12.8) (2021-09-13)

### Bug Fixes

-   ensure lazily loaded focusElements do not crash ([64f2a54](https://github.com/adobe/spectrum-web-components/commit/64f2a54a5a6934306e97433e8102da6fe38b2660))

## [0.12.7](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.12.6...@iliad-ui/shared@0.12.7) (2021-07-22)

**Note:** Version bump only for package @iliad-ui/shared

## [0.12.6](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.12.5...@iliad-ui/shared@0.12.6) (2021-07-01)

### Bug Fixes

-   allow detached elements to be used as content for an overlay ([3ad8383](https://github.com/adobe/spectrum-web-components/commit/3ad83837b6c9a693a4fc24501e3fc7fb2383a12b))
-   manage "lang" via context provided by "sp-theme" ([b1e3457](https://github.com/adobe/spectrum-web-components/commit/b1e3457ae447427c54f8645c478866340329750c))

## [0.12.5](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.12.4...@iliad-ui/shared@0.12.5) (2021-06-16)

**Note:** Version bump only for package @iliad-ui/shared

## [0.12.4](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.12.3...@iliad-ui/shared@0.12.4) (2021-05-24)

### Bug Fixes

-   no scroll update when managing elements outside of the tab order ([144c548](https://github.com/adobe/spectrum-web-components/commit/144c548d3eeeaec6054057f124e73bbb8928c73b))
-   prevent tabindex=-1 elements from placing focus on their host ([1ac1293](https://github.com/adobe/spectrum-web-components/commit/1ac12931771c6d5fdbc99f5d214702ed644cb81a))

## [0.12.3](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.12.2...@iliad-ui/shared@0.12.3) (2021-05-12)

### Bug Fixes

-   allow rendered anchors to be aria-hidden ([2e9aa23](https://github.com/adobe/spectrum-web-components/commit/2e9aa2324013e1d2311a8d4307dafe17912328ee))
-   update "reparentChildren" types for flexibility ([2d358be](https://github.com/adobe/spectrum-web-components/commit/2d358be094cf73785d0858545ccd0f9ca2aa8db0))

## [0.12.2](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.12.1...@iliad-ui/shared@0.12.2) (2021-04-09)

**Note:** Version bump only for package @iliad-ui/shared

## [0.12.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.12.0...@iliad-ui/shared@0.12.1) (2021-03-29)

**Note:** Version bump only for package @iliad-ui/shared

# [0.12.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.11.1...@iliad-ui/shared@0.12.0) (2021-03-22)

### Bug Fixes

-   renamed the file but not this ([ad94e53](https://github.com/adobe/spectrum-web-components/commit/ad94e53a8932b395d916693b147eee3eef4ca043))
-   split-button tests & lots of cleanup based on review feedback ([10b4a04](https://github.com/adobe/spectrum-web-components/commit/10b4a04c5791d1acd9e59d48a8960b9c17aa89c7)), closes [#1189](https://github.com/adobe/spectrum-web-components/issues/1189)

### Features

-   **picker:** process field-label content for more accurate a11y tree ([dc9df54](https://github.com/adobe/spectrum-web-components/commit/dc9df54d052edc46c2399f0f7b12d3b5d4aff740))
-   deprecate sp-menu in PickerBase derived classes ([bbb773c](https://github.com/adobe/spectrum-web-components/commit/bbb773c915587b9d92875e333a6b422ec878a8ea))

## [0.11.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.11.0...@iliad-ui/shared@0.11.1) (2021-03-05)

**Note:** Version bump only for package @iliad-ui/shared

# [0.11.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.10.0...@iliad-ui/shared@0.11.0) (2021-03-04)

### Features

-   use latest exports specification ([a7ecf4b](https://github.com/adobe/spectrum-web-components/commit/a7ecf4b6da7996f36a8a89f62cc2384709497008))

# [0.10.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.9.0...@iliad-ui/shared@0.10.0) (2021-02-11)

### Bug Fixes

-   update to latest spectrum-css packages ([a5ca19f](https://github.com/adobe/spectrum-web-components/commit/a5ca19f67d5b3f0951667c4441d4d977bf1e0937))

### Features

-   allow activation of longpress content ([55e71fd](https://github.com/adobe/spectrum-web-components/commit/55e71fdf9fd5dde489871c3d9798ef8957f4e5b6))

# [0.9.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.7.4...@iliad-ui/shared@0.9.0) (2021-01-21)

### Bug Fixes

-   **button:** relate to this.href correctly ([fade3ea](https://github.com/adobe/spectrum-web-components/commit/fade3ea9bd6bda6192f84a0ab9af4b812517e267))
-   include the "types" entry in package.json files ([b432f59](https://github.com/adobe/spectrum-web-components/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/adobe/spectrum-web-components/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))

### Features

-   **button:** use synthetic button instead of native ([49e94bc](https://github.com/adobe/spectrum-web-components/commit/49e94bcf79da6ec1ef05f4197042f992922b91ca))
-   **shared:** conditionally apply focus-visible polyfill ([b854df6](https://github.com/adobe/spectrum-web-components/commit/b854df6dd050da4762eaf75eca1a7a62673b3828))

### Performance Improvements

-   **shared:** focus-visible, lazily instantiate the focus-visible polyfilling ([fe257c1](https://github.com/adobe/spectrum-web-components/commit/fe257c1eb10bcb8cfb8ca6700e89efb2386980e5))

# [0.8.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.7.4...@iliad-ui/shared@0.8.0) (2021-01-13)

### Bug Fixes

-   **button:** relate to this.href correctly ([fade3ea](https://github.com/adobe/spectrum-web-components/commit/fade3ea9bd6bda6192f84a0ab9af4b812517e267))
-   include the "types" entry in package.json files ([b432f59](https://github.com/adobe/spectrum-web-components/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/adobe/spectrum-web-components/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))

### Features

-   **button:** use synthetic button instead of native ([49e94bc](https://github.com/adobe/spectrum-web-components/commit/49e94bcf79da6ec1ef05f4197042f992922b91ca))
-   **shared:** conditionally apply focus-visible polyfill ([b854df6](https://github.com/adobe/spectrum-web-components/commit/b854df6dd050da4762eaf75eca1a7a62673b3828))

### Performance Improvements

-   **shared:** focus-visible, lazily instantiate the focus-visible polyfilling ([fe257c1](https://github.com/adobe/spectrum-web-components/commit/fe257c1eb10bcb8cfb8ca6700e89efb2386980e5))

## [0.7.4](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.7.3...@iliad-ui/shared@0.7.4) (2020-10-12)

**Note:** Version bump only for package @iliad-ui/shared

## [0.7.3](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.7.2...@iliad-ui/shared@0.7.3) (2020-10-12)

### Bug Fixes

-   include default export in the "exports" fields ([f32407d](https://github.com/adobe/spectrum-web-components/commit/f32407d7bbfd18e72c35b6f27740549e79957858))

## [0.7.2](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.7.1...@iliad-ui/shared@0.7.2) (2020-09-25)

### Bug Fixes

-   update side effect listings ([8160d3a](https://github.com/adobe/spectrum-web-components/commit/8160d3ab2c4f5ea11ac40897a5cf1fdaa357f4a8))

## [0.7.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.7.0...@iliad-ui/shared@0.7.1) (2020-09-14)

### Bug Fixes

-   **top-nav:** prototype top-nav pattern ([9708f6f](https://github.com/adobe/spectrum-web-components/commit/9708f6f63e080c0ec91c11763d3121a407349d1a))
-   flatten assigned nodes to observe text of nested slots ([08ffd68](https://github.com/adobe/spectrum-web-components/commit/08ffd68bf31222019ec947b6aa32feada39f4fd2))

# [0.7.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.6.0...@iliad-ui/shared@0.7.0) (2020-08-31)

### Bug Fixes

-   **split-button:** follow visible tab order ([966d3b6](https://github.com/adobe/spectrum-web-components/commit/966d3b601a1eda5bf45394fad3bb7d100c7d3b84))

### Features

-   **split-button:** add split-button pattern ([4833a59](https://github.com/adobe/spectrum-web-components/commit/4833a598bb3da3552d194586350a3888dba79543))
-   use 3.0.0-beta.\* release for styles ([877b485](https://github.com/adobe/spectrum-web-components/commit/877b485f20c76ec8f77975747322f572eea88e97))

# [0.6.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.5.1...@iliad-ui/shared@0.6.0) (2020-07-27)

### Bug Fixes

-   ensure browser understandable extensions ([f4e59f7](https://github.com/adobe/spectrum-web-components/commit/f4e59f76f86369593810463c6406565e28ad97e9))

### Features

-   **link:** support rel attribute ([df4b5a8](https://github.com/adobe/spectrum-web-components/commit/df4b5a831aa35f5992b183cbba3cad18eb3dbb53))

## [0.5.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.5.0...@iliad-ui/shared@0.5.1) (2020-07-22)

### Bug Fixes

-   **shared:** prevent focusable returning focus to host ([745f7b0](https://github.com/adobe/spectrum-web-components/commit/745f7b0d23c14efd937e4a0be4d488c5d0865f34))
-   **tabs:** correct entry focus element ([64407d3](https://github.com/adobe/spectrum-web-components/commit/64407d37fd09d3d598253a66c3b342882d51a826))

# [0.5.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.4.7...@iliad-ui/shared@0.5.0) (2020-07-17)

### Features

-   leverage "exports" field in package.json ([321abd7](https://github.com/adobe/spectrum-web-components/commit/321abd7b7e78ccd9157cff75a1fa3dbd06e81f79))

## [0.4.7](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.4.6...@iliad-ui/shared@0.4.7) (2020-06-08)

**Note:** Version bump only for package @iliad-ui/shared

## [0.4.6](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.4.5...@iliad-ui/shared@0.4.6) (2020-04-16)

### Performance Improvements

-   use "sideEffects" listing in package.json ([7271614](https://github.com/adobe/spectrum-web-components/commit/7271614c0ca3ccf3566583bb59467eb15a6199cd))

## [0.4.5](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.4.4...@iliad-ui/shared@0.4.5) (2020-04-10)

**Note:** Version bump only for package @iliad-ui/shared

## [0.4.4](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.4.3...@iliad-ui/shared@0.4.4) (2020-04-07)

**Note:** Version bump only for package @iliad-ui/shared

## [0.4.3](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.4.2...@iliad-ui/shared@0.4.3) (2020-02-05)

**Note:** Version bump only for package @iliad-ui/shared

## [0.4.2](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.4.1...@iliad-ui/shared@0.4.2) (2020-02-01)

### Bug Fixes

-   **shared:** fixes search input - fixes [#463](https://github.com/adobe/spectrum-web-components/issues/463) ([6833944](https://github.com/adobe/spectrum-web-components/commit/6833944))
-   **shared:** removes mousedown event handling in focusable ([4e90d4c](https://github.com/adobe/spectrum-web-components/commit/4e90d4c))

## [0.4.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.4.0...@iliad-ui/shared@0.4.1) (2020-01-30)

### Bug Fixes

-   **shared:** prevent focusing focusable root on second click ([0fb5006](https://github.com/adobe/spectrum-web-components/commit/0fb5006))

# [0.4.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.3.3...@iliad-ui/shared@0.4.0) (2020-01-06)

### Features

-   **sidenav:** add keyboard accessibility ([6ff622b](https://github.com/adobe/spectrum-web-components/commit/6ff622b))
-   **tab-list:** autofocus, :before/after processing, visual test ([83dddb0](https://github.com/adobe/spectrum-web-components/commit/83dddb0))

## [0.3.3](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.3.2...@iliad-ui/shared@0.3.3) (2019-12-12)

### Bug Fixes

-   apply Focuable styles in class extensions ([38f7afd](https://github.com/adobe/spectrum-web-components/commit/38f7afd))

## [0.3.2](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.3.1...@iliad-ui/shared@0.3.2) (2019-12-02)

### Bug Fixes

-   **shared:** include an actual entry point for bundlephobia ([00fd6ab](https://github.com/adobe/spectrum-web-components/commit/00fd6ab))
-   normalize "event" and "error" argument names ([8d382cd](https://github.com/adobe/spectrum-web-components/commit/8d382cd))

## [0.3.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.3.0...@iliad-ui/shared@0.3.1) (2019-11-27)

### Bug Fixes

-   include "type" in package.json, generate custom-elements.json ([1a8d716](https://github.com/adobe/spectrum-web-components/commit/1a8d716))

# [0.3.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.2.0...@iliad-ui/shared@0.3.0) (2019-11-19)

### Bug Fixes

-   **shared:** fixes focus-visible types in test ([0dc7d68](https://github.com/adobe/spectrum-web-components/commit/0dc7d68))
-   **shared:** improves types for focus-visible ([b980f2a](https://github.com/adobe/spectrum-web-components/commit/b980f2a))

### Features

-   add screenshot regression testing to CI ([8205dfe](https://github.com/adobe/spectrum-web-components/commit/8205dfe))
-   use :focus-visable (via polyfill) instead of :focus ([11c6fc7](https://github.com/adobe/spectrum-web-components/commit/11c6fc7))

# [0.2.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.1.4...@iliad-ui/shared@0.2.0) (2019-11-01)

### Bug Fixes

-   **shared:** make Focusable pass disabled always ([a339d6f](https://github.com/adobe/spectrum-web-components/commit/a339d6f))
-   **shared:** quiet the angry soul of the explicit any linter ([c278263](https://github.com/adobe/spectrum-web-components/commit/c278263))

### Features

-   **shared:** add mixing for observing text content changes in a slot ([1318150](https://github.com/adobe/spectrum-web-components/commit/1318150))

## [0.1.4](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/shared@0.1.3...@iliad-ui/shared@0.1.4) (2019-10-14)

### Performance Improvements

-   use imported TypeScript helpers instead of inlining them ([cc2bd0a](https://github.com/adobe/spectrum-web-components/commit/cc2bd0a))

## 0.1.3 (2019-10-03)

**Note:** Version bump only for package @iliad-ui/shared
