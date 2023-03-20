'use strict'

function abrirMenu () {
    document.querySelector('.menu-hamburguer').style.display = 'flex'
    document.querySelector('#ico-menu').style.display = 'none'
    document.querySelector('#ico-fechar').style.display = 'block'
    // document.querySelector('#x').style.display= 'block'
}

function fecharMenu () {
    document.querySelector('.menu-hamburguer').style.display = 'none'
    document.querySelector('#ico-menu').style.display = 'block'
    document.querySelector('#ico-fechar').style.display = 'none'
}

document.querySelector('#range').addEventListener('input', e => {
    changeWidth(e.target.value)
});

function changeWidth(value) {
    document.querySelector('#dv-effect').style.width = `${value}%`;
}



// function abrirMenu () {
//     document.querySelector('.menu-mobile').style.display = 'block'
//     document.querySelector('#menu-icon').style.display = 'none'
//     document.querySelector('#x').style.display= 'block'
// }

// function fecharMenu () {
//     document.querySelector('.menu-mobile').style.display = 'none'
//     document.querySelector('#menu-icon').style.display = 'block'
//     document.querySelector('#x').style.display= 'none'
// }