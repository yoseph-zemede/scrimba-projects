let lengthValue = [] // [feet, meters]
let volumeValue = []
let massValue = []

const meterToFeet = 3.281
const literToGallon = 0.264
const killToPound = 2.204

const inputEl = document.getElementById('input-el')
const convertBtnEl = document.getElementById('convert-btn')
let lengthValueEl = document.getElementById('length-value-el')
let volumeValueEl = document.getElementById('volume-value-el')
let massValueEl = document.getElementById('mass-value-el')


convertBtnEl.addEventListener("click", function() {
    const inputValue = inputEl.value
    lengthConverter(inputValue, meterToFeet, lengthValue)
    volumeConverter(inputValue, literToGallon, volumeValue)
    massConverter(inputValue, killToPound, massValue)
    displayValues(inputValue, lengthValue, volumeValue, massValue)
})

function lengthConverter(inputValue, conversionRate, lengthArr) {
    // METERS TO FEET
    lengthArr.push(inputValue * conversionRate)

    // FEET TO METERS
    lengthArr.push(inputValue / conversionRate)
}

function volumeConverter(inputValue, conversionRate, volumeArr) {
    // LITER TO GALLONS
    volumeArr.push(inputValue * conversionRate)

    // GALLONS TO LITER
    volumeArr.push(inputValue / conversionRate)
}

function massConverter(inputValue, conversionRate, massArr) {
    // KILLS TO POUNDS
    massArr.push(inputValue * conversionRate)

    // POUNDS TO KILLS
    massArr.push(inputValue / conversionRate)
}

function displayValues(inputValue, lengthArr, volumeArr, massArr) {
    let lengthValue = `
        <p class="conversion-value">
            ${inputValue} meters = ${lengthArr[0].toFixed(3)} feet | ${inputValue} feet = ${lengthArr[1].toFixed(3)} meters
        </p>
    `
    let volumeValue = `
        <p class="conversion-value">
            ${inputValue} liters = ${volumeArr[0].toFixed(3)} gallons | ${inputValue} gallons = ${volumeArr[1].toFixed(3)} liters
        </p>
    `
    let massValue = `
        <p class="conversion-value">
            ${inputValue} killos = ${massArr[0].toFixed(3)} pounds | ${inputValue} pounds = ${massArr[1].toFixed(3)} killos
        </p>
    `
    
    lengthValueEl.innerHTML += lengthValue;
    volumeValueEl.innerHTML += volumeValue;
    massValueEl.innerHTML += massValue;
}