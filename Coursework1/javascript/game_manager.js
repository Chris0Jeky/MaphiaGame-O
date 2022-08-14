


 //gang
   var mafia1 = function() {
     var presentUserString = localStorage.getItem("loggedUser");
     var presentUser = JSON.parse(presentUserString);
     var originalUserSring = localStorage.getItem(presentUser.username0);
     var originalUser = JSON.parse(originalUserSring);
     var loggedIn = {
         username0: presentUser.username0,
         password0: presentUser.password0,
         score: presentUser.score,
         mafia: 1,
         gift: presentUser.gift,
         difficulty: presentUser.difficulty
     };
     var loggedInString = JSON.stringify(loggedIn);

     localStorage.setItem("loggedUser", loggedInString);

     var oUser = {
         username: originalUser.username,
         password: originalUser.password,
         score: originalUser.score,
         mafia: 1,
         gift: originalUser.gift,
         difficulty: originalUser.difficulty
     };
     var oUserString = JSON.stringify(loggedIn);

     localStorage.setItem(originalUser, oUserString);

     window.alert("YOU HAVE CHOSEN NDRAGHETA");
   };

  var mafia2 = function() {
    var presentUserString = localStorage.getItem("loggedUser");
    var presentUser = JSON.parse(presentUserString);
    var originalUserSring = localStorage.getItem(presentUser.username0);
    var originalUser = JSON.parse(originalUserSring);
    var loggedIn = {
        username0: presentUser.username0,
        password0: presentUser.password0,
        score: presentUser.score,
        mafia: 2,
        gift: presentUser.gift,
        difficulty: presentUser.difficulty
    };
    loggedInString = JSON.stringify(loggedIn);

    localStorage.setItem("loggedUser", loggedInString);

    var oUser = {
        username: originalUser.username,
        password: originalUser.password,
        score: originalUser.score,
        mafia: 2,
        gift: originalUser.gift,
        difficulty: originalUser.difficulty
    };
    oUserString = JSON.stringify(loggedIn);

    localStorage.setItem(originalUser, oUserString);

         window.alert("YOU HAVE CHOSEN CORLEONE");
  };

  var mafia3 = function() {
    var presentUserString = localStorage.getItem("loggedUser");
    var presentUser = JSON.parse(presentUserString);
    var originalUserSring = localStorage.getItem(presentUser.username0);
    var originalUser = JSON.parse(originalUserSring);
    var loggedIn = {
        username0: presentUser.username0,
        password0: presentUser.password0,
        score: presentUser.score,
        mafia: 3,
        gift: presentUser.gift,
        difficulty: presentUser.difficulty
    };
    loggedInString = JSON.stringify(loggedIn);

    localStorage.setItem("loggedUser", loggedInString);

    var oUser = {
        username: originalUser.username,
        password: originalUser.password,
        score: originalUser.score,
        mafia: 3,
        gift: originalUser.gift,
        difficulty: originalUser.difficulty
    };
    oUserString = JSON.stringify(loggedIn);

    localStorage.setItem(originalUser, oUserString);

         window.alert("YOU HAVE CHOSEN ROSSOPOMODORO");
  };

  var mafia4 = function() {
    var presentUserString = localStorage.getItem("loggedUser");
    var presentUser = JSON.parse(presentUserString);
    var originalUserSring = localStorage.getItem(presentUser.username0);
    var originalUser = JSON.parse(originalUserSring);
    var loggedIn = {
        username0: presentUser.username0,
        password0: presentUser.password0,
        score: presentUser.score,
        mafia: 4,
        gift: presentUser.gift,
        difficulty: presentUser.difficulty
    };
    loggedInString = JSON.stringify(loggedIn);

    localStorage.setItem("loggedUser", loggedInString);

    var oUser = {
        username: originalUser.username,
        password: originalUser.password,
        score: originalUser.score,
        mafia: 4,
        gift: originalUser.gift,
        difficulty: originalUser.difficulty
    };
    oUserString = JSON.stringify(loggedIn);

    localStorage.setItem(originalUser, oUserString);

         window.alert("YOU HAVE CHOSEN AVENGERSINFINITE");
  };

  var mafia5 = function() {
    var presentUserString = localStorage.getItem("loggedUser");
    var presentUser = JSON.parse(presentUserString);
    var originalUserSring = localStorage.getItem(presentUser.username0);
    var originalUser = JSON.parse(originalUserSring);
    var loggedIn = {
        username0: presentUser.username0,
        password0: presentUser.password0,
        score: presentUser.score,
        mafia: 5,
        gift: presentUser.gift,
        difficulty: presentUser.difficulty
    };
    loggedInString = JSON.stringify(loggedIn);

    localStorage.setItem("loggedUser", loggedInString);

    var oUser = {
        username: originalUser.username,
        password: originalUser.password,
        score: originalUser.score,
        mafia: 5,
        gift: originalUser.gift,
        difficulty: originalUser.difficulty
    };
    oUserString = JSON.stringify(loggedIn);

    localStorage.setItem(originalUser, oUserString);

         window.alert("YOU HAVE CHOSEN GAMESTOP");
  };
// gift
  var gift1 = function() {
    var presentUserString = localStorage.getItem("loggedUser");
    var presentUser = JSON.parse(presentUserString);
    var originalUserSring = localStorage.getItem(presentUser.username0);
    var originalUser = JSON.parse(originalUserSring);
    var loggedIn = {
        username0: presentUser.username0,
        password0: presentUser.password0,
        score: presentUser.score,
        mafia: presentUser.mafia,
        gift: 1,
        difficulty: presentUser.difficulty
    };
    loggedInString = JSON.stringify(loggedIn);

    localStorage.setItem("loggedUser", loggedInString);

    var oUser = {
        username: originalUser.username,
        password: originalUser.password,
        score: originalUser.score,
        mafia: originalUser.mafia,
        gift: 1,
        difficulty: originalUser.difficulty
    };
    oUserString = JSON.stringify(loggedIn);

    localStorage.setItem(originalUser, oUserString);

         window.alert("YOU HAVE CHOSEN JUDGE");
  };

  var gift2 = function() {
    var presentUserString = localStorage.getItem("loggedUser");
    var presentUser = JSON.parse(presentUserString);
    var originalUserSring = localStorage.getItem(presentUser.username0);
    var originalUser = JSON.parse(originalUserSring);
    var loggedIn = {
        username0: presentUser.username0,
        password0: presentUser.password0,
        score: presentUser.score,
        mafia: presentUser.mafia,
        gift: 2,
        difficulty: presentUser.difficulty
    };
    loggedInString = JSON.stringify(loggedIn);

    localStorage.setItem("loggedUser", loggedInString);

    var oUser = {
        username: originalUser.username,
        password: originalUser.password,
        score: originalUser.score,
        mafia: originalUser.mafia,
        gift: 2,
        difficulty: originalUser.difficulty
    };
    oUserString = JSON.stringify(loggedIn);

    localStorage.setItem(originalUser, oUserString);

         window.alert("YOU HAVE CHOSEN HONORE");
  };

  var gift3 = function() {
    var presentUserString = localStorage.getItem("loggedUser");
    var presentUser = JSON.parse(presentUserString);
    var originalUserSring = localStorage.getItem(presentUser.username0);
    var originalUser = JSON.parse(originalUserSring);
    var loggedIn = {
        username0: presentUser.username0,
        password0: presentUser.password0,
        score: presentUser.score,
        mafia: presentUser.mafia,
        gift: 3,
        difficulty: presentUser.difficulty
    };
    loggedInString = JSON.stringify(loggedIn);

    localStorage.setItem("loggedUser", loggedInString);

    var oUser = {
        username: originalUser.username,
        password: originalUser.password,
        score: originalUser.score,
        mafia: originalUser.mafia,
        gift: 3,
        difficulty: originalUser.difficulty
    };
    oUserString = JSON.stringify(loggedIn);

    localStorage.setItem(originalUser, oUserString);

         window.alert("YOU HAVE CHOSEN SANGUE");
  };
// Difficulty
  var difficulty1 = function() {
    var presentUserString = localStorage.getItem("loggedUser");
    var presentUser = JSON.parse(presentUserString);
    var originalUserSring = localStorage.getItem(presentUser.username0);
    var originalUser = JSON.parse(originalUserSring);
    var loggedIn = {
        username0: presentUser.username0,
        password0: presentUser.password0,
        score: presentUser.score,
        mafia: presentUser.mafia,
        gift: presentUser.gift,
        difficulty: 1
    };
    loggedInString = JSON.stringify(loggedIn);

    localStorage.setItem("loggedUser", loggedInString);

    var oUser = {
        username: originalUser.username,
        password: originalUser.password,
        score: originalUser.score,
        mafia: originalUser.mafia,
        gift: originalUser.gift,
        difficulty: 1
    };
    oUserString = JSON.stringify(loggedIn);

    localStorage.setItem(originalUser, oUserString);

         window.alert("YOU HAVE CHOSEN NORMAL");
  };

  var difficulty2 = function() {
    var presentUserString = localStorage.getItem("loggedUser");
    var presentUser = JSON.parse(presentUserString);
    var originalUserSring = localStorage.getItem(presentUser.username0);
    var originalUser = JSON.parse(originalUserSring);
    var loggedIn = {
        username0: presentUser.username0,
        password0: presentUser.password0,
        score: presentUser.score,
        mafia: presentUser.mafia,
        gift: presentUser.gift,
        difficulty: 2
    };
    loggedInString = JSON.stringify(loggedIn);

    localStorage.setItem("loggedUser", loggedInString);

    var oUser = {
        username: originalUser.username,
        password: originalUser.password,
        score: originalUser.score,
        mafia: originalUser.mafia,
        gift: originalUser.gift,
        difficulty: 2
    };
    oUserString = JSON.stringify(loggedIn);

    localStorage.setItem(originalUser, oUserString);

         window.alert("YOU HAVE CHOSEN HARDCORE");
  };
// validation
  var chosenOptionsValidator = function() {
    var presentUserString = localStorage.getItem("loggedUser");
    var presentUser = JSON.parse(presentUserString);
    var originalUserSring = localStorage.getItem(presentUser.username0);
    var originalUser = JSON.parse(originalUserSring);
    if (presentUser.mafia == 0 ||
        presentUser.gift == 0 ||
        presentUser.difficulty == 0) {

          window.alert("You didn't choose all the options, unable to proceed");
          return false;

    }

    else {

      return true;

    }

  };
