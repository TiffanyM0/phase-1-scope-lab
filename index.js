// Write your solution in this file!
var customerName = "bob"
var bestCustomer;

function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  return bestCustomer = 'not bob';
}

console.log(bestCustomer);

function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = '';
function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = 'lancey';
}