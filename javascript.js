var inputOneIsOn = false;
var inputTwoIsOn = false;

function setSwitchState(elementId, isOn) {
    var button = document.getElementById(elementId);
    if (!button) return;

    button.classList.toggle('switch-on', isOn);
    button.classList.toggle('switch-off', !isOn);
    button.textContent = isOn ? 'ON' : 'OFF';
}

function toggleInputOne() {
    inputOneIsOn = !inputOneIsOn;
    setSwitchState('toggleImage', inputOneIsOn);
}

function toggleInputTwo() {
    inputTwoIsOn = !inputTwoIsOn;
    setSwitchState('toggleImage2', inputTwoIsOn);
}

function and() {
    var a = inputOneIsOn;
    var b = inputTwoIsOn;

    if (a && b) {
        document.getElementById('andGate').src = 'and2on.png';
    } else if (!a && b) {
        document.getElementById('andGate').src = 'andoffon.PNG';
    } else if (a && !b) {
        document.getElementById('andGate').src = 'andonoff.PNG';
    } else {
        document.getElementById('andGate').src = 'and2off.PNG';
    }
}
