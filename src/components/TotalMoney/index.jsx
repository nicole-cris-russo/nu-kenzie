import "./style.css";

function TotalMoney({ listTransactions }) {
  const reduceValues = listTransactions.reduce(
    (a, b) => a + (b.typeValue === "entrada" ? b.value : -b.value),
    0
  );

  return (
    <div className="BoxTotalMoney">
      <div>
        <h3>Valor total:</h3>
        <span> $ {reduceValues.toFixed(2)}</span>
      </div>
      <span className="SpanText">O valor se refere ao saldo</span>
    </div>
  );
}

export default TotalMoney;
