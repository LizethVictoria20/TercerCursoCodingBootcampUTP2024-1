import { Cards } from "./components/Cards.jsx";
import { Information } from "./components/Information.jsx";
import Logo from "../src/images/JojosLogo.png";
import { BrowserRouter as Route, useParams, Router } from "react-router-dom";

function App() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container-app">
      <div className="Logo">
        <img src={Logo} alt="Logo jojos" />
      </div>
      <Cards />
      <Route path=":id">
        <Information />
      </Route>
    </div>
  );
}

export default App;

//https://stand-by-me.herokuapp.com/api/v1/characters
//https://jojos-bizarre-api.netlify.app/assets/jonathan.webp
