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
                    <h4>DESARROLLO WEB</h4>
                    <div class="col-md-6">
                        <div class="card rounded-4 bg-base shadow-effect" data-aos="fade-up">
                            <div class="card bg-white rounded-4">
                                <img class="rounded-4" src="assets/images/ALFLOW_WEB.PNG" alt="">
                            </div>
                            <div class="card-custom-content p-4">
                                <h4>Página de Artista</h4>
                                <p>Web responsiva con css nativo donde detallo los servicios que he ofrecido a nivel creativo</p>
                                <a href="https://alflow.github.io/" class="link-custom" target="_blank">Ver más</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="card-custom rounded-4 bg-base shadow-effect" data-aos="fade-up" data-aos-delay="300">
                            <div class="card-custom-image rounded-4">
                                <img class="rounded-4" src="assets/images/OASIS_WEB.PNG" alt="">
                            </div>
                            <div class="card-custom-content p-4">
                                <h4>OASIS TRAVELS</h4>
                                <p>Primer proyecto en Diseño de Interfaces web a partir de un Wireframe & mockup en Figma</p>
                                <a href="#" class="link-custom">Ver más</a>
                            </div>
                        </div>
                    </div>
                    <h4>LOCUCIÓN Y DOBLAJE</h4>
                    <div class="col-md-6">
                        <div class="card-custom rounded-4 bg-base shadow-effect" data-aos="fade-up" data-aos-delay="400">
                            <div class="card-custom-image rounded-4">
                                <img class="rounded-4" src="assets/images/doblaje.png" alt="">
                            </div>
                            <div class="card-custom-content p-4">
                                <h4>ENCARGOS COMO VOICEOVER EN FIVERR</h4>
                                <p>He locutado vídeos corporativos para empresas como Coca-Cola, XB-Components, bodegas y restaurantes.</p>
                                <a href="#" class="link-custom">Visita mi perfil en Fiverr</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card-custom rounded-4 bg-base shadow-effect" data-aos="fade-up" data-aos-delay="500">
                            <div class="card-custom-image rounded-4">
                                <img class="rounded-4" src="assets/images/homestudio.png" alt="">
                            </div>
                            <div class="card-custom-content p-4">
                                <h4>PROYECTOS DE ENTRENAMIENTO </h4>
                                <p>Cuando no tengo encargos, trato de imaginar guiones, instrumentales y sonidos ambientales  para hacerlos realidad desde mi Home Studio, procurando así una mejora contínua de mis mis habilidades, tanto creativas como técnicas.</p>
                                <details class="link-custom">
                                    <!-- <summary class="link-custom"> Escucha mis Entrenamientos</summary> -->
                                    <audio class="rounded-3 pt-2 w-100" src="assets/audio/tramposos.mp3" controls></audio>
                                    <audio class="rounded-3 pt-2" src="assets/audio/codekids.mp3" controls></audio>
                                </details>
                                
                            </div>
                        </div>
                    </div>
                    <h4>PRODUCCIÓN MUSICAL Y CREACIÓN DE CONTENIDO</h4>
                    <div class="col-md-6">
                        <div class="card-custom rounded-4 bg-base shadow-effect" data-aos="fade-up" data-aos-delay="600">
                            <div class="card-custom-image rounded-4">
                                <img class="rounded-4" src="assets/images/MUSICA_ME_NECESITO.PNG" alt="">
                            </div>
                            <div class="card-custom-content p-4">
                                <h4>"Me Necesito"</h4>
                                <p>Desde la producción instrumental, composición de la letra, grabación de la canción y dirección del videoclip. Hecho por mí mismo en tiempo récord. </p>
                                <a href="pages/me_necesito.html" class="link-custom">Conoce más sobre este proyecto</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="card-custom rounded-4 bg-base shadow-effect" data-aos="fade-up" data-aos-delay="700">
                            <div class="card-custom-image rounded-4">
                                <img class="rounded-4" src="assets/images/tecsintonBanner.png" alt="">
                            </div>
                            <div class="card-custom-content p-4">
                                <h4>"Tecnología Sin Tonterías"</h4>
                                <p>Trabajando como técnico de soporte en redes de fibra y cobre, observé una gran desinformación en los clientes acerca del uso básico de las tecnologías. Por lo que decidí crear un canal de Tiktok que amenizase y simplificase la resolución de problemas sencillos que a día de hoy mucha gente no conoce.</p>
                                <a href="#" class="link-custom">Visita el perfil en Tiktok</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- //TRABAJOS //WORK  -->

        <!-- SOBRE MÍ // ABOUT ME -->
        <section id="about" class="full-height px-lg-5">
            <div class="container">

                <div class="row pb-4" data-aos="fade-up">
                    <div class="col-lg-8">
                        <h6 class="text-brand">Sobre mí</h6>
                        <h1>My Education & Experiance</h1>
                    </div>
                </div>

                <div class="row gy-5">
                    <div class="col-lg-6">

                        <h3 class="mb-4" data-aos="fade-up" data-aos-delay="300">Estudios</h3>
                        <div class="row gy-4">

                            <div class="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div class="bg-base p-4 rounded-4 shadow-effect">
                                    <h4>FP G.S. DESARROLLO DE APLICACIONES WEB</h4>
                                    <p class="text-brand mb-2">IES COMERCIO, Logroño (2022 - Finalizando estudios)</p>
                                    <p class="mb-0">Finalizando el grado superior y buscando una empresa en la que hacer prácticas para aprender y potenciar más skills.</p>
                                </div>
                            </div>

                            <div class="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div class="bg-base p-4 rounded-4 shadow-effect">
                                    <h4>BACHILLERATO C.C.S.S</h4>
                                    <p class="text-brand mb-2">IES BRIANDA DE MENDOZA</p>
                                    <p class="mb-0">Bachillerato híbrido (Presencial/Distancia) mientras trabajaba a jornada completa.</p>
                                </div>
                            </div>

                            <div class="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div class="bg-base p-4 rounded-4 shadow-effect">
                                    <h4>EDUCACIÓN AUTODIDACTA</p>
                                    <p class="mb-0 fw-light" >Trato de estar al día constantemente. Tanto a nivel de tecnologías como tendencias en la producción audiovisual <br> Udemy, Youtube, Tiktok..etc</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-6">

                        <h3 class="mb-4" data-aos="fade-up" data-aos-delay="300">Experiencia laboral</h3>
                        <div class="row gy-4">
                            
                            <div class="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div class="bg-base p-4 rounded-4 shadow-effect">
                                    <h4>VoiceOver / Media Creator</h4>
                                    <p class="text-brand mb-2">Fiver & Freelancer (2022 - Actualidad)</p>
                                    <p class="mb-0">Beatmaker, locutor voiceover y creador de contenido para empresas y artistas independientes.</p>
                                </div>
                            </div>

                            <div class="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div class="bg-base p-4 rounded-4 shadow-effect">
                                    <h4>Técnico especialista en redes Ftth & Adsl</h4>
                                    <p class="text-brand mb-2">France Telecom (2017-2022)</p>
                                    <p class="mb-0">Soporte técnico deptos. N2, Instaladores y TV. <br> Operador Torre de Control <br> Atención al cliente (Empresas y particulares) <br> Seleccionado como formador & Quality.</p>
                                </div>
                            </div>

                            <div class="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div class="bg-base p-4 rounded-4 shadow-effect">
                                    <h4>OFICIAL PRODUCCIÓN INDUSTRIAL</h4>
                                    <p class="text-brand mb-2">Bimbo/Liasa (2016 - 2017)</p>
                                    <p class="mb-0">Modelador y masero en cabeza de producción. (Oficial 2ª Categoría) <br> Encargado de preparación y volcado de pre-mezclas <br>Apoyo en paletizadora y carga en almacén.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
        <!-- // SOBRE MÍ // ABOUT ME -->

        <!-- REVIEWS -->
        <section id="reviews" class="full-height px-lg-5">
            <div class="container">

                <div class="row pb-4" data-aos="fade-up">
                    <div class="col-lg-8">
                        <h6 class="text-brand">Reviews</h6>
                        <h1>Reseñas de mis últimos clientes</h1>
                    </div>
                </div>

                <div class="row gy-4">

                    <div class="col-md-4" data-aos="flip-left">
                        <div class="review shadow-effect bg-base p-4 rounded-4">
                            <div class="card-custom-image rounded-2 mb-2">
                                <img class="rounded-2" src="assets/images/CLIENTES_1.png" alt="">
                            </div>
                            <div class="text-brand h5">
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                            </div>
                            
                            <p class="my-3">Muy facil y muy cómodo trabajar con Alfredo, repetiré sin duda.</p>
                            <div class="person">
                                <h5 class="mb-0">despafilms</h5>
                                <p class="mb-0">Hamburguesería "The Vic Brothers"</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4" data-aos="flip-left" data-aos-delay="300">
                        <div class="review shadow-effect bg-base p-4 rounded-4" >
                            <div class="card-custom-image rounded-2 mb-2">
                                <img class="rounded-2" src="assets/images/CLIENTES_2.png" alt="">
                            </div>
                            <div class="text-brand h5">
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                            </div>
                            
                            <p class="my-3">Professional and quick service!</p>
                            <div class="person">
                                <h5 class="mb-0">assai2018</h5>
                                <p class="mb-0">Coca-Cola</p>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-4" data-aos="flip-left" data-aos-delay="500">

                        <div class="review shadow-effect bg-base p-4 rounded-4">
                            <div class="card-custom-image rounded-2 mb-2">
                                <img class="rounded-2" src="assets/images/CLIENTES_3.png" alt="">
                            </div>
                            <div class="text-brand h5">
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                                <i class="las la-star"></i>
                            </div>
                            
                            <p class="my-3">Nos ha hecho el audio para un vídeo corporativo, comunicación muy fácil y rápida, muy profesional, y el resultado perfecto.</p>
                            <div class="person">
                                <h5 class="mb-0">cblayxb</h5>
                                <p class="mb-0">XB-Components</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
        <!-- //REVIEWS -->

        <!-- CONTACT -->
        <section id="contact" class="full-height px-lg-5">
            <div class="container">

                <div class="row justify-content-center text-center">
                    <div class="col-lg-8 pb-4" data-aos="fade-up">
                        <h6 class="text-brand">CONTACTO</h6>
                        <h1>¿Te interesa trabajar conmigo? ¡Hablemos!
                        </h1>
                    </div>

                    <div class="col-lg-8" data-aos="fade-up" data-aos-delay="300">
                        <form action="#" class="row g-lg-3 gy-3">
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" placeholder="Introduce tu nombre">
                            </div>
                            <div class="form-group col-md-6">
                                <input type="email" class="form-control" placeholder="Introduce tu email">
                            </div>
                            <div class="form-group col-12">
                                <input type="text" class="form-control" placeholder="Asunto">
                            </div>
                            <div class="form-group col-12">
                                <textarea name="" rows="4" class="form-control" placeholder="Escribe aquí tu mensaje "></textarea>
                            </div>
                            <div class="form-group col-12 d-grid">
                                <button type="submit" class="btn btn-brand">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </section>
        <!-- //CONTACT -->

        <!-- PENDIENTE EL FOOTER -->
        <!-- FOOTER -->
        <footer class="py-5 px-lg-5">
            <div class="container">
                <div class="row gy-4 justify-content-between">
                    <div class="col-auto">
                        <p class="mb-0">Designed by <a href="#" class="fw-bold">ALFREDO ALBERRUCHE (ALFLOW)</a></p>
                    </div>
                    <div class="col-auto">
                        <div class="social-icons">
                            <a href="#"><i class="lab la-twitter"></i></a>
                            <a href="#"><i class="lab la-instagram"></i></a>
                            <a href="#"><i class="lab la-dribbble"></i></a>
                            <a href="#"><i class="lab la-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- //FOOTER -->




    </div>
    <!-- // CONTENT WRAPPER -->
`

  return $home;
}
