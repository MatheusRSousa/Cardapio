// Lê os dados do arquivo .env
require("dotenv").config();

const bd = require("./bd");
const express = require("express");
const cors = require("cors");

// Criação da aplicação
const app = express();

// Configuração do middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// Configuração das rotas da aplicação
app.use("/products", require("./controller/produto_controller"));
app.use("/categories", require("./controller/categoria_controller"));
app.use("/session", require("./controller/session_controller"));

const SERVER_PORT = parseInt(process.env.SERVER_PORT);

console.log("Conectando ao banco de dados...");
bd.conecta(() => {
  console.log("Conectado. Iniciando o servidor...");
  app.listen(SERVER_PORT, () => {
    console.log(`Servidor no ar em: http://localhost:${SERVER_PORT}`);
  });
});
