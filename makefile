.PHONY: install lint fix test build

install:
	docker-compose run --rm npm install

lint:
	docker-compose run --rm npm run lint

fix:
	docker-compose run --rm npm run lint:fix

test:
	docker-compose run --rm npm run test

build:
	docker-compose run --rm npm run build

