import config_db from "../helpers/config_db.js";
import { envioLogin } from "../helpers/peticion.js";

export default function Main() {
  const $main = document.createElement("main");

  $main.classList = "col-12";
  $main.id = "main";

  return $main;
}
