const $pole = document.getElementById('pole');
const myArray = [1, 5, 10, 11, 400, 234];
const $guzik = document.getElementById('guzik');



$guzik.addEventListener('click', function () {

    const valueFromInput = $pole.value;
    updateMyArray(valueFromInput)   
});

function updateMyArray(value) {

    const $wynik = document.getElementById('wynik');
    value = parseFloat(value);

    if (isNaN(value)) {
        value = Math.floor(Math.random() * 20) + 1;
    }
    myArray.push(value)

    showMessage(value, myArray.length);

    $wynik.textContent = myArray;
}

function showMessage(value, index) {
    const $message = document.getElementById('message');
    const text = `dodano wartość ${value} na pozycji ${index}`;

    $message.textContent = text;
}

