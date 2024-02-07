export  default async function EntrenadoresInsert() {
  const $form = document.createElement("form");

  $form.setAttribute("id", "form-insertar-entrenador");

  $form.innerHTML = `
  <div class="mb-3">
  <label for="dni" class="form-label">DNI del Entrenador</label>
  <input type="text" class="form-control" id="dni">
  
</div>
<div class="mb-3">
  <label for="name" class="form-label">Nombre del Entrenador</label>
  <input type="text" class="form-control" id="name">
</div>

</div>
<div class="mb-3">
  <label for="ciudad" class="form-label">Ciudad del Entrenador</label>
  <input type="text" class="form-control" id="city">
</div> 
<button type="submit" class="btn btn-primary">Enviar</button>

`;

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData($form);

    const trainer = {
      dni: $form.dni.value,
      name: $form.name.value,
      city: $form.city.value,
    };
    console.log(trainer);

    const res = await fetch( 'sadsd', {
      method: 'POST',
      body: formData
    })
  });
  return $form;
}
