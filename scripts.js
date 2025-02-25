const btright = document.querySelector('.right');

const btleft = document.querySelector('.left');

const container = document.querySelector('.container');

const lista = document.querySelector('.container .lista');


const thumb = document.querySelector('.container .thumb');


btright.onclick = () => moverItens ('right')
btleft.onclick = () => moverItens ('left')



function moverItens (type) {

    const listaItens = document.querySelectorAll('.lista .lista-item');

    const thumbItens = document.querySelectorAll('.thumb .thumb-item');

    if (type==='right') {

        lista.appendChild(listaItens [0])

        thumb.appendChild(thumbItens [0])

        container.classList.add('next')
        
        
    } else {

        lista.prepend(listaItens [listaItens.length -1])

        thumb.prepend(thumbItens [thumbItens.length -1])

        container.classList.add('back')
               
    }

    setTimeout(() => {

        container.classList.remove('right')

        container.classList.remove('left')
        
    }, 3000); 

    
}