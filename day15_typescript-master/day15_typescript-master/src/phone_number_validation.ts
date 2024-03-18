/*

The checkPhoneNumber() function should accept phoneNumber as input and check if it is valid.

The provided phoneNumber is a valid phoneNumber if its value matches with any of the pattern suggested below:


+1 0999999999, 
+1 099-999-9999, 
+1 (099)-999-9999, 
  +1 (099)9999999, 
  +1 099 999 9999, 
  +1 099 999-9999, 
  +1 (099) 999-9999, 
  +1 099.999.9999
  +10999999999, 
  +1099-999-9999, 
  +1(099)-999-9999, 
  +1(099)9999999, 
  +1099 999 9999, 
  +1099 999-9999, 
  +1(099) 999-9999, 
  +1099.999.9999
  
  The function should return true if validation criteria is satisfied else should return false.
  
  Use Regular Expression to perform validation check.

*/
function checkPhoneNumber(phoneNumber) {
  const phoneExpressions=
    /^\+1 \d{10}$/.test(phoneNumber) ||
    /^#\d{1} \d{3}-\d{3}-\d{4}$/.test(phoneNumber) ||
    /^\+1 \(\d{3}\)\d{7}$/.test(phoneNumber) ||
    /^\+1 \d{3} \d{3} \d{4}$/.test(phoneNumber) ||
    /^\+1 \d{3} \d{3}-\d{4}$/.test(phoneNumber) ||
    /^\+1 \(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber) ||
    /^\+1 \d{3}\.\d{3}\.\d{4}$/.test(phoneNumber) ||
    /^\+10\d{2}-\d{3}-\d{4}$/.test(phoneNumber) ||
    /^\+1\(\d{3}\)-\d{3}-\d{4}$/.test(phoneNumber) ||
    /^\+1 \(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber) ||
    /^\+1 \d{2}\d{3} \d{4}$/.test(phoneNumber) ||
    /^\+10\d{2} \d{3}-\d{4}$/.test(phoneNumber) ||
    /^\+10\d{10}$/.test(phoneNumber) ||
    /^\+10\d{2} \d{3} \d{4}$/.test(phoneNumber);
  
    return phoneExpressions;
  };

  console.log(checkPhoneNumber(708975891));