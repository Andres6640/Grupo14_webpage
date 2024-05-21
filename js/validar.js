/* validar.js */

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "") {
        alert("El campo Nombre no puede estar vacío");
        return false;
    }

    if (email == "") {
        alert("El campo Email no puede estar vacío");
        return false;
    }

    if (message == "") {
        alert("El campo Mensaje no puede estar vacío");
        return false;
    }

    return true;
}
