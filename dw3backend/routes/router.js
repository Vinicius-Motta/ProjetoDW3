const express = require("express");
const routerApp = express.Router();

const appContas = require("../apps/contas/controller/ctlContas");
const appLogin = require("../apps/login/controller/ctlLogin");

// middleware that is specific to this router
routerApp.use((req, res, next) => {
  next();
});

routerApp.get("/", (req, res) => {
  res.send("Olá mundo!");
});

//Rotas de Contas
routerApp.post("/getContaByID", appLogin.AutenticaJWT, appContas.getContaByID);
routerApp.post("/insertContas", appLogin.AutenticaJWT, appContas.insertContas);
routerApp.get("/getAllContas", appLogin.AutenticaJWT, appContas.getAllContas);
//routerApp.post("/getContaByID", appContas.getContaByID);
//routerApp.post("/insertContas", appContas.insertContas);
routerApp.post("/updateContas", appContas.updateContas);
routerApp.post("/DeleteContas", appContas.DeleteContas);

// Rota Login
routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

module.exports = routerApp;
