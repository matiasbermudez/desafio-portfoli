function main() {

    const divContactoEl = document.querySelector('.contenedor__contacto');
    divContactoEl.innerHTML = `
        <h1 class="titulo__contacto">Escribeme</h1>
        <form id="contactForm" class="form__contacto">
            <div class="form__contacto-contenedor-nym">
                <label for="nombre">
                    Nombre
                    <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" class="form__contacto-input">
                </label>
                <label for="email">
                    Email
                    <input type="email" id="email" name="email" placeholder="tu@mail.com" class="form__contacto-input">
                </label>
            </div>
            <label for="mensaje">
                Mensaje
                <textarea name="mensaje" id="mensaje" class="form__contacto-textarea"></textarea>
            </label>
            <button type="submit" class="form__contacto-botonsubmit">Enviar</button>
        </form>
    `
    const url = 'https://apx-api.vercel.app/api/utils/dwf'
    const formEl = document.querySelector('#contactForm')
    formEl.addEventListener('submit', (event) =>{
        event.preventDefault()
        const nombre = event.target.nombre.value
        const email = event.target.email.value
        const mensaje = event.target.mensaje.value
        fetch(url, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                to: email,
                message: mensaje
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Éxito:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    })
}
main();