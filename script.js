console.log("Js carregando")

//convertButton.
const convertButton = document.querySelector(".convert-button")

//currencySelect - Destino / Base - Select.
const moedaDestino = document.querySelector(".moeda-destino")
const moedaBase = document.querySelector(".moeda-base")

//input.
const inputCurrency = document.querySelector(".input-currency")

//currencyConverted - Section.
const currencyValorParaConverter = document.querySelector(".valorParaConverter")
const currencyValorConvertido = document.querySelector(".valorConvertido")

//currencyName - Section.
const moedaNomeConversor = document.getElementById("moeda-nome-conversor")
const moedaNome = document.getElementById("moeda-nome")

//currencyName - Section.
const flagConversor = document.querySelector(".flag-converor")
const flagBase = document.querySelector(".flag-base")

//Valor das moedas.
const valorMoedas = {
    "real": 1,
    "dolar": 5.34,
    "euro": 5.95,
    "libra": 7.11,
    "bitcoin": 429.692
}

//Código das moedas.
const infoMoedas = {
    "real": { code: "BRL", locale: "pt-BR" },
    "dolar": { code: "USD", locale: "es-US" },
    "euro": { code: "EUR", locale: "de-DE" },
    "libra": { code: "GBP", locale: "en-GB" },
    "bitcoin": { code: "XBT", locale: "en-US" }
}

//Nomes e bandeiras.
const infoNameFlag = {
    "real": { name: "Real Brasileiro", flag: "./img/brasil 2.png" },
    "dolar": { name: "Dólar Americano", flag: "./img/estados-unidos (1) 1.png" },
    "euro": { name: "Euro", flag: "./img/Design sem nome 3.png" },
    "libra": { name: "Libra", flag: "./img/libra 1.png" },
    "bitcoin": { name: "Bitcoin", flag: "./img/bitcoin 1.png" }
}

//convertValue - inputCurrency - REAL.
function convertValue() {
    const inputValue = Number(inputCurrency.value)

    const selectedCurrencyType = moedaDestino.value

    const selectedMoedaBase = moedaBase.value

    if (isNaN(inputValue) || inputValue <= 0) {
        currencyValorParaConverter.innerHTML = "Valor inválido";
        currencyValorConvertido.innerHTML = "----------";
    }

    const baseInfo = infoMoedas[selectedMoedaBase]
    const baseLocal = infoMoedas[selectedCurrencyType]

    if (baseInfo) {
        currencyValorParaConverter.innerHTML = new Intl.NumberFormat(baseInfo.locale, {
            style: "currency",
            currency: baseInfo.code
        }).format(inputValue);
    } else {
        currencyValorParaConverter.innerHTML = "ERRO!"
    }

    //Converte o valor para a moeda base - REAL.
    const valueInBRL = inputValue * valorMoedas[selectedMoedaBase]

    //Converte o valor para a moeda desejada.
    const convertedValue = valueInBRL / valorMoedas[selectedCurrencyType]

    if (baseLocal) {
        currencyValorConvertido.innerHTML = new Intl.NumberFormat(baseLocal.locale, {
            style: "currency",
            currency: baseLocal.code
        }).format(convertedValue);
    } else {
        currencyValorConvertido.innerHTML = "ERRO!"
    }
}

function currencyChange() {
    const selectedCurrencyType = moedaDestino.value
    const selectedMoedaBase = moedaBase.value

    const baseNameFlag = infoNameFlag[selectedMoedaBase]
    const destinoNameFlag = infoNameFlag[selectedCurrencyType]

    if (baseNameFlag) {
        moedaNome.innerHTML = baseNameFlag.name;
        flagBase.src = baseNameFlag.flag;
    } else {
        moedaNome.innerHTML = "PAÍS DE ORIGEM";
        flagBase.src = ""
    }

    if (destinoNameFlag) {
        moedaNomeConversor.innerHTML = destinoNameFlag.name;
        flagConversor.src = destinoNameFlag.flag;
    } else {
        moedaNomeConversor.innerHTML = "PAÍS DESTNO";
        flagConversor.src = ""
    }

    convertValue()
}

convertButton.addEventListener("click", convertValue)

moedaDestino.addEventListener("change", currencyChange)

moedaBase.addEventListener("change", currencyChange)

