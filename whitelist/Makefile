APP_NAME=airdrop-prod
VERSION=v1.0.0

REPO=ghcr.io/ecraftagency

login:
	echo $VU_PAT | docker login ghcr.io --username ecraftagency --password-stdin

docker:
	docker build -f Dockerfile -t ${REPO}/${APP_NAME}:${VERSION} .
	docker push ${REPO}/${APP_NAME}:${VERSION}
	docker rmi ${REPO}/${APP_NAME}:${VERSION}