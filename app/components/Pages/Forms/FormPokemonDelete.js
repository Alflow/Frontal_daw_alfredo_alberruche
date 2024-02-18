import config_db from "../../../helpers/config_db.js";
import { envio } from "../../../helpers/peticion.js";
export default function FormPokemonDetelete() {
  const $form = document.createElement("form");

  $form.setAttribute("id", "form-eliminar-pokemon");

  $form.innerHTML = `
  <div class="mb-3">
  <label for="id" class="form-label">ID del pokemon</label>
  <input type="text" class="form-control" name="id" id="id">
  
    </div>


<button type="submit" class="btn btn-primary">Enviar</button>

`;
  $form.addEventListener("submit", (e) => {
    // console.log(e);
    e.preventDefault();
    let form = new FormData($form);

    let modifiedPokemon = Object.fromEntries(form);

    envio({
      url: `${config_db.POKEMON}/${modifiedPokemon.id}`,
      method: "DELETE",
      // datos: JSON.stringify(modifiedPokemon),
      datos: form,
      cbSuccess: (data) => {
        console.log(data);
      },
    });
  });

  return $form;
}
