document.addEventListener("DOMContentLoaded", () => {
  const categorizar = (categoria) => {
    switch (categoria) {
      case "1":
        return 80;
      case "2":
        return 50;
      case "3":
        return 15;
      case "4":
        return 0;
      default:
        return 0;
    }
  };

  const validarNumero = (numero) => {
    if (parseInt(numero.value) > 0) {
      numero.classList.remove("is-invalid");
      numero.classList.add("is-valid");
      return numero.value;
    } else {
      numero.classList.remove("is-valid");
      numero.classList.add("is-invalid");
      numero.focus();
    }
  };

  const validarTexto = (texto) => {
    if (isNaN(texto.value)) {
      texto.classList.remove("is-invalid");
      texto.classList.add("is-valid");
      return texto.value;
    } else {
      texto.classList.remove("is-valid");
      texto.classList.add("is-invalid");
      texto.focus();
    }
  };

  const validarEmail = (email) => {
    const esMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (esMail.test(email.value)) {
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
      return email;
    } else {
      email.classList.remove("is-valid");
      email.classList.add("is-invalid");
      email.focus();
    }
  };
  const btnresumen = document.getElementById("calcular");
  btnresumen.addEventListener("click", () => {
    let nameInput = document.getElementById("name");
    let lastNameInput = document.getElementById("lastName");
    let mailInput = document.getElementById("mail");
    let categoriaInput = document.getElementById("categoria");
    let totalPagar = document.getElementById("total-pagar");
    let cantidadInput = document.getElementById("cantidad");

    if (validarTexto(nameInput)) {
      if (validarTexto(lastNameInput)) {
        if (validarEmail(mailInput)) {
          const precio = 200;
          let cat = categoriaInput.value;
          let descuento = categorizar(cat);

          if (validarNumero(cantidadInput)) {
            let precioFinal =
              (precio - (precio * descuento) / 100) * cantidadInput.value;
            totalPagar.innerHTML = "$" + precioFinal;
          }
        }
      }
    }
  });
  const botonBorrar = document.getElementById("borrar");
  botonBorrar.addEventListener("click", () => {
    const formulario = document.getElementById("formulario");
    const campos = formulario.querySelectorAll("input");
    document.getElementById("total-pagar").innerHTML = "";
    campos.forEach((campo) => {
      campo.classList.remove("is-valid", "is-invalid");
    });
  });
});
