// 1. Buat elemen img
let imgBaru = document.createElement("img");

// 2. Atur atribut sumber (src) dan ukuran
imgBaru.src = "hahaha.jpg";
imgBaru.alt = "Deskripsi foto";
imgBaru.width = 300; // Opsional

// 3. Masukkan elemen img ke dalam div dengan id 'container-foto'
let kontainer = document.getElementById("container-foto");
kontainer.appendChild(imgBaru);
