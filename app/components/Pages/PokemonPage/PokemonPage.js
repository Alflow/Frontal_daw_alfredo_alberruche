import config_db from "../../../helpers/config_db.js";
import { peticion } from "../../../helpers/peticion.js";
import { Card } from "../../Cards/Card.js";
// salvado
export default function PokemonPage() {
  const $pokemonPage = document.createElement("div");

  const $headerPage = document.createElement("div");
  $headerPage.classList = "col-12 text-center mb-4";
  $headerPage.innerHTML = "<h1>¡Bienvenidos a la colección de España!</h1>";

  $pokemonPage.appendChild($headerPage);

  $pokemonPage.id = "pokemon";

  $pokemonPage.classList = "d-flex flex-column align-items-center mt-5";

  const $gallery = document.createElement("div");

  $gallery.classList = "row col-12 row-cols-1 row-cols-md-4 g-5";
  $pokemonPage.appendChild($gallery);

  const $pagination = document.createElement("nav");
  $pagination.setAttribute("aria-label", "Page navigation example");
  $pagination.innerHTML = `

  // PENDIENTE USAR LA LÓGICA DE PAGINACIÓN. YA SE DEVUELVE TOTAL EN LA PETICIÓN 
  
  // Elemento de paginación.

  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>

  `;

  // $gallery.appendChild($pagination);
  peticion({
    url: config_db.POKEMON,
    cbSuccess: (response) => {
      const pokemon = response.data;
      pokemon.forEach((e) => {
        console.log(e.name);
        $gallery.appendChild(Card(e));
      });
    },
  });

  return $pokemonPage;
}
