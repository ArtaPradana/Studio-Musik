// Form Login
let passwordInput = document.getElementById("password");
let togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    passwordInput.type = "password";
    togglePassword.innerHTML = '<i class="fas fa-eye"></i>';
  }
});

document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();
  let user = document.querySelector("#email").value;
  let sandi = document.querySelector("#password").value;

  if (user === "user123@gmail.com" && sandi === "user123") {
    window.location.href = "/html/activity.html";
  } else {
    alert("Email & Kata Sandi anda salah");
  }
});
// Akhir Form Login
