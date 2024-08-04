function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const fromType = document.getElementById('fromType').value;
    const toType = document.getElementById('toType').value;
    const result = document.getElementById('result');

    if (isNaN(temp)) {
        result.textContent = 'Invalid Input';
        return;
    }

    let convertedTemp;

    if (fromType === 'celsius') {
        if (toType === 'fahrenheit') {
            convertedTemp = (temp * 9 / 5) + 32;
            result.textContent = `${convertedTemp.toFixed(2)} °F`;
        } else if (toType === 'kelvin') {
            convertedTemp = temp + 273.15;
            result.textContent = `${convertedTemp.toFixed(2)} K`;
        } else {
            result.textContent = `${temp.toFixed(2)} °C`;
        }
    } else if (fromType === 'fahrenheit') {
        if (toType === 'celsius') {
            convertedTemp = (temp - 32) * 5 / 9;
            result.textContent = `${convertedTemp.toFixed(2)} °C`;
        } else if (toType === 'kelvin') {
            convertedTemp = (temp - 32) * 5 / 9 + 273.15;
            result.textContent = `${convertedTemp.toFixed(2)} K`;
        } else {
            result.textContent = `${temp.toFixed(2)} °F`;
        }
    } else if (fromType === 'kelvin') {
        if (toType === 'celsius') {
            convertedTemp = temp - 273.15;
            result.textContent = `${convertedTemp.toFixed(2)} °C`;
        } else if (toType === 'fahrenheit') {
            convertedTemp = (temp - 273.15) * 9 / 5 + 32;
            result.textContent = `${convertedTemp.toFixed(2)} °F`;
        } else {
            result.textContent = `${temp.toFixed(2)} K`;
        }
    }
}
