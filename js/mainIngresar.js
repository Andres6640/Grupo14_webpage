/* mainIngresar.js */

/* Main de ingresar.html --------------------- */

/*
    Campos:
        Email
        Contraseña
*/

const page = document.getElementById("mainIngresar");

/* Crea y agrega <h1>Login</h1> */
const pageTitle = document.createElement("h1");
pageTitle.innerHTML = "Ingresar";
page.appendChild(pageTitle);

/* Crea y agrega ventana base */
const container = document.createElement("div");
container.classList.add("container");
container.innerHTML = "";
page.appendChild(container);

/* Crea y agrega el formulario de login */
const formLogin = document.createElement("form");
formLogin.method = "post";
//formLogin.action = "";
container.appendChild(formLogin);

/* Crea y agrega una caja para el Email */
const fieldEmail = document.createElement("input");
fieldEmail.type = "email";
fieldEmail.placeholder = "Email";
fieldEmail.required = true;
formLogin.appendChild(fieldEmail);

/* Crea y agrega una caja para la Contraseña */
const fieldPassword = document.createElement("input");
fieldPassword.type = "password";
fieldPassword.placeholder = "Contraseña";
fieldPassword.required = true;
formLogin.appendChild(fieldPassword);

/* Crea y agrega un párrafo */
const aviso = document.createElement("p");
aviso.classList.add("mensaje");
aviso.innerHTML = "Todos los campos son obligatorios";
formLogin.appendChild(aviso);

/* Crea y agrega boton de envio */
const buttonSubmit = document.createElement("input");
buttonSubmit.classList.add("boton");
buttonSubmit.type = "submit";
buttonSubmit.value = "Ingresar";
formLogin.appendChild(buttonSubmit);

/* Validación de campos del formulario */
formLogin.addEventListener('submit', (event) => {
    if (!validateForm()) {
       event.preventDefault(); // evita que el formulario se envíe si hay errores de validación
    }
});

function validateForm() {
    let email = fieldEmail.value.trim();
    let password = fieldPassword.value.trim();

    if (email === "") {
        alert("El campo Email no puede estar vacío");
        return false;
    }

    if (password === "") {
        alert("El campo Contraseña no puede estar vacío");
        return false;
    }

    return true;
}
