FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DSkipTests

FROM openjdk:17.0.0-jdk-slim
COPY --from=build /target/course_mania-0.0.1-SNAPSHOT.jar deploy.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","deploy.jar"]
