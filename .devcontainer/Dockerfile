# If "context" is set to ".." in devcontainer.json, use .devcontainer/library-scripts/*.sh
FROM mcr.microsoft.com/devcontainers/javascript-node:0-18-bullseye
COPY library-scripts/*.sh /tmp/library-scripts/
COPY library-scripts/common-debian.sh /tmp/library-scripts/
ENV DOCKER_BUILDKIT=1
RUN apt-get update && /bin/bash /tmp/library-scripts/docker-in-docker-debian.sh
RUN apt-get update && bash /tmp/library-scripts/common-debian.sh
ENTRYPOINT ["/usr/local/share/docker-init.sh"]
VOLUME [ "/var/lib/docker" ]
CMD ["sleep", "infinity"]