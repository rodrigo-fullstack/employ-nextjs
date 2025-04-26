# Importa uma imagem do node com linux alpine
FROM node:20-alpine AS base

FROM base AS deps

# Pode ser necessário para resolver um problema
WORKDIR /app


COPY package.json .
# RUN addgroup dev && adduser -S rodrigo -G dev \
# && chmod 755 ./ && chown rodrigo:dev ./
# Executa comandos antes de iniciar o container
RUN npm install
COPY . .

# Define variáveis de ambiente
# ENV VARIAVEL=123123123

# Expõe uma porta do computador para acessar a aplicação
EXPOSE 3000

# Executa um comando quando o container é iniciado
CMD ["npm", "run", "dev"]
