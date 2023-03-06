# Node.js + TypeScript

```bash
git init
```

```bash
touch .gitignore
```

```txt
build
.husky
coverage
yarn.lock
node_modules
yarn-error.log
```

```bash
yarn init -y
```

```bash
yarn add -D typescript @tsconfig/recommended
```

```bash
yarn add -D ts-node @types/node
```

```bash
touch tsconfig.json
```

```json
{
  "extends": "@tsconfig/recommended/tsconfig.json",
  "compilerOptions": {
    "preserveConstEnums": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

```bash
mkdir src && cd src
```

```bash
touch index.ts
```

```ts
interface User {
  name: string
}

const user: User = {
  name: 'Emilio',
}

console.log(`LOG => ${JSON.stringify(user)}`)

export default user
```

```bash
yarn ts-node index.ts
```

```bash
cd .. && mkdir test && cd test
```

```bash
touch index.test.ts
```

```ts
import user from '../src'

describe('test', () => {
  test('user', () => {
    const name = user.name
    expect(name).toBe('Emilio')
  })
})
```

```bash
yarn add -D jest ts-jest @types/jest
```

```bash
cd .. && touch jest.config.ts
```

```ts
import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/**/*.test.ts'],
  collectCoverageFrom: ['src/**'],
}

export default config
```

```bash
yarn jest --coverage
```

```bash
yarn add -D prettier
```

```bash
touch .pretierrc.yaml
```

```yaml
semi: false
tabWidth: 2
singleQuote: true
```

```bash
touch .prettierignore
```

```txt
build
.husky
coverage
yarn.lock
node_modules
yarn-error.log
```

```bash
yarn prettier --write .
```

```bash
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier
```

```bash
touch .eslintrc.json
```

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ]
}
```

```bash
touch .eslintignore
```

```txt
build
.husky
coverage
yarn.lock
node_modules
yarn-error.log
```

```bash
yarn eslint src --max-warnings=0
```

```bash
yarn add -D nodemon
```

```bash
touch nodemon.json
```

```txt
{
  "watch": ["src"],
  "ext": ".ts",
  "exec": "yarn ts-node ./src/index.ts"
}
```

```bash
yarn nodemon
```

```bash
yarn add -D husky lint-staged rimraf
```

add the content below to package.json

```json
"scripts": {
  "start:dev": "yarn nodemon",
  "build": "yarn rimraf ./build && yarn tsc",
  "lint": "yarn eslint src --max-warnings=0",
  "start": "yarn build && node ./build/index.js",
  "test": "yarn jest --findRelatedTests --watchAll=false --coverage",
  "format": "yarn prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
  "prepare": "yarn husky install && yarn husky add .husky/pre-commit 'yarn lint-staged'"
  },
"husky": {
  "hooks": {
    "pre-commit": "lint staged"
  }
},
"lint-staged": {
  "**/*.ts": [
    "yarn format",
    "yarn lint",
    "yarn test"
  ]
}
```

```bash
yarn add --dev  @commitlint/cli @commitlint/config-conventional
```

```bash
touch commitlint.config.ts
```

```ts
import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
}

module.exports = Configuration
```

```bash
echo "fox: teste" | yarn commitlint
```

```bash
echo "fix: teste" | yarn commitlint
```

```bash
yarn start:Dev
```
