const db = require("../../../database/databaseconfig");

const getAllContas = async () => {
  let msg = "ok";
  try {
    const result = await db.query(
      "SELECT * FROM contas WHERE deleted = false"
    );
    return result.rows;
  } catch (error) {
    console.error("[mdlContas|getAllContas] Error: " + error.message);
    throw error;
  }
};

const getContaByID = async (contaIDPar) => {
  let msg = "ok";
  try {
    const result = await db.query(
      "SELECT * FROM contas WHERE id = $1 AND deleted = false",
      [contaIDPar]
    );
    return result.rows;
  } catch (error) {
    console.error("[mdlContas|getContaByID] Error: " + error.message);
    throw error;
  }
};

const insertContas = async (contaREGPar) => {
  let msg = "ok";
  try {
    const query =
      "INSERT INTO contas (descricao, data_pagamento, valor, deleted) " +
      "VALUES ($1, $2, $3, $4) RETURNING *";

    const result = await db.query(query, [
      contaREGPar.descricao,
      contaREGPar.data_pagamento,
      contaREGPar.valor,
      contaREGPar.deleted,
    ]);

    if (result.rows.length > 0) {
      return { msg, data: result.rows[0] };
    } else {
      msg = "Não foi possivel criar uma nova conta"; // Atualize a mensagem se necessário
      return { msg };
    }

  } catch (error) {
    console.error("[mdlContas|InsertContas] Error: " + error.message);
    throw error;
  }
};

const UpdateContas = async (contaREGPar) => {
  let msg = "ok"; // Defina uma mensagem padrão
  try {
    const query =
      "UPDATE contas SET descricao = $2, data_pagamento = $3, valor = $4 " +
      "WHERE id = $1 AND deleted = false RETURNING *";

    const result = await db.query(query, [
      contaREGPar.id,
      contaREGPar.descricao,
      contaREGPar.data_pagamento,
      contaREGPar.valor,
    ]);

    if (result.rows.length > 0) {
      return { msg, data: result.rows[0] };
    } else {
      msg = "Conta não encontrada ou já deletada."; // Atualize a mensagem se necessário
      return { msg };
    }
  } catch (error) {
    console.error("[mdlContas|UpdateContas] Error: " + error.message);
    throw error;
  }
};

const DeleteContas = async (contaIDPar) => {
  let msg = "ok";
  let linhasAfetadas;
    
  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE contas SET " + "deleted = true " + "WHERE id = $1",
        [contaIDPar.id]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlContas|DeleteContas] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

module.exports = {
  getAllContas,
  getContaByID,
  insertContas,
  UpdateContas,
  DeleteContas,
};
