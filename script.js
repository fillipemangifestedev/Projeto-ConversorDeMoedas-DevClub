console.log("Js carregando")

//convertButton
const convertButton = document.querySelector(".convert-button")

//currencySelect
const moedaDestino = document.querySelector(".moeda-destino")

//convertValue - inputCurrency
function convertValue() {
    const inputCurrency = Number(document.querySelector(".input-currency").value)

    const currencyValorParaConverter = document.querySelector(".valorParaConverter")

    const currencyValorConvertido = document.querySelector(".valorConvertido")

    const selectedCurrencyType = moedaDestino.value

    console.log("moeda selecionada", selectedCurrencyType)

    //dolarToday
    const dolarToday = 5.2

    //euroToday
    const euroToday = 6.2

    //libraToday
    const libraToday = 6.8

    if (currencyValorParaConverter) {
        currencyValorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency)

    }

    if (selectedCurrencyType === "dolar") {
        currencyValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / dolarToday)
    } else if (selectedCurrencyType === "euro") {
        currencyValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday)
    } else if (selectedCurrencyType === "libra") {
        currencyValorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency / libraToday);
    } else {
        currencyValorConvertido.innerHTML = "Selecione uma moeda.";
    }
}

function currencyChange() {
    const moedaNomeConversor = document.getElementById("moeda-nome-conversor")

    const flagConversor = document.querySelector(".flag-converor")

    const selectedCurrencyType = moedaDestino.value

    if (selectedCurrencyType === "dolar") {
        moedaNomeConversor.innerHTML = "Dólar Americano"
        flagConversor.src = "./img/estados-unidos (1) 1.png"
    } else if (selectedCurrencyType === "euro") {
        moedaNomeConversor.innerHTML = "Euro"
        flagConversor.src = "./img/Design sem nome 3.png"
    } else if (selectedCurrencyType === "libra") {
        moedaNomeConversor.innerHTML = "Libra"
    }

    convertValue()
}

convertButton.addEventListener("click", convertValue)

moedaDestino.addEventListener("change", currencyChange)

