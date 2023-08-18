const accountId = 144553
let accountEmail = "tinkumaji02@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 123 // not allowed

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "tinkumaji004@gmail.com"
accountPassword = "121212"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])