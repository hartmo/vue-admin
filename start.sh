npm run build:prod
docker-compose down
docker-compose stop
docker-compose rm
docker-compose up --build -d