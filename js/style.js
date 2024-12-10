// Tangkap elemen input nama dan tombol submit
const form = document.querySelector("form");
const nameInput = document.getElementById("nama");

// Tangkap submit event pada formulir
form?.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah submit bawaan

  const userName = nameInput?.value.trim(); // Ambil nilai input
  if (userName) {
    // Simpan nama ke localStorage
    localStorage.setItem("userName", userName);
    // Arahkan ke halaman produk
    window.location.href = "produk.html";
  } else {
    alert("Masukkan nama terlebih dahulu!");
  }
});

// Jika berada di halaman produk, ganti nama navbar
document.addEventListener("DOMContentLoaded", function () {
  const navbarName = document.getElementById("navbarName");
  const userName = localStorage.getItem("userName"); // Ambil nama dari localStorage

  if (userName && navbarName) {
    navbarName.textContent = "Selamat Datang " + userName; // Ganti teks navbar dengan nama
  }
});
