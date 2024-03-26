const botao = document.getElementById("botao")
const texto = document.getElementById("vezes")

let vezes = 1

botao.addEventListener("click", () => {
    texto.innerHTML = vezes
    vezes++
})

const textoup = document.getElementById("textoup")
const upper = document.getElementById("upper")
const btnUpper = document.getElementById("btnUpper")

function upperCase(text){
    alert(text.toUpperCase())
}

btnUpper.addEventListener("click", () => {
    upperCase(textoup.value)
})

const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const calc = document.getElementById("calc")

function soma(x, y){
    return x + y
}

calc.addEventListener("click", () => {
    alert(soma(parseInt(num1.value), parseInt(num2.value)))
})