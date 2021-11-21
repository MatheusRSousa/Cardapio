const express = require("express");
const router = express.Router();
const Usuario = require("../model/usuario");

const {
  criaToken,
  hashPassword,
  checkPassword,
} = require("../services/seguranca_service");

router.post("/register", async (req, res) => {
  const user = req.body;
  try {
    user.password = await hashPassword(user.password);
    let createdUser = await new Usuario(user).save();
    res.json(createdUser);
  } catch (error) {
    res.status(400).send({ erro: "Usuário já existe no sistema" });
  }
});

router.post("/login", async (req, res) => {
  const user = req.body;
  try {
    const dbUser = await Usuario.findOne({
      username: user.username,
    });
    await checkPassword(user.password, dbUser.password);
    const token = criaToken(dbUser.username, dbUser.roles);
    res.json({ token });
  } catch {
    res.status(401).send({ auth: false, erro: "Login ou senha inválidos" });
  }
});

module.exports = router;
