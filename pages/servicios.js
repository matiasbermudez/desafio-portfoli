//FUNCION DE FETCHIN DE DATOS. 
function fetchData() {
    const space_id = "ubfx0j7r9chh"
    const environment_id = "master"
    const access_token = "wqrr0CNfAfY9WP69-FPLTlH12VNnyIey7CUp4-TJJs4"

    return fetch(`https://cdn.contentful.com/spaces/${space_id}/environments/${environment_id}/entries?access_token=${access_token}&content_type=serviciostp`)
        .then(response => { return response.json() })
        .then(result => { return result })
}
//FUNCION CREA LA CARD, RECIBE LA URL DE LA IMG, EL TITULO Y EL TEXTO, CREA LA CARD Y INSERTA LOS VALORES POR MEDIO DEL TEMPLATE STRING
function crearCard(url,titulo,texto) {
    const contenedorEl2 = document.querySelector('.contenedor__servicios')
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
//FUNCION DE BUSCAR LA IMG YA QUE CONTENTFULL NO ME TRAIA SIEMPRE LA IMAGEN Y LOS TEXTOS ORDENADOS EN EL ARRAY 
function buscarImg (titulo, arrayImg){
    for(imagenes of arrayImg){
        console.log(arrayImg)
        if(imagenes.fields.title === titulo){
            return imagenes.fields.file.url
        }
    }
}
//FUNCION ASINCRONA(PARA MANEJAR LA PROMESA DE FETCH)... TOMO LA DATA, LA PARSEO Y LLAMO A LAS FUNCIONES CORRESPONDIENTES APORTANDOLES SUS DATOS
async function main() {
    const data = await fetchData()
    console.log(data)
    const dataImg = data.includes.Asset
    const dataTxt = data.items
   
    for (let i = 0; i < dataImg.length; i++) {
        const apiTitulo = dataTxt[i].fields.titulo
        const apiTxt = dataTxt[i].fields.texto
        const apiImg = buscarImg(apiTitulo, dataImg)      
        crearCard(apiImg,apiTitulo,apiTxt)
    }
}
main();


