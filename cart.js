function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = productInput.value;
    if (isIncreasing == true) {
        productInput.value = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productInput.value = parseInt(productNumber) - 1;
    }
    // update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInput.value * price
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value)
    return productNumber;
}


function calculateTotal() {
    // const phoneInput = document.getElementById('phone-number')
    // const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = getInputValue('phone') * 1219
    const caseTotal = getInputValue('case') * 59
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // get on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}



document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true)
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false)
});

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});
