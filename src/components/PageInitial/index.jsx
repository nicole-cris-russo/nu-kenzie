import "./style.css";
import NuKenzie from "../assets/NuKenzieInital.svg";
import Screen from "../assets/Screen.svg";
import { toast } from "react-toastify";

function PageInitial({ setIsAcessedIn }) {
  function GetPage() {
    setIsAcessedIn(true);
    toast.success("Bem vindo!", {
      hideProgressBar: true,
      closeOnClick: true,
      autoClose: 1000,
    });
  }

  return (
    <div className="BoxPageInitial">
      <div className="BoxPageChild">
        <img src={NuKenzie} alt="Nu Kenzie Logo" />
        <h1>Centralize o controle das suas finanças</h1>
        <h3>de forma rápida e segura</h3>
        <button onClick={() => GetPage()}>Iniciar</button>
      </div>
      <div className="BoxPageChild">
        <img src={Screen} alt="Telas" />
      </div>
    </div>
  );
}

export default PageInitial;
