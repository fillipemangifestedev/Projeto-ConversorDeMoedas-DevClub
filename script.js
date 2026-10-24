console.log("Js carregando")

//convertButton
const convertButton = document.querySelector(".convert-button")

//convertValue - inputCurrency
function convertValue() {
    const inputCurrency = document.querySelector(".currency").value

    //dolarToday
    const dolarToday = 5.2

    //value
    const value = inputCurrency / dolarToday

    console.log(value)
}

convertButton.addEventListener("click", convertValue)




