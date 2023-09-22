function hitungVolume() {
    // Menggunakan id "inputVariable" sesuai dengan input yang ada di HTML
    const inputSisiElement = document.getElementById("inputVariable"); 
    const hasilPerhitunganElement = document.getElementById("hasilPerhitungan");

    const sisi = parseFloat(inputSisiElement.value);

    if (isNaN(sisi) || sisi <= 0) {
        hasilPerhitunganElement.innerText = "Masukkan panjang sisi yang valid (bilangan positif).";
    } else {
        const volume = sisi * sisi * sisi;
        hasilPerhitunganElement.innerText = `Volume kubus dengan sisi ${sisi} adalah ${volume}`;
    }

    // Menambahkan penanganan angka negatif
    if (sisi < 0) {
        alert("Tidak dapat melakukan perhitungan dengan angka negatif.");
    }
}
