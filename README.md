# Aprendendo docker

Meus códigos no aprendizado de docker.  

- go  
    - Executado um container que imprime uma saida simples de texto.  
        `docker pull domrafael/codeeducation`  
        `docker run --rm domrafael/codeeducation`  
    - Criando o build  
        `docker build -t codeeducation:latest go -f ./go/dockerfile.prd`
    - Usando o docker compose  
        `docker compose -f ./go/docker-compose.yaml up --build`  
        `docker compose -f ./go/docker-compose.yaml logs codeeducation`  
