import config_db from "./config_db.js";

export async function peticion(props) {
  try {
    let { cbSuccess, url, method = "GET", datos } = props; // Asume GET como método predeterminado
    const response = await fetch(url, {
      method, // POST, GET, etc.
      headers: {
        "Content-Type": "application/json", // Asegúrate de que el servidor acepte JSON
      },
      body: method !== "GET" ? datos : null, // Solo envía datos si no es una petición GET
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    cbSuccess(data);
  } catch (err) {
    console.error(err);
    let message = "Ocurrió un error al acceder a los datos";
    document.getElementById("main").innerHTML = `
      <div class="alert alert-danger" role="alert">
        <p>Error: ${message}</p>
      </div>`;
  }
}

export async function envio(props) {
  let { cbSuccess, url, method, datos } = props;
  enviarAuth({
    cbSuccess: cbSuccess,
    url: url,
    token: localStorage.getItem("authToken"),
    method: method,
    objeto: datos,
  });
  // console.log(url);
  // console.log(method);
  // console.log(datos);
}

// ___________AUTORIZACIÓN_________________________
export async function enviarAuth(props) {
  let { cbSuccess, url, token, method, objeto } = props;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body: objeto,
    });
    const json = await res.json();
    
    if (!res.ok) {
      //Si ocurre un error lanzamos un error con la respuesta y el body en formato objeto
      throw { res, json };
    }
    //Función a ejecutar cuando la petición es correcta pasada como parámetro
    cbSuccess(json);
  } catch (err) {
    const { res, json } = err;
    let message = res.statusText || "Ocurrió un error al acceder a la API";
    alert("EROR!" + message)
    document.getElementById("main").innerHTML = `
  <div class="alert alert-danger" role="alert">
  <p>Error ${res.status}: ${message}</p>
  <p>${JSON.stringify(json)}</p>
  </div>`;

    // BORRAMOS EL TOKEN
    localStorage.removeItem("authToken");

    // LE MOVEMOS AL HOME
    document.getElementById("gestion_pokemon").classList.add("d-none");
    window.location.hash = "#home";
    window.location.reload();
    //Cualquier comando a ejecutar cuando ocurra un error
  } finally {
    //Cualquier comando a ejecutar siempre al finalizar la petición
  }
}

export async function envioRegistro(props) {
  try {
    let { cbSuccess, url, method, datos } = props;
    console.log(url);
    console.log(method);
    console.log(datos);
    const response = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: datos,
    });

    if (!response.ok) {
      throw new Error(response);
    }

    cbSuccess(response);
  } catch (err) {
    let message = err.statusText || "Ocurrio un error al acceder a los datos";
    document.getElementById("main").innerHTML = `
                <div class = "alert alert-danger" role="alert">
                <p>Error ${err.status}: ${message}</p>
                <p>Error ${err}</p>
                </div>`;
  }
}

export async function envioLogin({ url, method, datos, cbSuccess }) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: datos,
    });
    const jsonResponse = await response.json();
    if (!response.ok) throw new Error(jsonResponse);
    cbSuccess(jsonResponse);
  } catch (error) {
    //MANEJAR ERROR
    console.error("Ocurrió un error:", error);
    alert("Error al procesar la solicitud de inicio de sesión.");
  }
}
