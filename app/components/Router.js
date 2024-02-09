import Error404 from "./404/Error404.js";
// import Main from "./Main.js";
import Home from "./Pages/Home/Home.js";
import FormEntrenadoresInsert from "./Pages/Forms/FormEntrenadoresInsert.js";
import PokemonInsert from "./Pages/Forms/FormPokemonInsert.js";
import PokemonModify from "./Pages/Forms/PokemonModify.js";
import FormPokemonDetelete from "./Pages/Forms/FormPokemonDelete.js";
import PokemonPage from "./Pages/PokemonPage/PokemonPage.js";
import Page2 from "./Pages/PokemonPage/PokemonPage.js";
import { insertarEntrenador } from "../helpers/Entrenador.js";

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

    case "#insertarPokemon":
      {
        $main.appendChild(PokemonInsert());
      }
      break;

    case "#insertarEntrenadores":
      {
        $main.appendChild(FormEntrenadoresInsert());
        // insertarEntrenador();
      }
      break;
    case "#modificarPokemon":
      {
        $main.appendChild(PokemonModify());
        // insertarEntrenador();
      }
      break;
    case "#eliminarPokemon":
      {
        $main.appendChild(FormPokemonDetelete());
        // insertarEntrenador();
      }
      break;

    default: {
      return Error404();
    }
  }
}
