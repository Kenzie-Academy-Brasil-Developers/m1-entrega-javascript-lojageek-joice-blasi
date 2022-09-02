let list = [
    {
        image: './assets/img/actions/animewoman.jpg',
        nome: 'Anime Woman',
        price: '$50',
        type: 'Action figure'
    },
    {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        nome: 'Dragon Ball',
        price: '$50',
        type: 'Action figure'
    },
    {
        image: './assets/img/actions/starwarspersonagem.jpg',
        nome: 'Yoda',
        price: '$65',
        type: 'Action figure'
    },
    {
        image: './assets/img/painting/clock.jpg',
        nome: 'Clock',
        price: '$70',
        type: 'Decorative frames'
    },
    {
        image: './assets/img/painting/gamepad.jpg',
        nome: 'Gamepad',
        price: '$65',
        type: 'Decorative frames'
    },
    {
        image: './assets/img/painting/personagem.jpg',
        nome: 'C-3PO',
        price: '$80',
        type: 'Decorative frames'
    }
]


function addProduto(image, nome, price, type) {
    let produto = {
        image,
        nome,
        price,
        type
    }
    list.push(produto);
}

//addProduto('./assets/img/actions/starwarspersonagem.jpg', 'Mestre Yoda', '$100', 'Action figure');


let listFigures = [];
let listFrames = [];

function separaItens(arr) {
    for(let i = 0; i < arr.length; i++) {
        let type = arr[i].type;
        if(type === 'Action figure') {
            listFigures.push(arr[i]);
        } else {
            listFrames.push(arr[i]);
        }
    }
}

separaItens(list);


function criarElementos(lista, classeUl) {
    let ul = document.querySelector(classeUl)
    
    for(let i = 0; i < lista.length; i++) {
        let li = document.createElement('li');
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = lista[i].image;
        img.alt = lista[i].nome;
        let p1 = document.createElement('p');
        p1.innerHTML = lista[i].nome;
        p1.classList.add('nome');
        let p2 = document.createElement('p');
        p2.innerHTML = lista[i].price;
        p2.classList.add('price');
        
        div.appendChild(img);
        li.append(div, p1, p2);
    
        ul.appendChild(li);
    }
}

criarElementos(listFrames, '.list-frames');
criarElementos(listFigures, '.list-figures');