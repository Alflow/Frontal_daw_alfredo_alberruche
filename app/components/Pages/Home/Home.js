import config_db from "../../../helpers/config_db.js";
import peticion from "../../../helpers/peticion.js";
import { Card } from "../../Cards/Card.js";

export default function Home() {
  const $home = document.createElement("div");

  $home.classList = "d-flex flex-column align-items-center mt-5";

  const $gallery = document.createElement("div");

  $gallery.classList = "row col-9 row-cols-1 row-cols-md-6 g-4";
  $home.appendChild($gallery);

  $home.innerHTML = `<p> HOLA HOLA ES EL HOME </p>`;

  return $home;
}
