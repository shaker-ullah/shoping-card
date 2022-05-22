//  =======================phone============================

function updateProduct(isIncreasing, product, price){
    const phoneInput = document.getElementById(product + '-number');
    let phoneNumber = phoneInput.value;
   
 if (isIncreasing == true){
    phoneInput.value = parseInt(phoneNumber) + 1; 
 }
else if (phoneNumber > 0){
    phoneInput.value = parseInt(phoneNumber) - 1; 
}
const phoneNumbers = document.getElementById(product + '-total');
phoneNumbers.innerText = phoneInput.value * price;
calculateTotal();
}
document.getElementById('phone-plus').addEventListener('click', function(){
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = phoneInput.value;
    // phoneInput.value = parseInt(phoneNumber) + 1; 
    updateProduct(true, 'phone', 1219);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = phoneInput.value;
    // phoneInput.value = parseInt(phoneNumber) - 1;
    updateProduct(false, 'phone', 1219);
})
document.getElementById('case-plus').addEventListener('click', function(){
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = phoneInput.value;
    // phoneInput.value = parseInt(phoneNumber) - 1;
    updateProduct(true, 'case', 59);
})
document.getElementById('case-minus').addEventListener('click', function(){
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = phoneInput.value;
    // phoneInput.value = parseInt(phoneNumber) - 1;
    updateProduct(false, 'case', 59);
})

 



function productInputvalue (product){
    const phoneInput = document.getElementById(product + '-number');
    const phoneNumber = parseInt(phoneInput.value);
   return phoneNumber;
}

function calculateTotal(){
    const phoneTotal = productInputvalue('phone') * 1219;
    const caseTotal = productInputvalue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal /10;
    const totalPrice = subTotal +tax;

document.getElementById('sub-total').innerText = subTotal;
document.getElementById('tax-total').innerText = tax;
document.getElementById('total-price').innerText = totalPrice;
}