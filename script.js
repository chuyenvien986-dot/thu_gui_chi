const PASSWORD = "13/11"; 

const tap = document.getElementById("tap");
const lock = document.getElementById("lock");
const card = document.getElementById("card");

const openBtn = document.getElementById("openBtn");
const passwordInput = document.getElementById("password");
const errorText = document.getElementById("error");

const music = document.getElementById("music");


tap.addEventListener("click", () => {
  music.volume = 0.8;
  music.play();
  tap.style.display = "none";
  lock.style.display = "block";
});


openBtn.addEventListener("click", () => {
  if(passwordInput.value === PASSWORD){
    lock.style.display = "none";
    card.style.display = "block";
  }else{
    errorText.innerText = "❌ Sai mật khẩu";
  }
});
