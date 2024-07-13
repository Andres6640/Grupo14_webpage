/* mainContacto.js */

/* Main de contacto.html --------------------- */

/*
    Campos:
        Nombre y apellido
        Email
        Mensaje
*/

const API_SERVER = "http://localhost:3000/api";

const page = document.getElementById("mainContacto");

/* Crea y agrega <h1>Contacto</h1> */
const pageTitle = document.createElement("h1");
pageTitle.innerHTML = "Contacto";
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
titulo.innerHTML = "Contacto";
titleBar.appendChild(titulo);

/* Boton de cierre (x) de container */
const btnClose = document.createElement("span");
btnClose.classList.add("btn-close");
btnClose.title = "Cerrar";
btnClose.innerHTML = "&times;";
titleBar.appendChild(btnClose);

/* Crea y agrega el formulario de contacto */
const formContacto = document.createElement("form");
formContacto.method = "post";
//formContacto.action = "";
container.appendChild(formContacto);

/* Crea y agrega una caja de texto para el Nombre y Apellido */
const fieldName = document.createElement("input");
fieldName.type = "text";
fieldName.placeholder = "Nombre y Apellido";
fieldName.required = true;
formContacto.appendChild(fieldName);

/* Crea y agrega una caja para el Email */
const fieldEmail = document.createElement("input");
fieldEmail.type = "email";
fieldEmail.placeholder = "Email";
fieldEmail.required = true;
formContacto.appendChild(fieldEmail);

/* Crea y agrega el textarea para el mensaje */
const fieldMensaje = document.createElement("textarea");
fieldMensaje.rows = 5;
fieldMensaje.placeholder = "Mensaje";
fieldMensaje.required = true;
formContacto.appendChild(fieldMensaje);

/* Crea y agrega un párrafo */
const aviso = document.createElement("p");
aviso.classList.add("mensaje");
aviso.innerHTML = "Todos los campos son obligatorios";
formContacto.appendChild(aviso);

/* Crea y agrega boton de envio */
const buttonSubmit = document.createElement("input");
buttonSubmit.classList.add("boton");
buttonSubmit.type = "submit";
buttonSubmit.value = "Enviar";
formContacto.appendChild(buttonSubmit);

/* Validación de campos del formulario */
formContacto.addEventListener('submit', (event) => {
    if (!validateForm()) {
       event.preventDefault(); // evita que el formulario se envíe si hay errores de validación
    }

    let name = fieldName.value.trim();
    let email = fieldEmail.value.trim();
    let message = fieldMensaje.value.trim();

    /* DATETIME - format: YYYY-MM-DD HH:MI:SS */
    const d = new Date();
    const mes = d.getMonth() + 1;  //getMonth is a zero-based value

    const body = {
        fecha: d.getFullYear()+"-"+mes+"-"+d.getDate()+ " "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds(),
        name: name,
        email: email,
        message: message
    }

    /* Crea una peticion para crear una entrada a la BD de contactos */
    const options = createFetchOptions("POST", body);
    sendData(options);
    event.preventDefault();
});

/* Captura el evento click del boton de cierre */
btnClose.addEventListener("click", () => {
    container.style.display = "none";
    window.location.replace("index.html");
});


/* Funciones *****************************************************************/

function validateForm() {
    let name = fieldName.value.trim();
    let email = fieldEmail.value.trim();
    let message = fieldMensaje.value.trim();

    if (name === "") {
        alert("El campo Nombre y Apellido no puede estar vacío");
        return false;
    }

    if (email == "") {
        alert("El campo Email no puede estar vacío");
        return false;
    }

    if (message === "") {
        alert("El campo Mensaje no puede estar vacío");
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
    //const url = `${API_SERVER}/contacts/create`;
    const url = `${API_SERVER}/contacts`;

    fetch (url, options)
        .then (response => response.json())
        .then (data => alert("Mensaje enviado"))
        .catch (error => console.log("Error en acceso API:", error));
}
