import "./style.css";
import logo from "../assets/NuKenzie.svg";

function Header({ setIsAcessedIn }) {
  function ExitPage() {
    setIsAcessedIn(false);
  }

  return (
    <header>
      <div className="BoxHeader">
        <img src={logo} alt="Nu Kenzie" />
      </div>
      <div className="BoxHeader">
        <button onClick={() => ExitPage()}>Início</button>
      </div>
    </header>
  );
}

export default Header;
