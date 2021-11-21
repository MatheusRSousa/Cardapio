const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const VALIDADE_TOKEN = 300; // 5 MINUTOS
const BCRYPT_SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);

const checkPassword = async (password, hash) => {
  if (!(await bcrypt.compare(password, hash))) {
    throw "Senha não bate";
  }
  return true;
};

const hashPassword = (password) => {
  return bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
};

const criaToken = (username, roles) => {
  let payload = {
    username,
    roles,
  };

  let token = jwt.sign(payload, process.env.SECRET, {
    expiresIn: VALIDADE_TOKEN,
  });

  return token;
};

const isAutenticado = (req, res, next) => {
  let token = req.headers["x-acess-token"] || req.headers["authorization"];

  if (!token) {
    return res.status(401).send({
      auth: false,
      message: "Não foi encontrado o token no cabeçalho da requisição",
    });
  }

  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  console.log(token);
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send({
        auth: false,
        message: "Token inválido",
      });
    } else {
      req.session = decoded;
      next();
    }
  });
};

const isAutorizado = (papeis) => {
  return (req, res, next) => {
    const session = req.session;
    let autorizado = false;

    session.roles.forEach((sr) => {
      if (papeis.includes(sr.toUpperCase())) {
        autorizado = true;
      }
    });
    if (autorizado) {
      next();
    } else {
      return res.status(403).send({
        auth: false,
        message: "Você não tem permissões de acessar esse recurso",
      });
    }
  };
};

module.exports = {
  criaToken,
  isAutenticado,
  isAutorizado,
  hashPassword,
  checkPassword,
};
