function toggleAuth(type) {
  document.getElementById('signup-box').style.display = (type === 'signup') ? 'block' : 'none';
  document.getElementById('login-box').style.display = (type === 'login') ? 'block' : 'none';
}

function signup() {
  let username = document.getElementById("signupUsername").value;
  let password = document.getElementById("signupPassword").value;

  if (username && password) {
    localStorage.setItem(username, password);
    alert("Signup successful! Please login.");
    toggleAuth('login');
  } else {
    alert("Please fill all fields");
  }
}

function login() {
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  let storedPass = localStorage.getItem(username);
  if (storedPass && storedPass === password) {
    sessionStorage.setItem("loggedInUser", username);
    window.location.href = "game.html";
  } else {
    alert("Invalid credentials!");
  }
}
