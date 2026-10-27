console.log("Js carregando")

//API
const API_KEY = "50196203d61512204b6aac04"
const BASE_API_URL = "https://v6.exchangerate-api.com/v6/50196203d61512204b6aac04/latest/BRL"

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
let valorMoedas = {
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
    "libra": { name: "Libra Esterlina", flag: "./img/libra 1.png" },
    "bitcoin": { name: "Bitcoin", flag: "./img/bitcoin 1.png" }
}

async function fetchValorMoedas() {
    try {
        console.log("Buscando taxas de câmbio...");
        const response = await fetch(BASE_API_URL);


        if (!response.ok) {
            throw new error(`erro na API: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        if (data.result === "error") {
            throw new Error(`Erro da API: ${data["error-type"]}`);
        }

        console.log("Dados da API recebidos:", data);

        const rates = data.conversion_rates;

        valorMoedas.dolar = 1 / rates.USD;
        valorMoedas.euro = 1 / rates.EUR;
        valorMoedas.libra = 1 / rates.GBP;

        if (rates.XBT) {
            valorMoedas.bitcoin = 1 / rates.XBT;
        }

        console.log("Taxas de câmbio atualizadas:", valorMoedas);

        currencyChange()
    } catch (error) {
        console.error("Não foi possível buscar as taxas de câmbio:", error);
        alert("Não foi possível carregar as taxas de câmbio mais recentes. Usando valores padrão.");
    }
}

//convertValue - inputCurrency - REAL.
function convertValue() {
    const inputValue = Number(inputCurrency.value)

    const selectedCurrencyType = moedaDestino.value

    const selectedMoedaBase = moedaBase.value

    if (isNaN(inputValue) || inputValue <= 0) {
        currencyValorParaConverter.innerHTML = "Valor inválido";
        currencyValorConvertido.innerHTML = "----------";
        return;
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
        moedaNome.innerHTML = "MOEDA DE ORIGEM";
        flagBase.src = "./img/Design sem nome (1) (1).png"
    }

    if (destinoNameFlag) {
        moedaNomeConversor.innerHTML = destinoNameFlag.name;
        flagConversor.src = destinoNameFlag.flag;
    } else {
        moedaNomeConversor.innerHTML = "MOEDA DESTNO";
        flagConversor.src = "./img/Design sem nome (1) (1).png"
    }

    convertValue()
}

//Lista de eventos.
convertButton.addEventListener("click", convertValue);

moedaDestino.addEventListener("change", currencyChange);
moedaBase.addEventListener("change", currencyChange);

// Atualização.
document.addEventListener("DOMContentLoaded", () => {
    fetchValorMoedas();
});