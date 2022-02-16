function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number')
    let productNumber = productInput.value;
    // console.log(caseInput.value);

    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    else if (productInput.value < 1) {
        console.log(productInput.value);
        document.getElementById('case-container').style.display = 'none'
    }
    productInput.value = productNumber
    // update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInput.value * price
    // calculate total
    calculateTotal()
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}


function calculateTotal() {
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // console.log(subTotal);
    //upadte on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
// handle phone incress decress event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
});



// handle case incress decress event
// prothome amra akta event handler nibo case plus ke diye. tarpor chinnta korte hobe case plus button click korle ki change ba kaj kobe.
// chinta kore pelam case input er value ke barate hobe tai nilam const caseInput = document.getElementById('case-number'). case-number ke dhora new akta variable nilam caseNumber name a jemon : const caseNumber = caseInput.value. tarpor amara website giye dekhlam vlue 1 + 1 = 2 na hoye 11 hoye jacche amra jani je string ke kono number er shathe add korle number and oi string tai paoa jay. tai amra case number take parseInt korbo jemon : caseInput.value = parseInt(caseNumber) + 1;  

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true)
    // const caseInput = document.getElementById('case-number')
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
});
// prothome amra akta event handler nibo case plus ke diye. tarpor chinnta korte hobe case plus button click korle ki change ba kaj kobe.
// chinta kore pelam case input er value ke barate hobe tai nilam const caseInput = document.getElementById('case-number'). case-number ke dhora new akta variable nilam caseNumber name a jemon : const caseNumber = caseInput.value. tarpor amara website giye dekhlam vlue 1 + 1 = 2 na hoye 11 hoye jacche amra jani je string ke kono number er shathe add korle number and oi string tai paoa jay. tai amra case number take parseInt korbo jemon : caseInput.value = parseInt(caseNumber) - 1; 
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false)
    // const caseInput = document.getElementById('case-number')
    // const caseNumber = caseInput.value;
});
