//alert('hello!')
let cipherString
function cipher() {
    let firstInput = document.querySelector('#cipher').value;
    cipherString = window.btoa(firstInput);
    document.querySelector('#decipher').value = cipherString
}

function decipher() {
    let deciphered = window.atob(cipher);
    document.querySelector('#deciphered').value = deciphered;
}