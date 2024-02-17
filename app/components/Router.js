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
import FormSignUp from "./Pages/Forms/FormSignUp.js";

// NUEVO EN PRUEBAS
window.addEventListener("hashchange", Router);

export default function Router() {
  const $main = document.getElementById("main");
  switch (location.hash) {
    case "":

    case "#home":
      {
        $main.innerHTML = "";
        $main.appendChild(Home());
      }
      break;

    case "#signUp":
      {
        
        // Seleccionar todos los 'div' que son hijos directos del 'body'
        const divs = document.body.querySelectorAll("div");

        // Verificar si hay al menos un 'div'
        if (divs.length > 0) {
          // Acceder al último 'div' y eliminarlo, que es el que backdropea todo para el modal.
          divs[divs.length - 1].remove();
        }
        
        $main.innerHTML = "";
        $main.appendChild(FormSignUp());
        
      }
      break;

    case "#pokemon":
      {
        $main.innerHTML = "";
        $main.appendChild(PokemonPage());
      }
      break;

    case "#insertarPokemon":
      {
        $main.innerHTML = "";
        $main.appendChild(PokemonInsert());
      }
      break;

    case "#insertarEntrenadores":
      {
        $main.innerHTML = "";
        $main.appendChild(FormEntrenadoresInsert());
        // insertarEntrenador();
      }
      break;
    case "#modificarPokemon":
      {
        $main.innerHTML = "";
        $main.appendChild(PokemonModify());
        // insertarEntrenador();
      }
      break;
    case "#eliminarPokemon":
      {
        $main.innerHTML = "";
        $main.appendChild(FormPokemonDetelete());
        // insertarEntrenador();
      }
      break;

    default: {
      return Error404();
    }
  }
}
