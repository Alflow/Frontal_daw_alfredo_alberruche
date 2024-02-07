export function Card(pokemon) {
  console.log(pokemon);
  const $col = document.createElement("div");
  $col.classList = "col";
  const $card = document.createElement("div");
  $card.classList = "card";

  const $img = document.createElement("img");
  $img.src = `${pokemon.img}`;
  $img.classList = "card-img-top";
  $img.alt = "pokemon";

  const $cardBody = document.createElement("div");
  $cardBody.classList = "card-body";

  const $h5 = document.createElement("h5");
  $h5.classList = "card-title";
  $h5.innerText = `${pokemon.name}`;

  const $cardP = document.createElement("p");
  $cardP.classList = "card-text";

  switch (pokemon.type) {
    case "Agua": {
      $cardP.classList = "card-text text-primary";
      $cardP.innerText = `${pokemon.type}`;
    }
  }
  $cardP.innerText = `${pokemon.type}`;

  const $cardFooter = document.createElement("p");
  $cardFooter.classList = "card-footer";
  $cardFooter.innerHTML = `<small class="text-body-secondary">${pokemon.location}</small>`;

  $cardBody.appendChild($h5);
  $cardBody.appendChild($cardP);

  $card.appendChild($img);
  $card.appendChild($cardBody);
  $card.appendChild($cardFooter);

  $col.appendChild($card);

  return $col;
}
