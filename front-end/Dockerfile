# Etapa 1: build da aplicação
FROM node:20-alpine AS builder
WORKDIR /app

# Copia os arquivos da aplicação e instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código-fonte e faz o build
COPY . .
RUN npm run build

# Etapa 2: imagem final para servir o app
FROM node:20-alpine
WORKDIR /app

# Instala o pacote 'serve' para rodar o build
RUN npm install -g serve

# Copia o build da etapa anterior
COPY --from=builder /app/build ./build

# Expõe a porta 3000
EXPOSE 3000

# Comando para servir o React em modo produção
CMD ["serve", "-s", "build", "-l", "3000"]
