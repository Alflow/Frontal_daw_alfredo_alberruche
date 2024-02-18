import config_db from "../../../helpers/config_db.js";
import { envio, envioRegistro } from "../../../helpers/peticion.js";
import Router from "../../Router.js";
export default function FormSignUp() {

  const $container = document.createElement("div");
  
  $container.classList = "d-flex flex-column align-items-start min-vh-100";


  const $form = document.createElement("form");

  $form.setAttribute("id", "form-signup");
  $form.classList="col-md-5 mt-4 mx-auto"
  $form.innerHTML = `

<div class="mb-3">
  <label for="email" class="form-label">Email</label>
  <input type="text" class="form-control" name="email" id="email">
</div>

</div>
<div class="mb-3">
  <label for="name" class="form-label">Nombre</label>
  <input type="text" class="form-control" name="name" id="name">
</div> 

<div class="mb-3">
  <label for="password" class="form-label">CONTRASEÑA</label>
  <input type="password" class="form-control" name="password" id="password">
</div>


<button type="submit" class="btn btn-primary">Enviar</button>

`;
  $form.addEventListener("submit", (e) => {
    // console.log(e);
    e.preventDefault();
    let form = new FormData($form);

    let datos = {};
    // Convierte FormData a un objeto JavaScript
    form.forEach((value, key) => {
      datos[key] = value;
    });

    envioRegistro({
      url: config_db.SIGNUP,
      method: 'POST',
      datos: JSON.stringify(datos),
      cbSuccess: (data) => {        
      },
    });
  });

  $container.appendChild($form)
  return $container;
}
