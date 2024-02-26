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
<div id="content-wrapper">
        <!-- INICIO / HOME -->
        <section id="homesection" class="full-height px-lg-5 mb-3">
            <div class="container">
                <div class="col-12">
                    <h1>BIENVENIDO A LA POKEDEX ESPAÑOLA</h1>
                    <span><small>Fan made </small></span>
                    <img src="dummyBack/images/HEROTEST.png" class="img-fluid mt-3" />
                </div>
            </div>
        </section>
        
        <h2 class="text-center mt-3">El límite es tu imaginación!</h2>

       
        <section class="features text-center full-height p-3">
        <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="./assets/images/PREVIEW.PNG" class="card-img-top" alt="Imagen que previsualiza el funcionamiento de la web. Añadir Pokemon">
      <div class="card-body">
        <h3 class="card-title">¡Añade nuevos Pokemon!</h3>
        <p class="card-text">Crea tus pokemon con DALL-E, otra IA o dibuja tú mismo el Pokemon que pertenecerá a cada provincia española!</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./assets/images/PREVIEW2.PNG" class="card-img-top" alt="Imagen que previsualiza el funcionamiento de la web. Modificar Pokemon">
      <div class="card-body">
        <h3 class="card-title">¡Modifica los Pokemon!</h3>
        <p class="card-text">¡Modifica sus atributos, localización e ilustración! El límite es tu imaginación. Pero recuerda que debes estar registrado!</p>
      </div>
    </div>
  </div>
  
</div>
    </section>
        





    </div>
    <!-- // CONTENT WRAPPER -->
`;

  return $home;
}
