import "./style.css";
import NoCard from "../assets/NoCard.svg";
import Card from "../Card";
/* import { useState } from "react"; */

function List({ listTransactions, setListTransactions, listFilter }) {
  return (
    <section className="BoxRight">
      {listTransactions.length > 0 ? (
        <section className="ListenedTransaction">
          <ul>
            {listFilter === "entrada"
              ? listTransactions
                  .filter((transaction) => transaction.typeValue === "entrada")
                  .map((transaction, index) => {
                    return (
                      <li key={index}>
                        <Card
                          transaction={transaction}
                          setListTransactions={setListTransactions}
                          listTransactions={listTransactions}
                        ></Card>
                      </li>
                    );
                  })
              : listFilter === "despesa"
              ? listTransactions
                  .filter((transaction) => transaction.typeValue === "despesa")
                  .map((transaction, index) => {
                    return (
                      <li key={index}>
                        <Card
                          transaction={transaction}
                          setListTransactions={setListTransactions}
                          listTransactions={listTransactions}
                        ></Card>
                      </li>
                    );
                  })
              : listTransactions.map((transaction, index) => {
                  return (
                    <li key={index}>
                      <Card
                        transaction={transaction}
                        setListTransactions={setListTransactions}
                        listTransactions={listTransactions}
                      ></Card>
                    </li>
                  );
                })}
          </ul>
        </section>
      ) : (
        <section className="ListenedTransactionEmpty">
          <h2>Você ainda não possui nenhum lançamento</h2>
          <img src={NoCard} alt="Empty" />
        </section>
      )}
    </section>
  );
}

export default List;
