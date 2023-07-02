// Form Login
function melihatPassword(id1, id2) {
  let passwordInput = document.getElementById(id1);
  let togglePassword = document.getElementById(id2);

  togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
      passwordInput.type = "password";
      togglePassword.innerHTML = '<i class="fas fa-eye"></i>';
    }
  });
}
melihatPassword("password", "togglePassword");

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
