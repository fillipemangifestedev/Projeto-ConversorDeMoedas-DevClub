console.log("Js carregando")

//convertButton
const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".moeda-base")

//convertValue - inputCurrency
function convertValue() {
    const inputCurrency = document.querySelector(".currency").value

    const currencyValorParaConverter = document.querySelector(".valorParaConverter")

    const currencyValorConvertido = document.querySelector(".valorConvertido")


    console.log(currencySelect.value)

    //dolarToday
    const dolarToday = 5.2

    //euroToday
    const euroToday = 6.2

    //value
    const value = inputCurrency / dolarToday

    currencyValorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrency)

    currencyValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(value)

    console.log(value)
}

convertButton.addEventListener("click", convertValue)




