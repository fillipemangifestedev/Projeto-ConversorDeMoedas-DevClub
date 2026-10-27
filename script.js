console.log("Js carregando")

//convertButton
const convertButton = document.querySelector(".convert-button")

//currencySelect - Destino
const moedaDestino = document.querySelector(".moeda-destino")

//curencySelect - Base
const moedaBase = document.querySelector(".moeda-base")

//convertValue - inputCurrency - REAL
function convertValue() {
    const inputCurrency = Number(document.querySelector(".input-currency").value)

    const currencyValorParaConverter = document.querySelector(".valorParaConverter")

    const currencyValorConvertido = document.querySelector(".valorConvertido")

    const selectedCurrencyType = moedaDestino.value

    const selectedMoedaBase = moedaBase.value

    console.log("moeda selecionada", selectedCurrencyType)

    //dolarToday
    const dolarToday = 5.34

    //euroToday
    const euroToday = 5.95

    //libraToday
    const libraToday = 7.11

    //bitcoinToday
    const bitcoinToday = 429.692

    //realToday
    const realToray = 1

    if (selectedMoedaBase === "real") {
        currencyValorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency);
    } else if (selectedMoedaBase === "dolar") {
        currencyValorParaConverter.innerHTML = new Intl.NumberFormat("es-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency);
    } else if (selectedMoedaBase === "euro") {
        currencyValorParaConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency);
    } else if (selectedMoedaBase === "libra") {
        currencyValorParaConverter.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency);
    } else if (selectedMoedaBase === "bitcoin") {
        currencyValorParaConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrency);
    } else {
        currencyValorParaConverter.innerHTML = "Selecione uma moeda."
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
    } else if (selectedCurrencyType === "bitcoin") {
        currencyValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrency / bitcoinToday);
    } else if (selectedCurrencyType === "real") {
        currencyValorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(realToray / inputCurrency);
    } else {
        currencyValorConvertido.innerHTML = "Selecione uma moeda.";
    }
}

function currencyChange() {
    const moedaNomeConversor = document.getElementById("moeda-nome-conversor")
    const moedaNome = document.getElementById("moeda-nome")

    const flagConversor = document.querySelector(".flag-converor")
    const flagBase = document.querySelector(".flag-base")

    const selectedCurrencyType = moedaDestino.value

    const selectedMoedaBase = moedaBase.value

    if (selectedMoedaBase === "real") {
        moedaNome.innerHTML = "Real Brasileiro"
        flagBase.src = "./img/brasil 2.png"
    } else if (selectedMoedaBase === "dolar") {
        moedaNome.innerHTML = "Dólar Americano"
        flagBase.src = "./img/estados-unidos (1) 1.png"
    } if (selectedMoedaBase === "euro") {
        moedaNomeConversor.innerHTML = "Euro"
        flagBase.src = "./img/Design sem nome 3.png"
    } else if (selectedMoedaBase === "libra") {
        moedaNomeConversor.innerHTML = "Libra"
        flagBase.src = "./img/libra 1.png"
    } else if (selectedMoedaBase === "bitcoin") {
        moedaNomeConversor.innerHTML = "Bitcoin"
        flagBase.src = "./img/bitcoin 1.png"
    }

    if (selectedCurrencyType === "dolar") {
        moedaNomeConversor.innerHTML = "Dólar Americano"
        flagConversor.src = "./img/estados-unidos (1) 1.png"
    } else if (selectedCurrencyType === "euro") {
        moedaNomeConversor.innerHTML = "Euro"
        flagConversor.src = "./img/Design sem nome 3.png"
    } else if (selectedCurrencyType === "libra") {
        moedaNomeConversor.innerHTML = "Libra"
        flagConversor.src = "./img/libra 1.png"
    } else if (selectedCurrencyType === "bitcoin") {
        moedaNomeConversor.innerHTML = "Bitcoin"
        flagConversor.src = "./img/bitcoin 1.png"
    } else if (selectedCurrencyType === "real") {
        moedaNomeConversor.innerHTML = "Real Brasileiro"
        flagConversor.src = "./img/brasil 2.png"
    }

    convertValue()
}

convertButton.addEventListener("click", convertValue)

moedaDestino.addEventListener("change", currencyChange)

