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


  function handlePaginationClick(newPage) {
    peticion({
      url: `${config_db.POKEMON}?page=${newPage}`, 
      cbSuccess: (response) => {
        const { data, meta } = response;
        const { totalPages, page } = meta;
    
        $gallery.innerHTML = ''; // Limpiamos la galería antes de mostrar nuevos resultados
        data.forEach(pokemon => {
          $gallery.appendChild(Card(pokemon)); 
        });
    
        addPaginationControls(totalPages, page); 
      },
    });
  }
  
  //Botones de paginación básicos
  function addPaginationControls(totalPages, currentPage) {
    const $pagination = document.createElement("ul");
    $pagination.classList.add("pagination");

    // Botón "Anterior"
    const $prevLi = document.createElement("li");
    $prevLi.classList.add("page-item");
    if (currentPage === 1) $prevLi.classList.add("disabled");

    const $prevLink = document.createElement("a");
    $prevLink.classList.add("page-link");
    $prevLink.href = "#";
    $prevLink.innerText = "Anterior";
    $prevLink.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage > 1) handlePaginationClick(currentPage - 1);
    });

    $prevLi.appendChild($prevLink);
    $pagination.appendChild($prevLi);

    // Botones para cada página
    for (let page = 1; page <= totalPages; page++) {
        const $pageLi = document.createElement("li");
        $pageLi.classList.add("page-item");
        if (page === currentPage) $pageLi.classList.add("active");

        const $pageLink = document.createElement("a");
        $pageLink.classList.add("page-link");
        $pageLink.href = "#";
        $pageLink.innerText = page;
        $pageLink.addEventListener("click", (e) => {
            e.preventDefault();
            handlePaginationClick(page);
        });

        $pageLi.appendChild($pageLink);
        $pagination.appendChild($pageLi);
    }

    // Botón "Siguiente"
    const $nextLi = document.createElement("li");
    $nextLi.classList.add("page-item");
    if (currentPage === totalPages) $nextLi.classList.add("disabled");

    const $nextLink = document.createElement("a");
    $nextLink.classList.add("page-link");
    $nextLink.href = "#";
    $nextLink.innerText = "Siguiente";
    $nextLink.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage < totalPages) handlePaginationClick(currentPage + 1);
    });

    $nextLi.appendChild($nextLink);
    $pagination.appendChild($nextLi);

    // Reemplaza cualquier paginación existente con la nueva
    const existingPagination = $pokemonPage.querySelector(".pagination");
    if (existingPagination) {
        $pokemonPage.replaceChild($pagination, existingPagination);
    } else {
        $pokemonPage.appendChild($pagination);
    }
}
// llamamos de inmediato el paginationHandler
  handlePaginationClick(1);
  return $pokemonPage;
}
