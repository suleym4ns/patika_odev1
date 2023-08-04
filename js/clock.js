// Kullanıcıdan ismi alıp, hoş geldin mesajını güncelleyen fonksiyon
function setName() {
    const n = document.querySelector("#myName");
    let isim = prompt("Adinizi giriniz:");
    n.innerHTML = isim;
  }
  
  // Saati ve günü gösteren fonksiyon
  function showTime() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const day = time.toLocaleDateString("tr-TR", { weekday: "long" });
  
    const timeDOM = document.querySelector("#myClock");
    timeDOM.textContent = `Saat: ${hours}:${minutes}:${seconds} ${day}`;
  
    setTimeout(showTime, 1000);
  }
  
  // Sayfa yüklendiğinde ismi ve saat/günü güncelle
  window.onload = function () {
    setName();
    showTime();
  };
  