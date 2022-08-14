<!-- //<?php

//  session_start();

  //if (isset($_POST['btnSbmt02'])) {
// IF activates when the REGISTER button is pressed
//    include_once("db.php");



//  if(isset($_POST['usName']) && isset($_POST['psswd'])) {

  //  if ($_POST['usName'] != "" && $_POST['psswd'] != "") {
  //    $username = strip_tags($_POST['usName']);
  //    $password = strip_tags($_POST['psswd']);
//these two parts of code help avoiding SQL injection taking out special characters such tags and slashes
  //    $username = stripslashes($username);
  //    $password = stripslashes($password);
//mysqli_real_escape_string escapes special characters in a string for use in an SQL statement, taking into account the current charset of the connection
  //    $username = mysqli_real_escape_string($db, $username);
  //    $password = mysqli_real_escape_string($db, $password);

  //    $sql_store = "INSERT into users (id,username,password) VALUES (NULL, '$username', '$password')";
//inserts the data in the database so it can be compared to the one that is already present
  //    $sql_check_username ="SELECT username FROM users WHERE username = '$username'";

  //    $query_username = mysqli_query($db,$sql_check_username);
//checks if the inserted username is already present in the database
  //    if (mysqli_num_rows($query_username)) {
  //      echo "Username already taken, sry kiddo";
  //      return;
  //    }
//stores the data or it breaks if unsuccesful
  //    $sql = mysqli_query($db,$sql_store) or die(mysql_error());
  //    echo"$username has been succesfuly added to the database";
  //    header("Location: ../HTML/settings.html");
  //  }

  //  else {
  //      echo"Please insert your details";

//    }

//  }
//  else {

  //  echo"Some Credentials are missing";

//  }

//}

  //if (isset($_POST['btnSbmt01'])) {

//    include_once("db.php");

  //  $username = strip_tags($_POST['usName1']);
  //  $password = strip_tags($_POST['psswd1']);

//    $username = stripslashes($username);
//    $password = stripslashes($password);

//    $username = mysqli_real_escape_string($db, $username);
//    $password = mysqli_real_escape_string($db, $password);

//    $sql = "SELECT * FROM users WHERE username='$username' LIMIT 1";
//    $query =mysqli_query($db,$sql);

//    $row = mysqli_fetch_array($query);
//    $id = $row['id'];
//    $db_password = $row['password'];
//checks if the password of the selected ID is correct

//    if($password = $db_password) {

//        $_SESSION['username'] = $username;
//        $_SESSION['id'] =$id;
//        header("Location: ../HTML/settings.html");

  //    }

  //    else {

  //      echo "Wrong credentials inserted";

  //    }


//  }



 //?> -->

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Login Page</title>
    <link rel="stylesheet" href="..\CSS\loginStylesheet.css">
  </head>
  <body>
    <script>

    var loggedIn = {
        username0: "0",
        password0: "0",
        score: 0,
        mafia: 0,
        gift: 0,
        difficulty: 0
    }

    var log = {
      username: "0",
      password: "0",
      score: 0,
      mafia: 0,
      gift: 0,
      difficulty: 0
    }
   //console.log(localStorage.getItem(usName));
    // var checkIfUsNamePresent = function() {
    //
    //   for (var i = 0; i < localStorage.length; i++) {
    //     var UsNamePresentkey = localStorage.getItem[i];
    //     var UsNamePresent = JSON.parse(UsNamePresentkey);
    //     if (UsNamePresent == usName) {
    //       return true
    //     }
    //     }
    //   };



    var registrationValidate = function() {

      var usName = document.getElementById("usNameR").value;
      var passWrd = document.getElementById("passWrdR").value;
      var regularExprR = /[a-z0-9]{3,12}/



      if (regularExprR.test(usName) && regularExprR.test(passWrd)) {

        var presentKey = localStorage.getItem(usName);
        var objectKey = JSON.parse(presentKey);

          if (objectKey === null) {
            loggedIn.username0 = usName;
            loggedIn.password0 = passWrd;
            log.username = usName;
            log.password = passWrd;
            loggedIn = JSON.stringify(loggedIn);
            log = JSON.stringify(log);
            localStorage.setItem("loggedUser", loggedIn);
            localStorage.setItem(usName, log);
            window.alert("Registration succeded");
            return true;
           }

           else {
             window.alert("username already taken");
             return false;
           }
       }

       else {

         window.alert("Unable to proceed, you must insert 3 to 12 characters between letters and numbers to continue");
        return false;

       }

    };

    var logInValidate = function() {

      var usName = document.getElementById("usNameL").value;
      var passWrd = document.getElementById("passWrdL").value;
      var regularExprL = /[a-z0-9]{3,12}/

      if (regularExprL.test(usName) && regularExprL.test(passWrd)) {

        var presentKey = localStorage.getItem(usName);
        var objectKey = JSON.parse(presentKey);

        if (objectKey !== null && objectKey.password == passWrd) {
          loggedIn.username0 = usName;
          loggedIn.password0 = passWrd;
          loggedIn = JSON.stringify(loggedIn);
          window.alert("login succeded")
          localStorage.setItem("loggedUser", loggedIn);
          return true;
        }

        else {
          window.alert("wrong credentials inserted");
          return false;
        }
      }

      else {

        window.alert("Unable to proceed, you must insert 3 to 12 characters between letters and numbers to continue");
        return false;

      }

    };
    </script>
    <div class="container001">
    <div class="loginStat">
      <h1>LOG IN</h1>
      <form class="" onsubmit="return logInValidate()" action="../HTML/settings.html" method="POST" >
        <input id="usNameL" type="text" placeholder="Username" name="usName1" class="field" value="">
        <input id="passWrdL" type="password" placeholder="Password" name="psswd1" class="field" value="">
        <input type="submit" class="btnSbmt" name="btnSbmt01" value="SIGN IN">
      </form>
    </div>

    <div class="loginStat2">
      <h1>REGISTER</h1>

      <form class="" onsubmit="return registrationValidate()" action="../HTML/settings.html" method="POST" >
         <input id="usNameR" type="text" placeholder="Username" name="usName" class="field" value="">
         <input id="passWrdR" type="password" placeholder="Password" name="psswd" class="field" value="">
         <input type="submit" class="btnSbmt" name="btnSbmt02" value="REGISTER">
      </form>
    </div>
    </div>
  </body>
</html>
