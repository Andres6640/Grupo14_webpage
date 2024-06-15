/* headerFooter.js */

const headerJS = `
    <div id="topbar">
        <div>
            <a href="registro.html">Registrarse</a>
            <a href="ingresar.html">Ingresar</a>
        </div>
    </div>
    <nav>
        <a href="index.html" title="Inicio"><img src="img/logo.png" id="logo" alt="De Tomaso Automobili" height="35"></a>
        <div>
            <a href="historia.html">Historia</a>
            <a href="specs.html">Performance</a>
            <a href="media.html">Galeria</a>
            <a href="contacto.html">Contacto</a>
        </div>
    </nav>`;

document.querySelector("header").innerHTML = headerJS;

const footerJS = `
    <div>
        <a class="iconoFooter" href="https://www.youtube.com/results?search_query=de+tomaso+pantera" title="Pantera en YouTube" target="_blank">
            <i class="fa-brands fa-youtube"></i>
        </a>

        <a class="iconoFooter" href="https://www.tiktok.com/search?lang=es&q=de%20tomaso%20pantera&t=1718223652162" title="Pantera en TikTok" target="_blank">
            <i class="fa-brands fa-tiktok"></i>
        </a>

        <a class="iconoFooter" href="https://ar.pinterest.com/search/pins/?q=de%20tomaso%20pantera&rs=typed" title="Pantera en Pinterest" target="_blank">
            <i class="fa-brands fa-pinterest"></i>
        </a>

        <a class="iconoFooter" href="contacto.html" title="Contacto" target="">
            <i class="fa-solid fa-envelope"></i>
        </a>
    </div>

    <div>
        <p>&copy; 2024 · Grupo 14 · 24136 NodeJS</p>
    </div>`;

document.querySelector("footer").innerHTML = footerJS;
