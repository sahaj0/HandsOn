/*

The checkPassword() function should accept password as input and check if it is valid.

The validation criteria for password are:
- should have minimum 6 characters and maximum 20 characters
- should have at least one lower-case and one upper-case alphabet
- should have at least one digit
- should have at least one symbol

The function should return true if validation criteria is satisfied else should return false.

Use Regular Expression to perform validation check.

*/
function checkPassword(password) {
    //should have minimum 6 characters and maximum 20 characters
// - should have at least one lower-case and one upper-case alphabet
// - should have at least one digit
// - should have at least one symbol
    
const passwordExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-za-z\d@$!%*?&]{6,20}$/;
    
// function should return true if validation criteria is satisfied else should return false.
   if(passwordExpression.test(password)){
    return true;
   }
   return false;

}
console.log(checkPassword(6));
