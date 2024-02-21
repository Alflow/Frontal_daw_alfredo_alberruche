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
  try {
    let { cbSuccess, url, method, datos } = props;
    console.log(url);
    console.log(method);
    console.log(datos);
    const response = await fetch(url, {
      method: method,
      // headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: datos,
    });
    if (!response.ok) {
      throw new Error(response);
    }
    alert("EJUCIÓN SATISFACTORIA!");
    window.location.hash = "#home";
  } catch (err) {
    let message = err.statusText || "Ocurrio un error al acceder a los datos";
    document.getElementById("main").innerHTML = `
                <div class = "alert alert-danger" role="alert">
                <p>Error ${err.status}: ${message}</p>
                <p>Error ${err}</p>
                </div>`;
    alert("EJUCIÓN FALLIDA!");
    window.location.hash = "#home";
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
    console.error('Ocurrió un error:', error);
    alert("Error al procesar la solicitud de inicio de sesión.");
  }
}