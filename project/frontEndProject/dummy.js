
function loginUser() {
  const button = document.getElementById("loginBtn");
  const message = document.getElementById("message");

  // Disable button
  button.disabled = true;
  button.innerText = "Logging in...";

  // Show login process
  message.innerText = "Login process started...";

  // Simulate login
  setTimeout(() => {
    message.innerText = "✅ Login Successful!";
    button.innerText = "Login";
    button.disabled = false;
  }, 3000);
}
