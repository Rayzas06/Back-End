/*// Membuat objek siswa1
const siswa1 = {
    nama: "Tono",
    usia: 20,
    nilai: [90, 85, 88]
};

// Membuat objek siswa2
const siswa2 = {
    nama: "Tini",
    usia: 22,
    nilai: [78, 82, 85]
};

// Menggabungkan kedua objek siswa menggunakan spread operator
const mergedStudent = {
    ...siswa1,
    ...siswa2,
    nilai: [...siswa1.nilai, ...siswa2.nilai]
};

// Menampilkan hasil penggabungan
console.log(mergedStudent);

const favData = {
    user: {
      id: 1,
      name: "Raymond",
      age: "15",
      favorites: {
        books: ["Hujan", "Why?", "Rembulan Bulan"],
        movies: ["Your Name", "Transformer"],
      },
    },
  };
  const {
    user: {
      name: namaPengguna,
      age: usia,
      favorites: { movies: [filmFavorit] },
    },
  } = favData;
  
  // Menampilkan hasil ekstraksi
  console.log("Nama pengguna:", namaPengguna);
  console.log("Usia:", usia);
  console.log("Film favorit:", filmFavorit);*/



 // Objek event
const event = {
    eventName: "Workshop KSM Android",
    date: "2024-10-10",
    attendees: ["Valtritz", "Mamat"]
};

// Fungsi untuk menambahkan peserta
function addAttendees(event, newAttendees) {
    const { eventName, date, attendees } = event;
    return {
        eventName,
        date,
        attendees: [...attendees, ...newAttendees]
    };
}

// Array peserta baru
const newAttendees = ["Remon", "Pak Vinsen"];

// Memanggil fungsi addAttendees
const updatedEvent = addAttendees(event, newAttendees);

console.log(updatedEvent);