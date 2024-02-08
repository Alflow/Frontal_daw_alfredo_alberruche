export default function Header() {
  const $navbar = document.createElement("nav");

  $navbar.classList = "navbar navbar-expand-lg bg-body-tertiary";
  $navbar.setAttribute("data-bs-theme", "dark");

  $navbar.innerHTML = `  <div class="container-fluid">
  <a class="navbar-brand" href="#">PokeSpain API </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#pokemon">Pokemon</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link active dropdown-toggle" href="#entrenadores" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Entrenadores
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#insertarPokemon">Añade nuevos Pokemon!</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#insertarEntrenadores">Añade nuevos Entrenadores!</a>
      </li>
    </ul>
    
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <div class="col-md-4 text-end">
          <button type="button" class="btn btn-primary mx-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
            LOGIN
          </button>

        </div>
    

  </div>
</div>
`;

  const $modal = document.createElement("div");

  $modal.classList = "modal fade";
  $modal.id = "exampleModal";

  $modal.setAttribute("tabindex", "-1");
  $modal.setAttribute("aria-labelledby", "exampleModalLabel");
  $modal.setAttribute("aria-hidden", "true");
  $modal.innerHTML = `
  <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">No compartiremos tus datos con nadie</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Recuérdame</label>
            </div>
            <a class="nav-link active text-end" aria-current="page" href="#">¿No registrado? Regístrate aquí.</a>
            <button type="submit" class="btn btn-primary">Acceder</button>
          </form>
        </div>
      </div>
    </div>
  `;

  $navbar.appendChild($modal);
  return $navbar;
}
