export default async function peticion(props) {
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
