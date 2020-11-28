# @faykah/core

Data mock library.

![Code Style](https://github.com/faykah/core/workflows/Code%20Style/badge.svg) ![Tests](https://github.com/faykah/core/workflows/Tests/badge.svg) ![Build](https://github.com/faykah/core/workflows/Build/badge.svg)

## Requirements

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## Installation

*Note: this library is still in its early stage and the package has not been published yet.*

```console
$ npm install @faykah/core
```

## Uninstallation

```console
$ npm uninstall @faykah/core
```

## Usage

### Generator

#### Classic

```typescript
import {createGenerator} from "@faykah/core";

// Creates a handy function to pick a random name
const generateName = createGenerator(["Nelson", "Martin", "Muhammad", "Mahatma", "Dalai"]);

// Name randomly picked
const name = generateName();
```

#### With libraries

```typescript
import {createGenerator} from "@faykah/core";
import {names} from "@faykah/names-en";

// Creates a handy function to pick a random name
const generateName = createGenerator(names);

// Name randomly picked
const name = generateName();
```

#### With middleware function

```typescript
import {createGenerator} from "@faykah/core";
import {names} from "@faykah/names-en";

// Creates a handy function to pick a random name
const generateName = createGenerator(names);

const toUppercase = generatedName => {
  return generatedName.toUpperCase();
};

// Name randomly picked and uppercased
const name = generateName(toUppercase);
```

### Object generator

#### Classic

```typescript
import {createObjectGenerator} from "@faykah/core";

// Creates a handy function to pick a random user
const generateUser = createObjectGenerator({
  // Pick a random email
  email: ["bronte@domain.com", "teddie@domain.com", "alexie@domain.com"],

  // Pick a random name
  name: ["Bronte", "Teddie", "Alexie"],

  // Password randomly picked
  password: ["Cat91!", "Dog74#", "H4ppy4niv3rs4ry@"],

  // Pick a random role
  role: ["ADMIN", "USER", "SUPERUSER", "GUEST"]
});

// User randomly picked
const user = generateUser();
```

#### With libraries

```typescript
import {createObjectGenerator} from "@faykah/core";
import {names} from "@faykah/names-en";
import {emails} from "@faykah/emails-en";
import {roles} from "@faykah/roles-en";

// Creates a handy function to pick a random user
const generateUser = createObjectGenerator({
  // Pick a random email
  email: emails,

  // Pick a random name
  name: names,

  // Password randomly picked
  password: ["Cat91!", "Dog74#", "H4ppy4niv3rs4ry@"],

  // Pick a random role
  role: roles
});

// User randomly picked
const user = generateUser();
```

#### With middleware function

```typescript
import {createObjectGenerator} from "@faykah/core";
import {names} from "@faykah/names-en";
import {emails} from "@faykah/emails-en";
import {roles} from "@faykah/roles-en";

// Creates a handy function to pick a random user
const generateUser = createObjectGenerator({
  // Pick a random email
  email: emails,

  // Pick a random name
  name: names,

  // Password randomly picked
  password: ["Cat91!", "Dog74#", "H4ppy4niv3rs4ry@"],

  // Pick a random role
  role: roles
});

// Replace all characters of the password by stars
const hidePassword = (password: string): string => password.replace(/./gu, "*");

// User randomly picked
const user = generateUser({password: hidePassword});
```

#### With multiple generators

```typescript
import {createObjectGenerator} from "@faykah/core";
import {names} from "@faykah/names-en";
import {emails} from "@faykah/emails-en";
import {roles} from "@faykah/roles-en";

const latitudes = [1, 2, 3, 4, 5];
const longitudes = [5, 4, 3, 2, 1];

// Creates a handy function to pick a random user
const generateUser = createObjectGenerator({
  // Pick a random email
  email: emails,

  // Pick a random name
  name: names,

  // Password randomly picked
  password: ["Cat91!", "Dog74#", "H4ppy4niv3rs4ry@"],

  // Pick a random role
  role: roles
});

// Creates a handy function to pick a random location
const generateLocation = createObjectGenerator({
  // Pick a random latitude
  latitude: latitudes

  // Pick a random longitude
  longitude: longitudes
});

// User randomly picked
const user = {...generateUser(), ...generateLocation()};
```


## Changelog

See [`CHANGELOG.md`](./CHANGELOG.md)

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md)

## License

See [`LICENSE`](./LICENSE)
