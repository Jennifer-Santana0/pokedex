const endpoint = 'https://pokeapi.co/api/v2/pokemon'
const container = document.querySelector('#container')

const get_pokemom = async () =>{
    try{
        for (let index = 1; index <= 12; index++){
            const response = await fetch(`${endpoint}/${index}`)
            const data = await response.json()
            let url_img_pokemom = data.sprites.other.dream_world.front_default
            let url_name_pokemom = data.name

            // criando o card
            const card = document.createElement('div')
            card.classList.add('cards')
            // criando o card_img
            const card_img = document.createElement('div')
            card_img.classList.add('card_img')
            // criando o img do pokemom
            const img = document.createElement('img')
            img.src = url_img_pokemom
            // criando card_descricao
            const card_descricao = document.createElement('div')
            card_descricao.classList.add('card_descricao')
            // criando o h2 com os nomes do pokemons
            const h2 = document.createElement('h2')
            h2.innerHTML = url_name_pokemom

            card_img.appendChild(img)
            card.appendChild(card_img)
            card_descricao.appendChild(h2)
            card.appendChild(card_descricao)
            container.appendChild(card)
        }
    } catch (err){
        console.log(`Ocorreu um erro: ${err}`)
    }
}

get_pokemom()