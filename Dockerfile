# Importa uma imagem do node com linux alpine
FROM node:20-alpine AS base

FROM base AS deps

# Pode ser necessário para resolver um problema
WORKDIR /app

RUN addgroup dev && adduser -S rodrigo -G dev \
&& chmod 755 ./ && chown rodrigo:dev ./

USER rodrigo
COPY . /app

# Executa comandos antes de iniciar o container
RUN sudo npm install

# Define variáveis de ambiente
# ENV VARIAVEL=123123123

# Executa um comando quando o container é iniciado
CMD ["npm", "run dev"]

# Expõe uma porta do computador para acessar a aplicação
EXPOSE 3000