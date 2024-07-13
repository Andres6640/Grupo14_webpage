/* mainRegistro.js */

/* Main de registro.html --------------------- */

/*
  Campos:
    Nombre y apellido
    Email
    Modelo
    Año
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
formRegistro.enctype = "multipart/form-data";
container.appendChild(formRegistro);

/* Crea y agrega una caja de texto para el Nombre y Apellido */
const fieldName = document.createElement("input");
fieldName.type = "text";
fieldName.placeholder = "Nombre y Apellido";
fieldName.required = true;
formRegistro.appendChild(fieldName);

/* Crea y agrega una caja para el Email */
const fieldEmail = document.createElement("input");
fieldEmail.type = "email";
fieldEmail.placeholder = "Email";
fieldEmail.required = true;
formRegistro.appendChild(fieldEmail);

/* Crea y agrega una lista para el Modelo */
const fieldModelo = document.createElement("select");
fieldModelo.required = true;
models.forEach(model => {
    const option = document.createElement("option");
    option.text = model.text;
    option.value = model.value;
    fieldModelo.appendChild(option)
});

/* Carga el placeholder del combo de modelos y lo selecciona */
const option = document.createElement("option");
option.value = "";
option.text = "Modelo";
fieldModelo.options.add(option, fieldModelo[0]);
fieldModelo.selectedIndex = 0;
formRegistro.appendChild(fieldModelo);

/* Crea y carga el Año del coche*/
const fieldAnio = document.createElement("input");
fieldAnio.type = "number";
fieldAnio.placeholder = "Año";
fieldAnio.min = 1971;
fieldAnio.max = 1993;
fieldAnio.required = true;
formRegistro.appendChild(fieldAnio);

/* Crea y agrega una caja para la Matricula */
const fieldMatricula = document.createElement("input");
fieldMatricula.type = "text";
fieldMatricula.placeholder = "Matrícula";
fieldMatricula.required = true;
formRegistro.appendChild(fieldMatricula);

/* Crea una caja para subir la Imagen */
const fieldImagen = document.createElement("input");
fieldImagen.type = "file";
fieldImagen.name = "imagen";
fieldImagen.required = true;
formRegistro.appendChild(fieldImagen);

/* Crea y agrega una lista de paises, leyendo una API */
const fieldPais = document.createElement("select");
fieldPais.required = true;
getCountryList(fieldPais);
formRegistro.appendChild(fieldPais);

/* Crea y agrega una caja para la Ciudad */
const fieldCiudad = document.createElement("input");
fieldCiudad.type = "text";
fieldCiudad.placeholder = "Ciudad";
fieldCiudad.required = true;
formRegistro.appendChild(fieldCiudad);

/* Crea y agrega una caja para la Contraseña */
const fieldPassword = document.createElement("input");
fieldPassword.type = "password";
fieldPassword.placeholder = "Contraseña";
fieldPassword.required = true;
formRegistro.appendChild(fieldPassword);

/* Crea y agrega un párrafo */
const mensaje = document.createElement("p");
mensaje.classList.add("mensaje");
mensaje.innerHTML = "Todos los campos son obligatorios";
formRegistro.appendChild(mensaje);

/* Crea y agrega boton de envio */
const buttonSubmit = document.createElement("input");
buttonSubmit.classList.add("boton");
buttonSubmit.type = "submit";
buttonSubmit.value = "Registrarse";
formRegistro.appendChild(buttonSubmit);

/* Validación de campos del formulario */
formRegistro.addEventListener('submit', (event) => {
    if (!validateForm()) {
       event.preventDefault(); // evita que el formulario se envíe si hay errores de validación
    }

    let name = fieldName.value.trim();
    let email = fieldEmail.value.trim();
    let modelo = fieldModelo.value.trim();
    let anio = fieldAnio.value.trim();
    let matricula = fieldMatricula.value.trim();
    let ciudad = fieldCiudad.value.trim();
    let password = fieldPassword.value.trim();
    let pais = fieldPais.value.trim();
    let imagen = fieldImagen.value.trim();

    /* Para pantera_db
    const body = {
        name: name,
        email: email,
        modelo: modelo,
        anio: anio,
        matricula: matricula,
        ciudad: ciudad,
        password: password,
        pais_cc: pais,
        imagen: imagen
    }*/

    /* Para vehicles_db */
    const body = {
        name: name,
        email: email,
        city: ciudad,
        country: pais,
        password: password
    }

    const options = createFetchOptions("POST", body);
    sendData(options);
    event.preventDefault();
});

/* Captura el evento click del boton de cierre */
btnClose.addEventListener("click", () => {
    container.style.display = "none";
    window.location.replace("index.html");
});

/* Funciones ******************************************************************/

function getCountryList(combo) {
    /* API Docs: https://rapidapi.com/rmr-soft-rmr-soft-default/api/city-list */
    const url = 'https://city-list.p.rapidapi.com/api/getCountryList';
    const options = {
	    method: 'GET',
	    headers: {
	    	'x-rapidapi-key': '433b7cc591mshc681782451c923fp1fc342jsn2abfdeba5968',
	    	'x-rapidapi-host': 'city-list.p.rapidapi.com'
	    }
    };

    fetch (url, options)
        .then (response => response.json())
        .then (data => {
            data[0].forEach(datum => {
                const option = document.createElement("option");
                option.value = datum.iso;
                option.text = datum.cname;
                combo.appendChild(option);
            })
    })

    /* Carga el placeholder del combo de paises y lo selecciona */
    const option = document.createElement("option");
    option.value = "";
    option.text = "País";
    combo.options.add(option, combo[0]);
}

function validateForm() {
    let name = fieldName.value.trim();
    let email = fieldEmail.value.trim();
    let modelo = fieldModelo.value.trim();
    let anio = fieldAnio.value.trim();
    let matricula = fieldMatricula.value.trim();
    let ciudad = fieldCiudad.value.trim();
    let password = fieldPassword.value.trim();
    let pais = fieldPais.value.trim();

    if (name == "") {
        alert("El campo Nombre no puede estar vacío");
        return false;
    }

    if (email == "") {
        alert("El campo Email no puede estar vacío");
        return false;
    }

    if (modelo == "Modelo") {
        alert("Tiene que seleccionar un modelo");
        return false;
    }

    if (anio == "Año") {
        alert("Tiene que seleccionar o tipear el año");
        return false;
    }

    if (matricula == "") {
        alert("El campo Matricula no puede estar vacío");
        return false;
    }

    if (ciudad == "") {
        alert("El campo Ciudad no puede estar vacío");
        return false;
    }

    if (password == "") {
        alert("El campo Password no puede estar vacío");
        return false;
    }

    if (pais === "Pais") {
        alert("Tiene que seleccionar un país");
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
