// Listen for submit
document.getElementById('form').addEventListener('submit', function(e){

    //Hide results
    document.getElementById('result').style.display = 'none';

    //show loading
    document.getElementById('loading').style.display = 'block'

    setTimeout(calculateResults, 2500)
    e.preventDefault()
});

// Calculate Results
function calculateResults (){

// UI Vars
const price = document.getElementById('price');
const payment = document.getElementById('payment');
const duration = document.getElementById('duration');
const rate = document.getElementById('rate');

const mpayment = document.getElementById('mpayment');
const ppaid = document.getElementById('ppaid');
const ipaid = document.getElementById('ipaid');

const principal = parseFloat(price.value - payment.value);
const calculatedrate = parseFloat(rate.value) / 100/ 12;
const calculatedduration = parseFloat(duration.value) * 12;

// Compute monthly payment
const z = Math.pow(1 + calculatedrate, calculatedduration);
const monthly = (principal*z*calculatedrate)/(z-1);

 if(isFinite(monthly)){
     mpayment.innerHTML += monthly.toFixed(2);
     ppaid.innerHTML += principal;
     ipaid.innerHTML += ((monthly * calculatedduration) - principal).toFixed(2);
 }else{
    showerror()
 }

//const ipai = ((monthly * calculatedduration) - principal).toFixed(2);
// //alert(monthly.toFixed(2))
// alert(ipai)

// show result
document.getElementById('result').style.display  = 'block';

 //hide loading
    document.getElementById('loading').style.display = 'none';
}

//error 
function showerror (){
    //show error
    document.getElementById('error').style.display = 'block';
 
    // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

function clearError (){
document.getElementById('error').remove();
}