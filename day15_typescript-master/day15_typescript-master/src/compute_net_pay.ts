/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/
function calculateNetPayable(pricePerKilo, quantityInKilo, discountInPercentage) {
    if(typeof pricePerKilo !== 'number' || typeof quantityInKilo !== 'number' || typeof discountInPercentage !== 'number'){
        return "Invalid Input Types, All Inputs Should Be of Type Number !!";
    }
    const discountAmount = pricePerKilo*quantityInKilo*(1-discountInPercentage/100);
    return discountAmount.toString();
}

console.log(calculateNetPayable(201,10,20));