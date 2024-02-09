export function Card(pokemon) {
  const $col = document.createElement("div");
  $col.classList.add("col");

  const $card = document.createElement("div");
  $card.classList.add("card");

  const $img = document.createElement("img");
  // Verificación correcta de la presencia de "imgur" en la URL de la imagen
  if(pokemon.img.includes("imgur")) {
    $img.src = pokemon.img;
  } else {
    $img.src = pokemon.img;
  }
  $img.classList.add("card-img-top");
  $img.alt = "pokemon";

  const $cardBody = document.createElement("div");
  $cardBody.classList.add("card-body");

  const $h5 = document.createElement("h5");
  $h5.classList.add("card-title");
  $h5.innerText = pokemon.name;

  const $cardP = document.createElement("p");
  $cardP.classList.add("card-text");

  // Aquí se maneja correctamente el tipo de Pokémon y se asigna una clase específica
  switch (pokemon.type) {
    case "Agua":
      $cardP.classList.add("text-primary");
      break;
    // Considera agregar más casos aquí para otros tipos de Pokémon
  }
  $cardP.innerText = pokemon.type;

  const $cardFooter = document.createElement("p");
  $cardFooter.classList.add("card-footer");
  $cardFooter.innerHTML = `<small class="text-body-secondary">${pokemon.location}</small>`;

  $cardBody.appendChild($h5);
  $cardBody.appendChild($cardP);

  $card.appendChild($img);
  $card.appendChild($cardBody);
  $card.appendChild($cardFooter);

  $col.appendChild($card);

  return $col;
}
