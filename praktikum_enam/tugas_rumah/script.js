function validateForm() {
  var name = document.getElementById("name").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;

  var nameError = document.getElementById("nameError");
  var usernameError = document.getElementById("usernameError");
  var emailError = document.getElementById("emailError");

  var isValid = true;

  // Validasi Nama
  if (name === "") {
    nameError.innerHTML = "Nama harus diisi";
    isValid = false;
  } else {
    nameError.innerHTML = "";
  }

  // Validasi Username
  if (username === "") {
    usernameError.innerHTML = "Username harus diisi";
    isValid = false;
  } else {
    usernameError.innerHTML = "";
  }

  // Validasi Email
  if (email === "") {
    emailError.innerHTML = "Email harus diisi";
    isValid = false;
  } else if (!isValidEmail(email)) {
    emailError.innerHTML = "Email tidak valid";
    isValid = false;
  } else {
    emailError.innerHTML = "";
  }

  return isValid;
}

// Fungsi untuk memeriksa apakah email valid
function isValidEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
