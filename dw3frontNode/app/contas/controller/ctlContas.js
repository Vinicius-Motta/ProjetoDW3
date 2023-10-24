const axios = require("axios");
const moment = require("moment");

//@ Abre o formulário de manutenção de contas
const getAllContas = (req, res) =>
  (async () => {
    userName = req.session.userName;
    try {
      resp = await axios.get(process.env.SERVIDOR_DW3 + "/getAllContas", {});
      res.render("contas/view_manutencao", {
        title: "Manutenção de contas",
        data: resp.data,
        userName: userName,
      });
    } catch (erro) {
      console.log("[ctlContas.js|getAllContas] Try Catch: Erro de requisição");
    }
  })();

//@ Função para validar campos no formulário
function validateForm(regFormPar) {
  //@ *** Regra de validação
  //@ Como todos os campos podem ter valor nulo, vou me preocupar
  //@ com campo datanascimento. Caso ele tenha valor "", vou atribuir null a ele.

  if (regFormPar.datanascimento == "") {
    regFormPar.datanascimento = null;
  }

  return regFormPar;
}

//@ Abre e faz operações de CRUD no formulário de cadastro de contas
const insertContas = (req, res) =>
  (async () => {
    var oper = "";
    var registro = {};
    userName = req.session.userName;
    token = req.session.token;
    try {
      if (req.method == "GET") {
        oper = "c";
        registro = {
          id: 0,
          descricao: "",
          data_pagamento: "",
          valor: "0.00",
          deleted: false,
        };

        res.render("contas/view_cadContas", {
          title: "Cadastro de contas",
          data: registro,
          oper: oper,
          userName: userName,
        });
      } else {
        oper = "c";
        const contaREG = validateForm(req.body);
        resp = await axios.post(
          process.env.SERVIDOR_DW3 + "/insertContas",
          {
            id: 0,
            descricao: contaREG.descricao,
            data_pagamento: contaREG.data_pagamento,
            valor: contaREG.valor,
            deleted: false,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );

        console.log("[ctlContas|insertContas] resp:", resp.data);
        if (resp.data.status == "ok") {
          registro = {
            id: 0,
            descricao: "",
            data_pagamento: "",
            valor: "0.00",
            deleted: false,
          };
        } else {
          registro = contaREG;
        }
        oper = "c";
        res.render("contas/view_cadContas", {
          title: "Cadastro de contas",
          data: registro,
          oper: oper,
          userName: userName,
        });
      }
    } catch (erro) {
      console.log(
        "[ctlContas.js|insertContas] Try Catch: Erro não identificado",
        erro
      );
    }
  })();

//@ Abre o formulário de cadastro de contas para futura edição
const viewContas = (req, res) =>
  (async () => {
    var oper = "";
    var registro = {};
    userName = req.session.userName;
    token = req.session.token;
    try {
      if (req.method == "GET") {
        const id = req.params.id;
        oper = req.params.oper;

        parseInt(id);
        resp = await axios.post(
          process.env.SERVIDOR_DW3 + "/getContaByID",
          {
            id: id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );

        if (resp.data.status == "ok") {
          registro = resp.data.registro[0];
          registro.data_pagamento = moment(registro.data_pagamento).format(
            "YYYY-MM-DD"
          );

          res.render("contas/view_cadContas", {
            title: "Cadastro de contas",
            data: registro,
            oper: oper,
            userName: userName,
          });
        }
      } else {
        oper = "vu";
        const contaREG = validateForm(req.body);
        const id = parseInt(contaREG.id);
        resp = await axios.post(
          process.env.SERVIDOR_DW3 + "/updateContas",
          {
            id: id,
            descricao: contaREG.descricao,
            data_pagamento: contaREG.data_pagamento,
            valor: contaREG.valor,
            deleted: false,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );

        if (resp.data.status == "ok") {
          res.json({ status: "ok" });
        } else {
          res.json({ status: "erro" });
        }
      }
    } catch (erro) {
      res.json({ status: "[ctlContas.js|viewContas] Conta não pode ser alterada" });
      console.log(
        "[ctlContas.js|viewContas] Try Catch: Erro não identificado",
        erro
      );
    }
  })();

//@ Abre o formulário de cadastro de contas
const DeleteContas = (req, res) =>
  (async () => {
    var oper = "";
    userName = req.session.userName;
    token = req.session.token;
    try {
      oper = "v";
      const id = parseInt(req.body.id);
    
      resp = await axios.post(
        process.env.SERVIDOR_DW3 + "/DeleteContas",
        {
          id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      if (resp.data.status == "ok") {
        res.json({ status: "ok" });
      } else {
        res.json({ status: "erro" });
      }
    } catch (erro) {
      console.log(
        "[ctlContas.js|DeleteContas] Try Catch: Erro não identificado",
        erro
      );
    }
  })();

module.exports = {
  getAllContas,
  viewContas,
  insertContas,
  DeleteContas,
};
