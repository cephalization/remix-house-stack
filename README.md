# Remix House Stack

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `frontend`: a [Remix](https://remix.run/) app
- `scripts`: Jest and ESLint configurations
- `tsconfig`: tsconfig.json;s used throughout the monorepo
- `jest-presets`: jest configuration files
- `eslint-config-custom`: base eslint config for turborepo packages
- `eslint-config-server`: eslint config extension for servers

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Deployment

(TODO) Railway via Docker

## Using this stack

Run the following command:

```sh
npx create-remix@latest --template cephalization/remix-house-stack
```
