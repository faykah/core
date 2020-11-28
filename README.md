# @faykah/core

Data mock library.

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

### Object generator

#### Classic

```typescript
import {createObjectGenerator} from "@faykah/core";

// Creates a handy function to pick a random user
const generateUser = createObjectGenerator({
  // Pick a random name
  name: ["Bronte", "Teddie", "Alexie"]

  // Pick a random email
  email: ["bronte@domain.com", "teddie@domain.com", "alexie@domain.com"],

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
  // Pick a random name
  name: names

  // Pick a random email
  email: emails

  // Pick a random role
  role: roles
});

// User randomly picked
const user = generateUser();
```

#### Nested properties

```typescript
import {createObjectGenerator} from "@faykah/core";
import {names} from "@faykah/names-en";
import {emails} from "@faykah/emails-en";
import {roles} from "@faykah/roles-en";
import {latitudes} from "@faykah/latitudes";
import {longitudes} from "@faykah/longitudes";

// Creates a handy function to pick a random user
const generateUser = createObjectGenerator({
  // Pick a random name
  name: names

  // Pick a random email
  email: emails

  // Pick a random role
  role: roles

  // Pick a random location
  location: createObjectGenerator({
    // Pick a random latitude
    latitude: latitudes,

    // Pick a random longitude
    longitude: longitudes
  })
});

// User randomly picked
const user = generateUser();
```
