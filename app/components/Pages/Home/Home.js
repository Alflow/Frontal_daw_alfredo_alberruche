import config_db from "../../../helpers/config_db.js";
import { peticion } from "../../../helpers/peticion.js";
import { Card } from "../../Cards/Card.js";

export default function Home() {
  const $home = document.createElement("div");

  $home.classList = "d-flex flex-column align-items-center mt-5";

  const $gallery = document.createElement("div");

  $gallery.classList = "row col-9 row-cols-1 row-cols-md-6 g-4";
  $home.appendChild($gallery);

  $home.innerHTML = `
  <div>
  <!-- INICIO / HOME -->
  <section class="full-height bg-dark px-lg-5">
      <div class="container">
          <div class="col-lg-10">
              <h1 class="display-4 fw-bold">Pokemon Spain Edition (FanMade)</h1>
              <p class="lead mt-2 mb-4" >Bienvenido a la podeDeSpain</p>
              <div data-aos="fade-up">
                  <a href="" class="btn btn-brand me-3">Visita mis proyectos</a>
                  <a href="" class="link-custom" >Tlfno: 640 75 79 42</a>
              </div>
          </div>
      </div>
  </section>
  
  
  
  `;

  return $home;
}
