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
    

  </div>
</div>
`;

  return $navbar;
}
