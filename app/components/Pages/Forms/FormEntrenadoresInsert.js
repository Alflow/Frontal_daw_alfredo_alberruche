import { insertarEntrenador } from "../../../helpers/Entrenador.js";
import config_db from "../../../helpers/config_db.js";
import { envio } from "../../../helpers/peticion.js";
export default function EntrenadoresInsert() {
  const $form = document.createElement("form");

  $form.setAttribute("id", "form-insertar-entrenador");

  $form.innerHTML = `
  <div class="mb-3">
  <label for="dni" class="form-label">DNI del Entrenador</label>
  <input type="text" class="form-control" name="dni" id="dni">
  
</div>
<div class="mb-3">
  <label for="name" class="form-label">Nombre del Entrenador</label>
  <input type="text" class="form-control" name="name" id="name">
</div>

</div>
<div class="mb-3">
  <label for="ciudad" class="form-label">Ciudad del Entrenador</label>
  <input type="text" class="form-control" name="city" id="city">
</div> 
<button type="submit" class="btn btn-primary">Enviar</button>

`;
  $form.addEventListener("submit", (e) => {
    // console.log(e);
    e.preventDefault();
    let form = new FormData($form);

    envio({
      url: config_db.ENTRENADORES,
      method: "POST",
      datos: JSON.stringify(Object.fromEntries(form)),
      cbSuccess: (data) => {
        console.log(data);
      },
    });
  });

  return $form;
}
