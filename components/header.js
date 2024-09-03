//FUNCION MAIN, SELECCION EL ELEMENTO HEADER, LE INSERTO EL HTML POR TEMPLATE STRING 
function main (){
const headerEl = document.querySelector('.header')
headerEl.innerHTML = `
         <a href="./index.html"  class="nav__links"><img src="./imgs/LogoPagina.png" alt="Logo" class="img__header"></a>
        <nav class="nav">
            <ol>
                
                <li><a href="./portfolio.html" class="nav__links">Portfolio</a></li>
                <li><a href="./servicios.html" class="nav__links">Servicios</a></li>
                <li><a href="./contacto.html" class="nav__links">Contacto</a></li>
            </ol>
        </nav>
        <div class="boton__hamburguesa">
            <span class="boton__span"></span>
            <span class="boton__span"></span>
            <span class="boton__span"></span>
        </div>
    `
//SELECCIONO EL BOTONHAMBURGUESA Y EL NAV. ESCUCHO EL EVENTO DEL BOTON Y LE CAMBIO EL ESTADO DE ACTIVO Y LO MISMO AL NAV 
const botonHamburguesaEl = document.querySelector('.boton__hamburguesa')
const navEl = document.querySelector('.nav')
botonHamburguesaEl.addEventListener('click', () => {
    botonHamburguesaEl.classList.toggle('active');
    navEl.classList.toggle('active')
})
}
main();