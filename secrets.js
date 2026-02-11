const validCredentials = {
  username: "pattu", // ENTER YOUR USERNAME HERE, CONTOH: 'admin'
  password: "dumis", // ENTER YOUR PASSWORD HERE, CONTOH: 'admin'
};

function checkLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // const encodedUsername = btoa(username);
  // const encodedPassword = btoa(password);

  const encodedUsername = username;
  const encodedPassword = password;

  if (
    encodedUsername === validCredentials.username &&
    encodedPassword === validCredentials.password
  ) {
    // Hide login page
    document.getElementById("login-page").style.display = "none";
    // Show content
    document.getElementById("content").style.display = "block";
    // Start the valentine page animations
        const audio = document.getElementById("linkmp3");
    audio.play(); // ✅ browser allows this
    initValentinePage();
  } else {
    document.getElementById("error-message").textContent =
      "Username pattu, password dumis ❤️";
  }
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkLogin();
  }
});

function initValentinePage() {
  createHearts();
  setInterval(createHearts, 300);
  updateLoveCounter();

  const container = document.querySelector(".container");
  container.style.opacity = 0;
  let opacity = 0;
  const fadeIn = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(fadeIn);
    }
    container.style.opacity = opacity;
    opacity += 0.02;
  }, 20);
}
