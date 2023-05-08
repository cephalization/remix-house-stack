# Remix House Stack

## DISCLAIMERS

- package lockfiles (package-lock, yarn.lock) are in gitignore, remove them before using this stuck for production!

## What's inside?

This Remix Starter includes a [Turborepo](https://turbo.build/repo) that has the following packages and apps:

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

This Remix Starter includes a Turborepo that has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Deployment

- [x] Docker
  - `build-containers.sh` will run the necessary commands to stand up the api and frontend containers using `docker-compose`
- [ ] Railway

## Using this stack

Run the following command:

```sh
npx create-remix@latest --template cephalization/remix-house-stack
```

Remove desired lockfile from `.gitignore`

(I add them during development of the stack to prevent them from being committed to the repo, you should remove them from the `.gitignore` before committing your project)


[Development Workflow](https://turbo.build/repo/docs/handbook/dev)
