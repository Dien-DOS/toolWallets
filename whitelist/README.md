# DOS-gasless-tx-server

### Deploy:

```
echo $VU_PAT | docker login ghcr.io --username ecraftagency --password-stdin
docker build -f Dockerfile -t ghcr.io/ecraftagency/gasless:v1.0.0 .
docker push ghcr.io/ecraftagency/gasless:v1.0.0
docker image rm ghcr.io/ecraftagency/gasless:v1.0.0
```

### Docker:

Build image: `sudo docker build -t gasless .`

Run: `sudo docker run --name gasless -dp 8999:8999 gasless`

Log: `sudo docker logs -f gasless`

### Docker Compose:

```
version: "3.1"

services:
  gasless:
    build: .
    image: gasless
    hostname: gasless
    container_name: gasless
    restart: always
    ports:
      - 8999:8999
```

Start: `sudo docker compose up -d`

Shutdown: `sudo docker compose down`

Log: `sudo docker logs -f gasless`

### Manual run:

Run: `mpn run start`