// Menyeleksi beberapa inputan textfield
const nama = document.getElementById("nama");
const destinasi = document.getElementById("destinasi");
const jadwal= document.getElementById("jadwal")
const status = document.getElementById("status");
const maskapai = document.getElementById("maskapai")
const tempat = document.getElementById("tempat")
const pembayaran = document.getElementById("pembayaran")
const jumlah = document.getElementById("jumlah");
const subtotal = document.getElementById("subtotal");
const diskon = document.getElementById("diskon");
const total = document.getElementById("total");
const cetakPesanan = document.querySelector(".output");

// Menyeleksi bagian tombol dan menjalnkan apabila tombol pesan di klik
const tombolPesan = document.getElementById("pesan");
tombolPesan.addEventListener("click", function (e) {
  e.preventDefault();

  // Pengecekan jika inputan-nya kosong atau tidak diisi
  if (nama.value == "" || destinasi.value == "" || status.value == "" || jumlah.value == ""  || pembayaran.value == "") {
    alert("Inputan nilai harus diisi terlebih dahulu!");
  } else {
    // Mengecek jika inputan nama nya sudah tidak kosong
    if (nama.value != "") {
      document.getElementById("namaOutput").innerText = nama.value;
    }

    if (jadwal.value != "") {
      document.getElementById("jadwalOutput").innerText = jadwal.value;
    }

    // Mengecek inputan destinasi sesuai 3 Pilihan: Bandung, Jakarta dan Surabaya
    if (destinasi.value == "Jakarta, Indonesia") {
      document.getElementById("destinasiOutput").innerText = destinasi.value;
    } else if (destinasi.value == "Buenos Aires, Argentina") {
      document.getElementById("destinasiOutput").innerText = destinasi.value;
    } else if (destinasi.value == "Cape Town, Afrika Selatan") {
      document.getElementById("destinasiOutput").innerText = destinasi.value;
    } else if (destinasi.value == "Sydney, Australia") {
      document.getElementById("destinasiOutput").innerText = destinasi.value;
    }else if (destinasi.value == "Swiss, Switzerland") {
      document.getElementById("destinasiOutput").innerText = destinasi.value;
    } else if (destinasi.value == "Tokyo, Jepang") {
      document.getElementById("destinasiOutput").innerText = destinasi.value;
    } else {
      alert("Pilihan Destinasi hanya Bandung, Jakarta dan Surabaya");
    }


    if (tempat.value == "1A") {
      document.getElementById("tempatOutput").innerText = tempat.value;
    } else if (pembayaran.value == "2B") {
      document.getElementById("tempatOutput").innerText = tempat.value;
    } else if (pembayaran.value == "3C") {
      document.getElementById("tempatOutput").innerText = tempat.value;
    } else if (pembayaran.value == "4D") {
      document.getElementById("tempatOutput").innerText = tempat.value;
     } else {"NOT"} 

    if (maskapai.value == "Lion Air") {
      document.getElementById("maskapaiOutput").innerText = maskapai.value;
    } else if (maskapai.value == "Batik Air") {
      document.getElementById("maskapaiOutput").innerText = maskapai.value;
    } else if (maskapai.value == "Citilink") {
      document.getElementById("maskapaiOutput").innerText = maskapai.value;
    } else if (maskapai.value == "Garuda") {
      document.getElementById("maskapaiOutput").innerText = maskapai.value;
    }else {"NOT"}

    if (pembayaran.value == "BCA (002312451)") {
      document.getElementById("pembayaranOutput").innerText = pembayaran.value;
    } else if (pembayaran.value == "Mandiri (11124124)") {
      document.getElementById("pembayaranOutput").innerText = pembayaran.value;
    } else if (pembayaran.value == "BJB (234335534)") {
      document.getElementById("pembayaranOutput").innerText = pembayaran.value;
    }  else if (pembayaran.value == "DANA (0872721421)") {
      document.getElementById("pembayaranOutput").innerText = pembayaran.value;
    }else {"NOT"}

   

    // Mengecek inputan status sesuai 2 pilihan: Dewasa dan Anak-anak
    if (status.value == "Dewasa") {
      document.getElementById("statusOutput").innerText = status.value;
    } else if (status.value == "Anak-anak") {
      document.getElementById("statusOutput").innerText = status.value;
    } else {
      alert("Pilihan status hanya untuk Dewasa dan Anak-anak saja!");
    }

    let harga = 0;
    let hargaPerTiket = document.getElementById("hargaTiket");

    // Mengecek antara status dan destinasi
    if (destinasi.value == "Jakarta, Indonesia" && status.value == "Dewasa") {
      harga = 200000;
      hargaPerTiket.innerText = harga + " (Dua Ratus Ribu)";
    } else if (destinasi.value == "Jakarta, Indonesia" && status.value == "Anak-anak") {
      harga = 100000;
      hargaPerTiket.innerText = harga + " (Seratus Ribu)";
    } else if (destinasi.value == "Buenos Aires, Argentina" && status.value == "Dewasa") {
      harga = 5000000;
      hargaPerTiket.innerText = harga + " (Lima Juta)";
    } else if (destinasi.value == "Buenos Aires, Argentina" && status.value == "Anak-anak") {
      harga = 4000000;
      hargaPerTiket.innerText = harga + " (Empat Juta)";
    } else if (destinasi.value == "Cape Town, Afrika Selatan" && status.value == "Dewasa") {
      harga = 8000000;
      hargaPerTiket.innerText = harga + " (Delapan Juta)";
    } else if (destinasi.value == "Cape Town, Afrika Selatan" && status.value == "Anak-anak") {
      harga = 7000000;
      hargaPerTiket.innerText = harga + " (Tujuh Juta)";
    } else if (destinasi.value == "Sydney, Australia" && status.value == "Anak-anak") {
      harga = 6000000;
      hargaPerTiket.innerText = harga + " (Enam Juta)";
    }  else if (destinasi.value == "Sydney, Australia" && status.value == "Dewasa") {
      harga = 7000000;
      hargaPerTiket.innerText = harga + " (Tujuh Juta)";
    } else if (destinasi.value == "Swiss, Switzerland" && status.value == "Anak-anak") {
      harga = 5000000;
      hargaPerTiket.innerText = harga + " (Lima Juta)";
    }  else if (destinasi.value == "Swiss, Switzerland" && status.value == "Dewasa") {
      harga = 7000000;
      hargaPerTiket.innerText = harga + " (Tujuh Juta)";
    } else if (destinasi.value == "Tokyo, Jepang" && status.value == "Anak-anak") {
      harga = 3000000;
      hargaPerTiket.innerText = harga + " (Tiga Juta)";
    }  else if (destinasi.value == "Tokyo, Jepang" && status.value == "Dewasa") {
      harga = 4000000;
      hargaPerTiket.innerText = harga + " (Empat Juta)";
    }

    // Mengecek inputan jumlah / tiket jika lebih dari 5 maka akan dikasih diskon, jika dibawah 5 tidak dapat diskon
    // Ubah dulu yang tipe data nya string menjadi number
    const convertToNumber = Number(jumlah.value);
    subtotal.value = harga * convertToNumber;
    document.getElementById("subtotalOutput").innerText = harga * convertToNumber;

    let discount = 0;
    if (convertToNumber >= 6) {
      discount = (subtotal.value / 100) * 15;
    } else if (convertToNumber <= 6) {
      discount = 0;
    }

    document.getElementById("jumlahOutput").innerText = convertToNumber;
    diskon.value = discount;
    document.getElementById("diskonOutput").innerText = discount;

    let totalPaid = subtotal.value - discount;
    total.value = totalPaid;
    document.getElementById("totalOutput").innerText = totalPaid;

    if (nama.value != "" || destinasi.value != "" || status.value != "" || jumlah.value != "" || pembayaran.value != "") {
      // Mengecek jika user memasukkan nilai 0 pada inputan jumlah tiket
      if (jumlah.value == 0) {
        alert("Jumlah tiket tidak boleh 0");
        cetakPesanan.classList.remove("tampil");
      } else {
        cetakPesanan.classList.add("tampil");
      }
    }
  }
});

// Menyeleksi bagian tombol dan menjalankan apabila tombol hapus di klik
const hapus = document.getElementById("hapus");
hapus.addEventListener("click", function () {
  // Menghapus bagian output pada html
  if (nama.value == "" && destinasi.value == "" && status.value == "" && jumlah.value == "" == "" && pembayaran.value ) {
    alert("Data masih kosong, apa yang mau dihapus?");
  } else if (nama.value != "" || destinasi.value != "" || status.value != "" || jumlah.value != ""  || pembayaran.value != "") {
    nama.value = "";
    destinasi.value = "";
    status.value = "";
    jumlah.value = "";
    tempat.value ="";
    maskapai.value = "";
    pembayaran.value= "";
    subtotal.value = "";
    diskon.value = "";
    total.value = "";
    cetakPesanan.classList.remove("tampil");
  }
});