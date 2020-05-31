function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function sendInfo() {
  var email1 = $("#user_email").val();
  var pass1 = $("#user_psw").val();
  var pass2 = $("#user_psw_repeat").val();
  $.ajax({
    type: "POST",
    url: "http://localhost:9998/users/register/",
    data: {
      email: email1,
      password1: pass1,
      password2: pass2,
      csrfmiddlewaretoken: getCookie("csrftoken"),
    },
    error: function () {
      console.log("--error in the AJAX call--");
      alert('Oops! Something went wrong. Please try again')
      location.reload();
    },
    success: function () {
      window.location.replace("/");
    },
  });
}

function validateEmailEmailFormat(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateEmail() {
  var email = $("#user_email").val();

  if (!validateEmailEmailFormat(email)) {
    $("#email_label").append("<p id='email_msg'></p>");
    $("#email_msg").text(" Please enter a valid Email");
    return false;
  } else {
    return true;
  }
}
function removeEmailMsg() {
  $("#email_msg").remove();
}
function validPsw() {
  var enteredPsw = $("#user_psw").val();
  if (enteredPsw.length > 12 || enteredPsw.length < 8) {
    $("#psw1_lable").append("<p id='psw1_msg'></p>");
    $("#psw1_msg").text(" Your password must be between 8-12 character");
    return false;
  } else {
    return true;
  }
}
function removepsw1Msg() {
  $("#psw1_msg").remove();
}
function validMatch() {
  var pass1 = $("#user_psw").val();
  var pass2 = $("#user_psw_repeat").val();
  if (pass1 === pass2) {
    $("#psw2_msg").remove();
    return true;
  } else {
    $("#psw2_lable").append("<p id='psw2_msg'></p>");
    $("#psw2_msg").text(" Your password must match");
  }
}

function activeBtn() {
  if (validateEmail() && validPsw() && validMatch()) {
    //Ajax call
    sendInfo();
  }
}
$("#user_email").on("focusout", validateEmail);
$("#user_email").on("focus", removeEmailMsg);
$("#user_psw").on("focusout", validPsw);
$("#user_psw").on("focus", removepsw1Msg);
$("#user_psw_repeat").on("keyup", validMatch);
$("#sign_up").click(function (e) {
  e.preventDefault();
  activeBtn();
});
