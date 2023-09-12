import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [typeValue, setTypeValue] = useState("entrada");

  function getValues(event) {
    event.preventDefault();

    const repeatedDescription = listTransactions.some(
      (transaction) => transaction.description === description
    );

    if (repeatedDescription) {
      toast.info("Descrição já existe", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 1000,
      });
    } else if (description === "") {
      toast.info("Adicione uma descrição", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 1000,
      });
    } else if (value === "" || isNaN(value)) {
      toast.info("Adicione um valor válido", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 1000,
      });
    } else {
      setListTransactions((oldTransactions) => [
        ...oldTransactions,
        { description, value, typeValue },
      ]);
    }
  }

  return (
    <section className="BoxForm">
      <form onSubmit={(event) => getValues(event)}>
        <label>
          Descrição
          <input
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <span>Ex: Compra de roupas</span>
        <section className="BoxFormChilds">
          <label>
            Valor
            <input
              type="text"
              placeholder="0.0"
              onChange={(event) => setValue(parseFloat(event.target.value))}
            />
          </label>
          <label>
            Tipo de Valor
            <select onChange={(event) => setTypeValue(event.target.value)}>
              <option value="entrada">Entrada</option>
              <option value="despesa">Despesa</option>
            </select>
          </label>
        </section>
        <button type="submit">Inserir valor</button>
      </form>
    </section>
  );
}

export default Form;
