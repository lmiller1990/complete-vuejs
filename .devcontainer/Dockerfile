# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.202.3/containers/ubuntu/.devcontainer/base.Dockerfile

# [Choice] Ubuntu version (use hirsuite or bionic on local arm64/Apple Silicon): hirsute, focal, bionic
ARG VARIANT="hirsute"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends npm \
    && apt-get -y autoremove && apt-get -y clean

RUN npm install -g n
RUN n v12.18.3
RUN npm install -g yarn@1.22.10
