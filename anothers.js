//========================phone===================================
//         ===============================
function updateProduct(isIncreasing, product, price){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1; 
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

 //   multifly
 const phoneTotal = document.getElementById(product + '-total');
 phoneTotal.innerText = productInput.value * price;
 calculateTotal();
}


document.getElementById('phone-plus').addEventListener('click', function(){
    updateProduct(true, 'phone', 1219);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProduct(false, 'phone', 1219);
})


document.getElementById('case-plus').addEventListener('click', function(){
    updateProduct(true, 'case', 59);
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateProduct(false, 'case', 59);
})


function getInputvalue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputvalue('phone') * 1219;
    const caseTotal = getInputvalue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal /10;
    const totalPrice = subTotal + tax;

    
// update html 
document.getElementById('sub-total').innerText = subTotal;
document.getElementById('tax-total').innerText = tax;
document.getElementById('total-price').innerText = totalPrice;
}
 
