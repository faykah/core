.PHONY: install lint fix test build publish

DOCKER_COMPOSE_RUN_OPTIONS=--rm

ifeq (${CI},true)
	DOCKER_COMPOSE_RUN_OPTIONS=--rm --user root -T
endif

install:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npm install

lint:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npm run lint

fix:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npm run lint:fix

test:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npm run test

build:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npm run build

publish:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npm publish --access public
