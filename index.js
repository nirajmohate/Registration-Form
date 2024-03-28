function clear() {
    var clear = document.getElementById('clear');
    var input = document.getElementsByTagName(input);
    document.getElementsByTagName('input').reset();
}


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
