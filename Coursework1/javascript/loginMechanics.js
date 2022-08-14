var registrationValidate = function() {

  var usName = document.getElementById("usNameR");
  var passWrd = document.getElementById("passWrdR");

  if (usName.value == "" || passWrd.value == "") {

    window.alert("Blank value detected, unable to proceed");
    console.log("success");
    return false;

  }

  else {
   console.log("success");
    return true;

  }

};

var logInValidate = function() {

  var usName = document.getElementById("usNameL");
  var passWrd = document.getElementById("passWrdL");

  if (usName.value == "" || passWrd.value == "") {

    window.alert("Blank value detected, unable to proceed");
    return false;

  }

  else {

    return true;

  }

};
