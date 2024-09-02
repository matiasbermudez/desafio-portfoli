function main(){
 const footerEl = document.querySelector('.footer')
 footerEl.innerHTML = `
 <a href="./index.html" class="nav__links"><img src="./imgs/LogoPagina.png" alt="Logo" class="footer__img-logo"></a>
        <section class="footer__seccion-contacto">
            <div>
                <a href="./index.html">
                    <img src="./imgs/homeIcono.png" alt="Icono home"  class="footer__seccion-contacto-imgs" >
                </a>
                <span>Home</span>
            </div>
            <div>
                <a href="./servicios.html">
                    <img src="./imgs/contactoIcono.png" alt="Icono servicios" class="footer__seccion-contacto-imgs" >
                </a>
                <span>Servicios</span>
            </div>
            <div>
                <a href="./contacto.html">
                    <img src="./imgs/telefonoIcono.png" alt="Icono contacto" class="footer__seccion-contacto-imgs" >
                </a>
                <span>Contacto</span>
            </div>
        </section>
        <section class="footer__seccion-redes">
            <a href="https://www.linkedin.com/" target="_blank">
                <img src="./imgs/linkedin.png" alt="Icono LinkeDin">
            </a>
            <a href="https://www.github.com/" target="_blank">
                <img src="./imgs/github.png" alt="Icono GitHub">
            </a>
            <a href="https://www.x.com/" target="_blank">
                <img src="./imgs/twitter.png" alt="Icono Twitter">
            </a>
        </section>
        <p class="footer__derechos">©2022 - https://apx.school</p>
 `

}

main();