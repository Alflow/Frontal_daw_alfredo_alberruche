import config_db from "./config_db.js";


export function insertarEntrenador (){
  let formData = document.getElementById("form-insertar-entrenador");
  formData.addEventListener("submit",(e) => {
    console.log(e);
    e.preventDefault();
    let form = new FormData(formData);
    
    fetch(config_db.ENTRENADORES,{
      method: "POST",
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(Object.fromEntries(form))
      
    })
    .then(
      response =>response.json())
    .then((entrenador)=>
      console.log("Entrenador insertado correctamente", entrenador)
    )

  });

}
