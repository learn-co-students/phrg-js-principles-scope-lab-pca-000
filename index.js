// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName() {
  var upper = customerName.toUpperCase()
  customerName = upper
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = "some initial value"

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob'
}
