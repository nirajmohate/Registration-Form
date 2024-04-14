document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('clear').addEventListener('click', function() {
        var inputs = document.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            // Add 'date' and 'number' to the types checked
            if (inputs[i].type === 'text' || inputs[i].type === 'email' || inputs[i].type === 'password' || inputs[i].type === 'date' || inputs[i].type === 'number' || inputs[i].type === 'number') {
                inputs[i].value = ''; // Reset the value of each appropriate input field
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('clear').addEventListener('click', function() {
        var selects = document.querySelectorAll('select');
        selects.forEach(function(select) {
            // This assumes the default or placeholder option is at index 0
            select.selectedIndex = 0;
        });
    });
});







function submit() {
  var Submit = document.getElementById('Submit');
 
  var add1 = document.getElementById('add1').value;
  var add2 = document.getElementById('add2').value;
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  var gender = document.getElementById('gender').value;
  var city = document.getElementById('city').value;
  var region = document.getElementById('region').value;
  var zip = document.getElementById('zip').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var courses = document.getElementById('courses').value;
 
  

   if (add1 == '' || add2 =='') {
       alert("all are compulsory");
   } else {
      alert("your form is sucesfully");
    }
}
