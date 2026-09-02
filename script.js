const mahasiswa = [
  {
    nama: "Mahen",
    umur: 20,
    jurusan: "Sistem Informasi",
    nilai: 85
  },
  {
    nama: "Rafi",
    umur: 20,
    jurusan: "Sistem Informasi",
    nilai: 75
  },
  {
    nama: "Ryan",
    umur: 20,
    jurusan: "Sistem Informasi",
    nilai: 90
  },
  {
    nama: "Herdi",
    umur: 20,
    jurusan: "Sistem Informasi",
    nilai: 80
  }
];

function tampilkanMahasiswa() {
  const output = document.getElementById("output");

  output.innerHTML = "";

  mahasiswa.forEach(function (mhs) {
    output.innerHTML += `
      <div>
        <h3>${mhs.nama}</h3>
        <p>Umur: ${mhs.umur}</p>
        <p>Jurusan: ${mhs.jurusan}</p>
        <p>Nilai: ${mhs.nilai}</p>
        <hr>
      </div>
    `;
  });
}

function hitungRataRata() {
  let total = 0;

  mahasiswa.forEach(function (mhs) {
    total += mhs.nilai;
  });

  const rataRata = total / mahasiswa.length;

  document.getElementById("output").innerHTML =
    `<h2>Rata-rata nilai: ${rataRata}</h2>`;
}