# Contributing

## Requirements

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

```console
$ git clone https://github.com/faykah/core.git
$ git clone git@github.com:faykah/core.git
```

## Dependencies

```console
$ docker-compose run --rm npm install
```

## Lint

```console
$ docker-compose run --rm npm run lint
```

## Lint & Fix

```console
$ docker-compose run --rm npm run lint:fix
```

## Test

```console
$ docker-compose run --rm npm test
```

## Build

```console
$ docker-compose run --rm npm test
```

## NPM

```console
$ docker-compose run --rm npm COMMAND
```

Where `COMMAND` is an argument to the `npm` executable.

## Node

```console
$ docker-compose run --rm node COMMAND
```

Where `COMMAND` is an argument to the `node` executable.

## NPX

```console
$ docker-compose run --rm npx COMMAND
```

Where `COMMAND` is an argument to the `npx` executable.
