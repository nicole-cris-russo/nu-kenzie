import { useState } from "react";
import Filter from "./components/Filter";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import Form from "./components/Form";
import Header from "./components/Header";
import PageInitial from "./components/PageInitial";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  const [isAcessedIn, setIsAcessedIn] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  const [listFilter, setListFilter] = useState("all");

  return (
    <div className="App">
      {isAcessedIn ? (
        <>
          <Header setIsAcessedIn={setIsAcessedIn}></Header>
          <ToastContainer></ToastContainer>
          <section className="BoxMain">
            <section className="BoxSections">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              ></Form>
              {listTransactions.length > 0 && (
                <TotalMoney listTransactions={listTransactions}></TotalMoney>
              )}
            </section>
            <section className="BoxSections">
              <Filter setListFilter={setListFilter}></Filter>
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                listFilter={listFilter}
                setListFilter={setListFilter}
              ></List>
            </section>
          </section>
        </>
      ) : (
        <PageInitial setIsAcessedIn={setIsAcessedIn}></PageInitial>
      )}
    </div>
  );
}

export default App;
