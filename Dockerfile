# Use a imagem do Code Server como base
FROM codercom/code-server:latest
# Instalação do Node.js 16.x
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
# Define a versão desejada do npm
ENV NPM_VERSION=9.8.1
# Atualiza o npm para a versão desejada
RUN npm install -g npm@$NPM_VERSION

