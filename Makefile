run-local:
	docker-compose build --no-cache
	docker-compose up -d --force-recreate
	@echo "Site rodando em localhost:3000"

stop:
	docker-compose down
