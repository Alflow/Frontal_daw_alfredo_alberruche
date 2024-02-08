import { insertarEntrenador } from "../../../helpers/Entrenador.js";


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

  return $form;
}
