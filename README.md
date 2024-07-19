# Core Typeorm Jest

[![npm version](https://badge.fury.io/js/@universal-packages%2Fcore-typeorm-jest.svg)](https://www.npmjs.com/package/@universal-packages/core-typeorm-jest)
[![Testing](https://github.com/universal-packages/universal-core-typeorm-jest/actions/workflows/testing.yml/badge.svg)](https://github.com/universal-packages/universal-core-typeorm-jest/actions/workflows/testing.yml)
[![codecov](https://codecov.io/gh/universal-packages/universal-core-typeorm-jest/branch/main/graph/badge.svg?token=CXPJSN8IGL)](https://codecov.io/gh/universal-packages/universal-core-typeorm-jest)

Jest tooling for [Universal Core Typeorm](https://github.com/universal-packages/universal-core-typeorm) testing.

## Install

```shell
npm install @universal-packages/core-typeorm-jest

npm install @universal-packages/core
npm install @universal-packages/core-typeorm
```

## Setup

Add the following to your `jest.config.js` or where you configure Jest:

```js
module.exports = {
  setupFilesAfterEnv: ['@universal-packages/core-typeorm-jest']
}
```

## Typescript

In order for typescript to see the global types you need to reference the types somewhere in your project, normally `./src/globals.d.ts`.

```ts
/// <reference types="@universal-packages/core-typeorm-jest" />
```

This library is developed in TypeScript and shipped fully typed.

## Contributing

The development of this library happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving this library.

- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Contributing Guide](./CONTRIBUTING.md)

### License

[MIT licensed](./LICENSE).
