export async function peticion(props) {
  try {
    let { cbSuccess, url } = props;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response);
    }
    const pokemon = await response.json();
    cbSuccess(pokemon);
  } catch (err) {
    let message = err.statusText || "Ocurrio un error al acceder a los datos";
    document.getElementById("main").innerHTML = `
                <div class = "alert alert-danger" role="alert">
                <p>Error ${err.status}: ${message}</p>
                <p>Error ${err}</p>
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
