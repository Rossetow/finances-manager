# Etapa 1: build da aplicação
FROM maven:3.9-eclipse-temurin-17 AS builder
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Etapa 2: imagem final para rodar o .jar
FROM eclipse-temurin:17-jdk
WORKDIR /app

# Copia apenas o .jar gerado
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8181
ENTRYPOINT ["java", "-jar", "app.jar"]
