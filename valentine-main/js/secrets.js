const validCredentials = {
  username: "pattu", // MASUKAN USERNAME KAMU DISINI, CONTOH: 'admin'
  password: "dumis", // MASUKAN PASSWORD KAMU DISINI, CONTOH: 'admin'
};

function checkLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

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
    initValentinePage();

    // Unmute audio after login
    const audio = document.getElementById("linkmp3");
    audio.muted = false;
    audio.play().catch(err => console.log("Audio play blocked:", err));
    
  } else {
    document.getElementById("error-message").textContent =
      "Username pattu, password dumis ❤️";
  }
}

const audio = document.getElementById("linkmp3");

// Try to unmute and play
audio.muted = false;
audio.volume = 0.5; // optional: set initial volume
audio.play().catch(err => {
  console.log("Autoplay blocked, try interacting with page", err);
});



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
