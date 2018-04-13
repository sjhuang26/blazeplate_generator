# Copies dev compose file
cp ./docker-compose-dev.yml ./docker-compose.yml

# Starts docker-compose
docker-compose build
docker-compose up -d
