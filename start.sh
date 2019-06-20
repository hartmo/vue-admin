npm run build:prod
docker-compose stop
docker-compose down
docker-compose rm
docker-compose up --build -d