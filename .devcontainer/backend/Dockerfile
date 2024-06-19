FROM mcr.microsoft.com/devcontainers/javascript-node:20

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    clang && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /opt
