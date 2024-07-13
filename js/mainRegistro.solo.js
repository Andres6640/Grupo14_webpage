/* mainRegistro.solo.js */

/* Main de registro.html --------------------- */

/*
  Campos:
    Nombre y apellido
    Email
    Modelo
    Matricula
    Pais
    Ciudad
    Contraseña
*/

const API_SERVER = "http://localhost:3000/api";

const models = [{"value": "PL", "text": "Pantera L"},
                {"value": "GT4", "text": "Pantera GT4"},
                {"value": "GTS", "text": "Pantera GTS"},
                {"value": "PSI", "text": "Pantera 90 Si"}
];

const page = document.getElementById("mainRegistro");

/* Crea y agrega <h1>Registrarse</h1> */
const pageTitle = document.createElement("h1");
pageTitle.innerHTML = "Registrarse";
page.appendChild(pageTitle);

/* Crea y agrega ventana base */
const container = document.createElement("div");
container.classList.add("container");
container.innerHTML = "";
page.appendChild(container);

/* Crea y agrega barra de titulo */
const titleBar = document.createElement("div");
titleBar.classList.add("titleBar");
container.appendChild(titleBar);

/* Crea y agrega el titulo */
const titulo = document.createElement("span");
titulo.innerHTML = "Registrarse";
titleBar.appendChild(titulo);

/* Boton de cierre (x) de container */
const btnClose = document.createElement("span");
btnClose.classList.add("btn-close");
btnClose.title = "Cerrar";
btnClose.innerHTML = "&times;";
titleBar.appendChild(btnClose);

/* Crea y agrega el formulario de registro */
const formRegistro = document.createElement("form");
formRegistro.method = "post";
//formRegistro.action = "";
container.appendChild(formRegistro);

/* Crea y agrega una caja para el Email */
const fieldEmail = document.createElement("input");
fieldEmail.type = "email";
fieldEmail.placeholder = "Email";
fieldEmail.required = true;
formRegistro.appendChild(fieldEmail);

/* Crea y agrega una caja para la Contraseña */
const fieldPassword = document.createElement("input");
fieldPassword.type = "password";
fieldPassword.placeholder = "Contraseña";
fieldPassword.required = true;
formRegistro.appendChild(fieldPassword);

/* Crea y agrega un párrafo */
const aviso = document.createElement("p");
aviso.classList.add("mensaje");
aviso.innerHTML = "Todos los campos son obligatorios";
formRegistro.appendChild(aviso);

/* Crea y agrega boton de envio */
const buttonSubmit = document.createElement("input");
buttonSubmit.classList.add("boton");
buttonSubmit.type = "submit";
buttonSubmit.value = "Ingresar";
formRegistro.appendChild(buttonSubmit);

/* Validación de campos del formulario */
formRegistro.addEventListener('submit', (event) => {
    if (!validateForm()) {
       event.preventDefault(); // evita que el formulario se envíe si hay errores de validación
    }

    let email = fieldEmail.value.trim();
    let password = fieldPassword.value.trim();

    const body = {
        email: email,
        password: password
    }
    const options = createFetchOptions("POST", body);
    sendData(options);
    event.preventDefault();
});

/* Captura el evento click del boton de cierre */
btnClose.addEventListener("click", () => {
    container.style.display = "none";
});


/* Funciones ******************************************************************/

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

function createFetchOptions(method, body) {
    //const token = localStorage.getItem('token');

    return {
        method: method,
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            //authorization: token,
        },
        body: JSON.stringify(body),
    };
}

function sendData(options) {
    const url = `${API_SERVER}/users/register`;

    fetch (url, options)
        .then (response => response.json())
        .then (data => console.log("Nuevo usuario creado"))
        .catch (error => console.log("Error en acceso API:", error));
}
