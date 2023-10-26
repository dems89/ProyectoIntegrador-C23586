document.addEventListener("DOMContentLoaded", () => {
  const btnborrar = document.getElementById("borrar");
  btnborrar.addEventListener("click", () => {
    document.getElementById("name").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("sumatoria").innerHTML = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("formulario").classList="";
  });

  const categorizar = (categoria) => {
    switch (categoria) {
      case "1":
        return 80;
      case "2":
        return 50;
      case "3":
        return 15;
      default:
        return 0;
    }
  };

  const validarNumero = (numero) => {
    return numero > 0;
  };

  const validarTexto = (texto) => {
    return texto.value.trim();
  };

  const validarEmail = (email) => {
    const esMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]/;
    //const esMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return esMail.test(email);
  };

 
  const btnresumen = document.getElementById("calcular");

  btnresumen.addEventListener("click", () => {
    let nameInput = document.getElementById("name");
    let lastNameInput = document.getElementById("lastName");
    let mailInput = document.getElementById("mail");
    let categoriaInput = document.getElementById("categoria");
    let sumatoria = document.getElementById("sumatoria");
    let cantidadInput = document.getElementById("cantidad");
    let formulario = document.getElementById("formulario").classList;
    formulario.add("was-validated");
    

    if (validarTexto(nameInput)) {
      if (validarTexto(lastNameInput)) {
        if (validarEmail(mailInput.value)) {
          const precio = 200;
          let cat = categoriaInput.value;
          let descuento = categorizar(cat);
          let cant = parseInt(cantidadInput.value);

          if (validarNumero(cant)) {
            let precioFinal = (precio - (precio * descuento) / 100) * cant;
            sumatoria.innerHTML = "$"+precioFinal;
          } 
        } 
      } 
    } 
  });
});
