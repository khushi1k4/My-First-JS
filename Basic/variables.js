const accountId = 12345
let accountEmail = "khushigoyal15@gmial.com"
var accountPassword = "987654321"
accountCity = "Jaipur"
let accountState;

// variable can be declared without any keyword

/* Prefer not to use var beacause
of issues in block scope and funtional scope
*/

// accountId = 2 //not allowed to modify the constant variables
accountEmail = "hcv@gmail.com"
accountPassword = "122121212"
accountCity = "Bengaluru"

console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId, accountPassword, accountCity, accountState]);