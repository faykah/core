#  @faykah/core

Data mock library.

![Code Style](https://github.com/faykah/core/workflows/Code%20Style/badge.svg) ![Tests](https://github.com/faykah/core/workflows/Tests/badge.svg) ![Build](https://github.com/faykah/core/workflows/Build/badge.svg)

## :paperclip: Summary

- [Requirements](#requirements)
- [Installation](#installation)
- [Uninstallation](#uninstallation)
- [Usage](#usage)
  - [Generator](#generator)
    - [Classic](#classic)
    - [With libraries](#with-libraries)
    - [With middleware function](#with-middleware-function)
  - [Object generator](#object-generator)
    - [Classic](#classic-1)
    - [With libraries](#with-libraries-1)
    - [With middleware function](#with-middleware-function-1)
    - [With multiple generators](#with-multiple-generators)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

## :thinking: Requirements

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## :arrow_down: Installation

```console
$ npm install @faykah/core
```

## :cry: Uninstallation

```console
$ npm uninstall @faykah/core
```

## :thinking: Usage

### Generator

#### Classic

```typescript
import {createGenerator} from "@faykah/core";

// Creates a handy function to pick a random first name
const generateFirstName = createGenerator(["Nelson", "Martin", "Muhammad", "Mahatma", "Dalai"]);

// First name randomly picked
const firstName = generateFirstName();
```

#### With libraries

```typescript
import {createGenerator} from "@faykah/core";
import {firstNames} from "@faykah/first-names-en";

// Creates a handy function to pick a random first name
const generateFirstName = createGenerator(firstNames);

// First name randomly picked
const firstName = generateFirstName();
```

#### With middleware function

```typescript
import {createGenerator} from "@faykah/core";
import {firstNames} from "@faykah/first-names-en";

// Creates a handy function to pick a random first name
const generateFirstName = createGenerator(firstNames);

// Return an uppercase version of the text
const uppercased = text => text.toUpperCase();

// First name randomly picked and uppercased
const name = generateName(uppercased);
```

### Object generator

#### Classic

```typescript
import {createObjectGenerator} from "@faykah/core";

const emails = ["first@domain.com", "second@domain.com", "third@domain.com"];
const firstNames = ["first", "second", "third"];
const lastNames = ["fourth", "fifth", "sixth"];

// Creates a handy function to pick a random user
const generateUser = createObjectGenerator({
  // Pick a random email
  email: emails,

  // Pick a random first name
  firstName: firstNames,

  // Pick a random last name
  lastName: lastNames
});

// User randomly picked
const user = generateUser();
```

#### With libraries

```typescript
import {createObjectGenerator} from "@faykah/core";
import {emails} from "@faykah/emails-en";
import {firstNames} from "@faykah/first-names-en";
import {lastNames} from "@faykah/last-names-en";

// Create a handy function to pick a random user
const generateUser = createObjectGenerator({
  // Pick a random email
  email: emails,

  // Pick a random first name
  firstName: firstNames,

  // Pick a random last name
  lastName: lastNames
});

// User randomly picked
const user = generateUser();
```

#### With middleware function

```typescript
import {createObjectGenerator} from "@faykah/core";
import {emails} from "@faykah/emails-en";
import {firstNames} from "@faykah/first-names-en";
import {lastNames} from "@faykah/last-names-en";

// Create a handy function to pick a random user
const generateUser = createObjectGenerator({
  // Pick a random email
  email: emails,

  // Pick a random first name
  firstName: firstNames,

  // Pick a random last name
  lastName: lastNames
});

// Handy function to uppercase a text
const uppercased = text => text.toUpperCase();

// Handy function to lowercase a text
const lowercased = text => text.toLowerCase();

// User randomly picked with transformations
const user = generateUser({
  firstName: lowercased,
  lastName: uppercased
});
```

#### With multiple generators

```typescript
import {createObjectGenerator} from "@faykah/core";
import {emails} from "@faykah/emails-en";
import {firstNames} from "@faykah/first-names-en";
import {lastNames} from "@faykah/last-names-en";

// Create a handy function to pick a random user
const generateUserName = createObjectGenerator({
  // Pick a random first name
  firstName: firstNames,

  // Pick a random last name
  lastName: lastNames
});

const generateUserInformations = createObjectGenerator({
  // Pick a random email
  email: emails
});

// User randomly picked
const user = {
  ...generateUserName(),
  ...generateUserInformations()
};
```

## :bookmark: Changelog

See [`CHANGELOG.md`](./CHANGELOG.md)

## :pray: Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md)

## :scroll: License

See [`LICENSE`](./LICENSE)
