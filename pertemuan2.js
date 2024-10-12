const daftarBuku = [
    {
        judul: "Belajar JavaScript",
        penulis : "John Doe",
        penerbit: "Gramedia",
        genre: "Pendidikan" 
    },
    {
        judul: "Petualangan si Kancil",
        penulis: "Budi Santoso",
        penerbit: "Erlangga",
        genre: "Cerita Anak"
    },
    {
        judul: "Kotlin untuk Pemula",
        penulis: "Siti Aminah",
        penerbit: "Gramedia",
        genre: "Teknologi"
    },
    {
        judul: "Pendidikan Karakter",
        penulis: "Rina Yulia",
        penerbit: "Pustaka Cendekia",
        genre: "Sosial"

    },
    {
        judul: "Menguasai Algoritma",
        penulis: "David Smith",
        penerbit: "Oxford University Press",
        genre: "Teknologi"

    },
];

daftarBuku.push({
    judul: "Bahasa Indonesia untuk Penulis",
    penulis: "Eko Prasetyo",
    penerbit: "Balai Pustaka",
    genre: "Bahasa"
})
/*console.log("Daftar buku setelah  ditambahkan buku baru: ");
console.log(daftarBuku)*/

console.log("Daftar buku yang diterbitkan oleh Gramedia:");
daftarBuku
    .filter(buku => buku.penerbit === "Gramedia")
    .forEach(buku => console.log(`- ${buku.judul} oleh ${buku.penulis}`));



/*const idola =   {
    nama : "Reggie Prabowo Wongkar",
    tempatLahir : "Manado",
    pekerjaan : "Youtuber",
    umur : 36,
    statusAktif :  true,
};

const infoIdola = `Saya memiliki idola yang bernama ${idola.nama} yang lahir di ${idola.tempatLahir} dan bekerja sebagai ${idola.pekerjaan} dan berumur ${idola.umur} tahun.`;
console.log(infoIdola); 

function permainanKecil(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] % 3 !== 0){
            console.log(array[i]);

        }
    }
}
const array1 = [1,4,7,2,8,9,3,0];
const array2 = [34,6,87,2,9,0,3];
const array3 = [-9,8,0,12,5,,9,3];

console.log("Hasil untuk array1: ");
permainanKecil(array1);

console.log("Hasil untul array2: ");
permainanKecil(array2);

console.log("Hasil untuk array3: ");
permainanKecil(array3);*/



