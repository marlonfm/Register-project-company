const fs = require("fs");

const path = require("path");

module.exports = app => {
    fs
        .readdirSync(__dirname) //entra no diretorio q esta o index.js
        .filter(file => ((file.indexOf('.')) !== 0 && (file !=="index.js"))) //filtra arquivos que nao pode começar com ponto e nao tem o nome INDEX.JS, entao serao os AUTHCONTROLLER e PROJECT CONTROLLER

        .forEach(file => require(path.resolve(__dirname, file))(app)); //percorre os arquivos achados.
};