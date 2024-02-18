import config_db from "../../../helpers/config_db.js";
import { peticion } from "../../../helpers/peticion.js";
import { Card } from "../../Cards/Card.js";

export default function Home() {
  const $home = document.createElement("div");

  $home.classList = "d-flex flex-column align-items-center mt-5";

  const $gallery = document.createElement("div");

  $gallery.classList = "row col-9 row-cols-1 row-cols-md-6 g-4";
  $home.appendChild($gallery);

//   $home.innerHTML = `
//   <div>
//   <!-- INICIO / HOME -->
//   <section class="full-height  px-lg-5">
//       <div class="container">
//           <div class="col-lg-10">
//               <h1 class="display-4 fw-bold">Pokemon Spain Edition (FanMade)</h1>
//               <img src="dummyBack/images/HEROTEST.png" class="img-fluid" />
//               <p class="lead mt-2 mb-4" >Bienvenido a la podeDeSpain</p>
              
//           </div>
//       </div>
//   </section>
  
  
  
//   `;

$home.innerHTML = `
<div id="content-wrapper">
        <!-- INICIO / HOME -->
        <section id="homesection" class="full-height px-lg-5">
            <div class="container">
                <div class="col-12">
                    <h1>BIENVENIDO A LA POKEDEX ESPAÑOLA</h1>
                    <span><small>Fan made </small></span>
                    <img src="dummyBack/images/HEROTEST.png" class="img-fluid mt-3" />
                </div>
            </div>
        </section>
        
        <!-- // INICIO / HOME -->

        <!-- PRESENTACIÓN //INTRODUCTION  -->
        <section id="intro" class="full-height px-lg-5">
            <div class="container col-12 bg-dark p-3 d-flex">
                
                

                <div class="row gy-4">
                    <h4>TEST TEST WEB</h4>
                    <div class="col-md-6">
                        
                    </div>

                    <div class="col-md-6">
                        
                    </div>
                    <h4>LOCUCIÓN Y DOBLAJE</h4>
                    <div class="col-md-6">
                        
                    </div>
                    <div class="col-md-6">
                        
                    </div>
                    <h4>CREADOR DE LA API</h4>
                    <div class="col-md-6">
                        
                    </div>
                    
                    <div class="col-md-6">
                        
                    </div>
                </div>
            </div>
        </section>
        <!-- //TRABAJOS //WORK  -->

        
        <!-- // SOBRE MÍ // ABOUT ME -->





    </div>
    <!-- // CONTENT WRAPPER -->
`

  return $home;
}
