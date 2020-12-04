#  @faykah/core

Data mock library.

![Code Style](https://github.com/faykah/core/workflows/Code%20Style/badge.svg) ![Tests](https://github.com/faykah/core/workflows/Tests/badge.svg) ![Build](https://github.com/faykah/core/workflows/Build/badge.svg) ![Package](https://github.com/faykah/core/workflows/Package/badge.svg)

## :paperclip: Summary

- [:thinking: Requirements](#thinking-requirements)
- [:arrow_down: Installation](#arrow_down-installation)
  - [Browser](#browser)
    - [Script](#script)
    - [ECMAScript Module](#ecmascript-module)
  - [Node](#node)
    - [CommonJS](#commonjs)
    - [ECMAScript Module](#ecmascript-module-1)
- [:thinking: Usage](#thinking-usage)
  - [Generator](#generator)
    - [Classic](#classic)
    - [With libraries](#with-libraries)
    - [With middleware function](#with-middleware-function)
  - [Object generator](#object-generator)
    - [Classic](#classic-1)
    - [With libraries](#with-libraries-1)
    - [With middleware function](#with-middleware-function-1)
    - [With nested configuration](#with-nested-configuration)
    - [With multiple generators](#with-multiple-generators)
- [:bookmark: Changelog](#bookmark-changelog)
- [:pray: Contributing](#pray-contributing)
- [:scroll: License](#scroll-license)

## :thinking: Requirements

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## :arrow_down: Installation

### Browser

#### Script

```html
<!DOCTYPE html>
<html>
  <script src="https://unpkg.com/@faykah/core"></script>
  <script>
    "use strict";

    const {createGenerator, createObjectGenerator} = Faykah;
  </script>
</html>
```

#### ECMAScript Module 

```html
<!DOCTYPE html>
<html>
  <script type="module">
    "use strict";

    import {createGenerator, createObjectGenerator} from "https://unpkg.com/@faykah/core/lib/index.esm.min.js";
  </script>
</html>
```

### Node

```console
$ npm install --save @faykah/core
```

#### CommonJS

```typescript
const {createGenerator, createObjectGenerator} = require("@faykah/core");
```

#### ECMAScript Module

```typescript
import {createGenerator, createObjectGenerator} from "@faykah/core";
```

## :thinking: Usage

### Generator

#### Classic

```typescript
// Creates a handy function to pick a random first name
const generateFirstName = createGenerator(["Nelson", "Martin", "Muhammad", "Mahatma", "Dalai"]);

// First name randomly picked
const firstName = generateFirstName();
```

#### With libraries

```typescript
import {firstNames} from "@faykah/first-names-en";

// Creates a handy function to pick a random first name
const generateFirstName = createGenerator(firstNames);

// First name randomly picked
const firstName = generateFirstName();
```

#### With middleware function

```typescript
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
// Creates a handy function to pick a random user
const generateUser = createObjectGenerator({
  // Pick a random email
  email: ["first@domain.com", "second@domain.com", "third@domain.com"],

  // Pick a random first name
  firstName: ["first", "second", "third"],

  // Pick a random last name
  lastName: ["fourth", "fifth", "sixth"]
});

// User randomly picked
const user = generateUser();
```

#### With libraries

```typescript
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

#### With middleware functions

```typescript
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

#### With nested configuration

```typescript
import {emails} from "@faykah/emails-en";
import {firstNames} from "@faykah/first-names-en";
import {lastNames} from "@faykah/last-names-en";

// Create a handy function to pick a random user
const generateUser = createObjectGenerator({
  // Pick a random first name
  firstName: firstNames,

  // Pick a random last name
  lastName: lastNames,

  // Meta user informations
  meta: {
    // Pick a random email
    email: emails
  }
});

// Creates a handy function to uppercase a text
const uppercased = text => text.toUpperCase();

// User randomly picked
const user = generateUser({meta: {email: uppercased}});
```

#### With multiple generators

```typescript
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

// Creates a handy function for generating user informations
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
