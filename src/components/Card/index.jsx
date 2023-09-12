import "./style.css";
import { FaTrash } from "react-icons/fa";

function Card({ transaction, setListTransactions, listTransactions }) {
  function RemoveCard(cardDescription) {
    let transactionsFiltered = listTransactions.filter(
      (elem) => elem.description !== cardDescription
    );
    setListTransactions(transactionsFiltered);
  }

  return (
    <>
      {transaction.typeValue === "despesa" ? (
        <section className="CardTransactionDespesa">
          <section className="CardBox">
            <h3>{transaction.description}</h3>
            <span>{transaction.typeValue}</span>
          </section>
          <section className="CardBox">
            <span>R$ -{transaction.value.toFixed(2)}</span>
            <button onClick={() => RemoveCard(transaction.description)}>
              <FaTrash
                onClick={() => RemoveCard(transaction.description)}
              ></FaTrash>
            </button>
          </section>
        </section>
      ) : (
        <section className="CardTransactionRecebimento">
          <section className="CardBox">
            <h3>{transaction.description}</h3>
            <span>{transaction.typeValue}</span>
          </section>
          <section className="CardBox">
            <span>R$ {transaction.value.toFixed(2)}</span>
            <button onClick={() => RemoveCard(transaction.description)}>
              <FaTrash
                onClick={() => RemoveCard(transaction.description)}
              ></FaTrash>
            </button>
          </section>
        </section>
      )}
    </>
  );
}

export default Card;
