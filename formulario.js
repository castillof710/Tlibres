function validateForm() {
  var nombre = document.getElementById("Nombre");
  var apellido = document.getElementById("Apellido");
  var correo = document.getElementById("Correo-electronico");
  var contraseña = document.getElementById("Contraseña");
  var tipoCuenta = document.querySelector('input[name="Tipo-de-cuenta"]:checked');
  var terminos = document.getElementById("terminos-y-condiciones").checked;
  var fotoPerfil = document.getElementById("foto-de-perfil");
  var edad = document.getElementById("edad");

  // Función para agregar la clase de "terremoto"
  function shakeField(element) {
    element.classList.add('shake');
    setTimeout(function() {
      element.classList.remove('shake');
    }, 500);
  }

  // Validar que todos los campos estén completos
  if (nombre.value === "" || apellido.value === "" || correo.value === "" || contraseña.value === "" || tipoCuenta === null || !terminos || fotoPerfil.value === "" || edad.value === "") {
    alert("Por favor complete todos los campos del formulario.");

    // Aplicar efecto de "terremoto" a los campos incompletos
    if (nombre.value === "") {
      shakeField(nombre);
    }
    if (apellido.value === "") {
      shakeField(apellido);
    }
    if (correo.value === "") {
      shakeField(correo);
    }
    if (contraseña.value === "") {
      shakeField(contraseña);
    }
    if (tipoCuenta === null) {
      var tipoCuentaRadios = document.getElementsByName("Tipo-de-cuenta");
      shakeField(tipoCuentaRadios[0]);
      shakeField(tipoCuentaRadios[1]);
    }
    if (!terminos) {
      shakeField(document.getElementById("terminos-y-condiciones"));
    }
    if (fotoPerfil.value === "") {
      shakeField(fotoPerfil);
    }
    if (edad.value === "") {
      shakeField(edad);
    }

    return false;
  }

  // Resto del código de validación...
  // (sin cambios)

  // Si todas las validaciones pasan, se puede enviar el formulario
  displayModal();
  return true;
}

function displayModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
    setTimeout(function() {
        modal.style.display = "none";
        window.location.href = "http://www.google.com"; // Reemplaza con la URL de redirección deseada
    }, 3000); // El modal se muestra durante 3 segundos antes de redirigir
}
