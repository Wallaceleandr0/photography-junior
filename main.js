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