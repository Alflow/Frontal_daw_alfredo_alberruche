export async function peticion(props) {
  try {
    let { cbSuccess, url, method = 'GET', datos } = props; // Asume GET como método predeterminado
    const response = await fetch(url, {
      method, // POST, GET, etc.
      headers: {
        'Content-Type': 'application/json' // Asegúrate de que el servidor acepte JSON
      },
      body: method !== 'GET' ? datos : null, // Solo envía datos si no es una petición GET
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    cbSuccess(data);
  } catch (err) {
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
    const response = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: datos,
    });
    if (!response.ok) {
      throw new Error(response);
    }
    // const objeto = await response.json();
    // cbSuccess(objeto);
  } catch (err) {
    let message = err.statusText || "Ocurrio un error al acceder a los datos";
    document.getElementById("main").innerHTML = `
                <div class = "alert alert-danger" role="alert">
                <p>Error ${err.status}: ${message}</p>
                <p>Error ${err}</p>
                </div>`;
  }
}
