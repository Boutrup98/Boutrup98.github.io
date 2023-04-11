var password;

var pass1="1234";
var pass2="Welcome2023";

password=prompt('Please enter your password to view this page.');

if (password==pass1 || password==pass2)
  alert('Password Correct! Click OK to enter.');
else
   {
    alert('Password Incorrect.');
    window.location="/";
    }