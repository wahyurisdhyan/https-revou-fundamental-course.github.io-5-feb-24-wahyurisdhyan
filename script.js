function btnClickKonversi() {
    var inputField = document.getElementById("input-field").value;
    var resultField = document.getElementById("result-field");
    var keteranganField = document.getElementById("keterangan-field");
    var pesanError = document.getElementById("pesanError");
    var labelInput1 = document.getElementById("labelInput1");
    var labelInput2 = document.getElementById("labelInput2");

    if (inputField === "") {
        pesanError.textContent = "Input tidak boleh kosong!";
        resultField.value = "";
        keteranganField.value= "";
        return; // Hentikan proses lebih lanjut
    } else {
        pesanError.textContent = ""; // Hapus pesan error jika input tidak kosong
    }

    if (labelInput1.textContent.includes("Celcius")) {
        // Periksa apakah nilai yang dimasukkan adalah angka
        if (!isNaN(inputField)) {
        // Lakukan perhitungan (2 kali angka yang diinput ditambah 40)
        var hasil = (parseInt(inputField) * 9/5) + 32;
        // Tampilkan hasil perhitungan di kolom hasil
        resultField.value = hasil.toFixed(2);
        keteranganField.value = "(" + inputField + " * 9/5) + 32";
        } else {
        // Jika nilai yang dimasukkan bukan angka, beri nilai kosong pada kolom hasil
        pesanError.textContent = "Input harus berupa angka!";
        resultField.value = "";
        keteranganField.value = ""; 
        }
    } else {
        if (!isNaN(inputField)) {
            // Lakukan perhitungan (2 kali angka yang diinput ditambah 40)
            var hasil = (parseInt(inputField) - 32) * 5/9;
            // Tampilkan hasil perhitungan di kolom hasil
            resultField.value = hasil.toFixed(2);
            keteranganField.value = "(" + inputField + " - 32) * 5/9";
        } else {
            // Jika nilai yang dimasukkan bukan angka, beri nilai kosong pada kolom hasil
            pesanError.textContent = "Input harus berupa angka!";
            resultField.value = "";
            keteranganField.value = ""; 
        }
    }
    
}

function btnClickReset() {
    var inputField = document.getElementById("input-field");
    var resultField = document.getElementById("result-field");
    var keteranganField = document.getElementById("keterangan-field");
inputField.value= "";
resultField.value= "";
keteranganField.value= "";
}

function btnClickReverse() {
    var labelInput1 = document.getElementById("labelInput1");
    var labelInput2 = document.getElementById("labelInput2");
 
    if (labelInput1.textContent.includes("Celcius")) {
        labelInput1.textContent = "Fahrenheit \u00B0F:";
        labelInput2.textContent = "Celcius \u00B0C:";
    } else {
        labelInput1.textContent = "Celcius \u00B0C:";
        labelInput2.textContent = "Fahrenheit \u00B0F:";
    }
}
btnClickReverse(true); // Kondisi X terjadi, maka fungsi baru dijalankan
btnClickReverse(false); // Kondisi X tidak terjadi, maka fungsi lama dijalankan

// Mendapatkan elemen subjudul dan paragraf
var caraKonversi = document.getElementById("caraKonversi");
var teksCaraKonversi = document.getElementById("teksCaraKonversi");

// Menambahkan event listener ke subjudul
caraKonversi.addEventListener("click", function() {
    // Memeriksa apakah paragraf sedang tersembunyi
    if (teksCaraKonversi.classList.contains("hidden")) {
        // Jika tersembunyi, tampilkan paragraf
        teksCaraKonversi.classList.remove("hidden");
    } else {
        // Jika sedang ditampilkan, sembunyikan paragraf
        teksCaraKonversi.classList.add("hidden");
    }
});