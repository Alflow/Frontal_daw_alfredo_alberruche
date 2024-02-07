import Error404 from "./404/Error404.js";
// import Main from "./Main.js";
import Home from "./Pages/Home/Home.js";
import PokemonPage from "./Pages/PokemonPage/PokemonPage.js";
import Page2 from "./Pages/PokemonPage/PokemonPage.js";

export default function Router() {
  const $main = document.getElementById("main");
  switch (location.hash) {
    case "":

    case "#home":
      {
        $main.appendChild(Home());
      }
      break;

    case "#pokemon":
      {
        $main.appendChild(PokemonPage());
      }
      break;

    case "#insert":
      {
        return Page2();
      }
      break;

    default: {
      return Error404();
    }
  }
}
