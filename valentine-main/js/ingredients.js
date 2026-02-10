function createHearts() {
  const heartsContainer = document.querySelector(".floating-hearts");
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  const hearts = [
    "❤️", "💖", "💝", "💕", "💗",
    "❤", "🧡", "💛", "💚", "💙", "💜", "🖤"
  ];
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHearts, 300);

function openGift() {
  const giftContent = document.getElementById("giftContent");
  if (giftContent.style.display === "none" || !giftContent.style.display) {
    giftContent.style.display = "block";
    playPopSound();
  } else {
    giftContent.style.display = "none";
  }
}

function showLove() {
  const messages = [
    `💖 I Love You 💖\nYou mean everything to me!`,
    `⭐ You are the brightest star in my life ⭐\nAlways lighting my way`,
    `💑 With you, every day feels like Valentine’s Day 💑\nYour love makes my life complete`,
    `💕 You're my everything 💕\nMy love, my life, my world`,
    `🌈 You make my life more colorful 🌈\nLike a rainbow after the rain`,
    `💫 Every second with you feels magical 💫\nMy life is better because of you`,
    `🌹 Our love is like a flower that never fades 🌹\nYou are the fragrance in my heart`,
    `✨ You are my dream come true ✨\nWhen I close my eyes, I see only you`,
    `🌟 You are the light of my life 🌟\nEvery day with you is a blessing`,
    `💌 Words will never be enough to describe my love 💌\nEvery moment with you is priceless`,
    `🌸 My heart belongs to you 🌸\nNothing is more beautiful than your love`,
    `💖 You are the home of my heart 💖\nWhere I feel safe and loved`,
    `💓 Your touch makes the world brighter 💓\nYour love gives me strength`,
    `🌷 You are priceless 🌷\nEvery glance from you makes me happy`,
    `🌹 Your presence makes the world sweeter 🌹\nYou are my reason to smile`,
    `💞 Your love is the greatest gift 💞\nNothing can separate us`,
    `💖 You make me feel complete 💖\nEvery day with you is a miracle`,
    `💘 You are my beating heart 💘\nAnd I want to spend forever with you`,
    `🌟 Nothing is more beautiful than our love 🌟\nYou are the best part of my life`,
    `💎 Our love is more precious than diamonds 💎\nEvery second with you is priceless`,
    `🦋 Every moment with you feels like flying 🦋\nYou are my happiness`,
    `🌻 With you, I bloom every day 🌻\nYour love is everything to me`,
    `💖 Our love is a journey without an end 💖\nEvery step leads me to you`,
    `💓 You are my strength 💓\nWith you, I can face anything`,
    `💑 Life with you is full of laughter 💑\nMy best friend, my love, my everything`,
    `🌸 Nothing is more beautiful than your smile 🌸\nIt’s my greatest joy`,
    `💖 In this world, it’s just you and me 💖\nYour love is all I need`
  ];

  const giftBox = document.getElementById("giftContent");
  giftBox.style.display = "none";

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  swal({
    title: "Love Message",
    html: true,
    text: randomMessage,
    buttons: {
      cancel: "Close",
      confirm: {
        text: "Send to WhatsApp",
        value: true
      }
    }
  }).then((value) => {
    if (value) {
      swal("Enter the message you want to send:", {
        content: "input"
      }).then((value) => {
        if (value) {
          const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
            value
          )}%0A+I+Love+You`;
          window.open(whatsappUrl, "_blank");
        } else {
          swal("Message cannot be empty!", {
            icon: "error"
          });
        }
      });
    }
  });

  playPopSound();
}

function closeLoveMessage() {
  document.getElementById("loveMessage").style.display = "none";
}

function playPopSound() {
  const audio = new Audio("./music/maro-jump-sound-effect_1.mp3");
  audio.play();

  const button = document.querySelector("button");
  button.style.transform = "scale(1.1)";

  setTimeout(() => button.style.transform = "scale(1)", 200);
  setTimeout(() => button.style.transform = "scale(1.1)", 400);
  setTimeout(() => button.style.transform = "scale(1)", 600);
}

function updateLoveCounter() {
  const startDate = new Date("2025-02-14"); // Change to your anniversary date
  const today = new Date();
  const diffTime = Math.abs(today - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  document.getElementById("loveCounter").innerHTML = `
    <p style="font-size: 1.5em; margin: 10px 0;">
      ${diffDays} Days of Love ❤️<br />I Love You
