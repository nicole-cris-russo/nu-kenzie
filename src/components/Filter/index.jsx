import "./style.css";

function Filter({ setListFilter }) {
  return (
    <section className="FilterBox">
      <section className="InFilterBox">
        <h3>Resumo Financeiro</h3>
      </section>
      <section className="InFilterBox">
        <button onClick={() => setListFilter("all")}>Todos</button>
        <button onClick={() => setListFilter("entrada")}>Entradas</button>
        <button onClick={() => setListFilter("despesa")}>Despesas</button>
      </section>
    </section>
  );
}

export default Filter;
