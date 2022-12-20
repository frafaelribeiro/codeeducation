# Aprendendo docker

Meus códigos no aprendizado do docker.  

- go  
    - Executado um container que imprime uma saida simples de texto.  
        `docker pull domrafael/codeeducation`  
        `docker run --rm domrafael/codeeducation`  
    - Criando o build  
        `docker build -t codeeducation:latest go -f ./go/dockerfile.prd`
    - Usando o docker compose  
        `docker compose -f ./go/docker-compose.yaml up --build`  
        `docker compose -f ./go/docker-compose.yaml logs codeeducation`  

- nginx_com_node  
    - Executando o docker compose inicia uma stack com um app Node.js que cria uma tabela e insere um nome a cada requisição no banco Mysql usando um Nginx como proxy reverso.  
        `docker compose -f ./nginx_com_node/docker-compose.yml up -d`  
    - O acesso é pela url:  
        [http://localhost:8080/](http://localhost:8080/)  