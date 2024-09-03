//FUNCION DE FETCHING DE DATOS A CONTENTFULL
function fetchData() {
    const space_id = "ubfx0j7r9chh"
    const environment_id = "master"
    const access_token = "wqrr0CNfAfY9WP69-FPLTlH12VNnyIey7CUp4-TJJs4"

    return fetch(`https://cdn.contentful.com/spaces/${space_id}/environments/${environment_id}/entries?access_token=${access_token}&content_type=trabajos`)
        .then(response => { return response.json() })
        .then(result => { return result })
}
//FUNCION DE CREACION DE CARD, PASO URL, TITULO Y TEXTO PARA IMPLEMENTARLO CON TEMPLATE STRING
function crearCard(url,titulo,texto) {
    const contenedorEl = document.querySelector('.contenedor__portfolio')
    const cardEl = document.createElement('article')
    cardEl.classList.add("card")
    cardEl.innerHTML = `
            <img src="${url}">
            <h2>${titulo}</h2>
            <p>${texto}</p>
`
    contenedorEl.appendChild(cardEl)
    console.log("SE CREO CON EXITO")
}
//FUNCION ASINCRONA PARA MANEJAR LA PROMESA DEL FETCHING, LLAMO FUNCIONES Y PASO PARAMETROS
async function main() {
    const data = await fetchData()
    const dataImg = data.includes.Asset
    const dataTxt = data.items
   
    for (let i = 0; i < dataImg.length; i++) {
        const apiTitulo = dataTxt[i].fields.titulo
        const apiTxt = dataTxt[i].fields.texto
        const apiImg = dataImg[i].fields.file.url
        crearCard(apiImg,apiTitulo,apiTxt)
    }
}

main();


