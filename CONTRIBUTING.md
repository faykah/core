# Contributing

## Requirements

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [GNU/Make](https://www.gnu.org/software/make/)

## Installation

```console
$ git clone https://github.com/faykah/core.git
$ git clone git@github.com:faykah/core.git
```

## Dependencies

```console
$ make install
```

## Lint

```console
$ make lint
```

## Fix

```console
$ make fix
```

## Test

```console
$ make test
```

## Build

```console
$ make build
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
