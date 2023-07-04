let operacoes = []
let telaExibicao = ''
let result = ''

const deletar = () => {
    operacoes = []
    telaExibicao = ''
    result = ''
    document.getElementById('tela').innerHTML = '‎'
}

const exibirNumTela = (numero) => {
    telaExibicao += numero
    document.getElementById('tela').innerHTML = telaExibicao
}

const getVal = (valor) => {
    operacoes.push(valor)
}

function parse(str) {
    return Function(`'use strict'; return (${str})`)()
}

const resultado = () => {
    operacoes.forEach((item) => {
        result += item
    })
    result = parse(result)
    telaExibicao = result
    result = `${result}`
    operacoes = []
    document.getElementById('tela').innerHTML = telaExibicao
}