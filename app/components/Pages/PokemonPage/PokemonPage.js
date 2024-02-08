import config_db from "../../../helpers/config_db.js";
import peticion from "../../../helpers/peticion.js";
import { Card } from "../../Cards/Card.js";

export default function PokemonPage() {
  const $pokemonPage = document.createElement("div");
  $pokemonPage.id = "pokemon";

  $pokemonPage.classList = "d-flex flex-column align-items-center mt-5";

  const $gallery = document.createElement("div");

  $gallery.classList = "row col-9 row-cols-2 row-cols-md-3 g-4";
  $pokemonPage.appendChild($gallery);

  peticion({
    url: config_db.POKEMON,
    cbSuccess: (pokemon) => {
      pokemon.forEach((e) => {
        // console.log(e.name);
        $gallery.appendChild(Card(e));
      });
    },
  });

  return $pokemonPage;
}
