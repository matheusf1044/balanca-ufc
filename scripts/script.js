
function calcular() {
    let peso = document.querySelector(".peso").value
    let texto = document.querySelector("h2")

    if  (!peso) {
        texto.innerHTML = "Deve informar seu peso"
    }

    else if (peso < 50) {
        texto.innerHTML = "Você não pode competir"
    } 
    else if (peso >= 50 && peso <= 80) {
        texto.innerHTML = "Você está na classe Peso Pena"
    } 
    else if (peso > 80 && peso <= 99) {
        texto.innerHTML = "Você está na classe Peso Medio"
    } else {
        texto.innerHTML = "Você está na classe Peso Pesado"
    }
}