document.addEventListener("DOMContentLoaded", () => {
  const btnborrar = document.getElementById("borrar");
  btnborrar.addEventListener("click", () => {
    document.getElementById("name").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("sumatoria").innerHTML = "";
    document.getElementById("cantidad").value = "";
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
        alert("No se eligió una categoría válida");
        return 0;
    }
  };

  const validarNumero = (numero) => {
    return numero > 0;
  };

  const validarTexto = (campo) => {
    return campo.value.trim();
  };

  const validarEmail = (email) => {
    const esMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return esMail.test(email);
  };

  const btnresumen = document.getElementById("calcular");

  btnresumen.addEventListener("click", () => {
    const nameInput = document.getElementById("name");
    const lastNameInput = document.getElementById("lastName");
    const mailInput = document.getElementById("mail");
    const categoriaInput = document.getElementById("categoria");
    const sumatoria = document.getElementById("sumatoria");
    const cantidadInput = document.getElementById("cantidad");

    if (validarTexto(nameInput)){
      if (validarTexto(lastNameInput)){
        if(validarEmail(mailInput.value)){
          const precio = 200;
          const cat = categoriaInput.value;
          const descuento = categorizar(cat);
          const cant = parseInt(cantidadInput.value);
    
          if (validarNumero(cant)) {
            const precioFinal = (precio - (precio * descuento) / 100) * cant;
            sumatoria.innerHTML = precioFinal;
          } else {
            alert("Ingrese una cantidad correcta de entradas");
          }
        }else alert("Ingrese un correo electrónico valido");
      }else alert("Ingrese su Apellido");
    }else alert("Ingrese su Nombre");

  });
});
