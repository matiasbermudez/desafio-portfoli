function fetchData() {
    const space_id = "ubfx0j7r9chh"
    const environment_id = "master"
    const access_token = "wqrr0CNfAfY9WP69-FPLTlH12VNnyIey7CUp4-TJJs4"

    return fetch(`https://cdn.contentful.com/spaces/${space_id}/environments/${environment_id}/entries?access_token=${access_token}&content_type=serviciostp`)
        .then(response => { return response.json() })
        .then(result => { return result })
}


const contenedorEl2 = document.querySelector('.contenedor__servicios')

function crearCard(url,titulo,texto) {

    const cardEl = document.createElement('article')
    cardEl.classList.add("card")
    cardEl.innerHTML = `

            <img src="${url}">
            <h2>${titulo}</h2>
            <p>${texto}</p>
`
    contenedorEl2.appendChild(cardEl)
    console.log("SE CREO CON EXITO")
}


async function main() {
    const data = await fetchData()
    console.log(data)
    const dataImg = data.includes.Asset
    const dataTxt = data.items
   
    for (let i = 0; i < dataImg.length; i++) {
        const apiTitulo = dataTxt[i].fields.titulo
        const apiTxt = dataTxt[i].fields.texto
        const apiImg = dataImg[i].fields.file.url
        console.log(apiTitulo)
        console.log(apiTxt)
        console.log(apiImg)
        crearCard(apiImg,apiTitulo,apiTxt)
    }
}

main();


