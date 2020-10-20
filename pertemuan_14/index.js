/* 
    Destrukturisasi
*/


//destrukturisasi Array
// let hewan = ["kelinci", "anjing", "panda"];

// let hewan1 = hewan[0];
// let hewan2 = hewan[1];
// let hewan3 = hewan[2];

// console.log(hewan1); 
// console.log(hewan2); 
// console.log(hewan3); 


//ES6
// let hewan =["kelinci", "anjing", "panda"];

// //menggunakan destrukturisasi array
// let [hewan1, hewan2, hewan3] = hewan;
// console.log(hewan1); 
// console.log(hewan2); 
// console.log(hewan3); 

//memilih element mana yang tidak akan di simpan
// menggunakan "koma yang kosong" untuk melewati
// let [namaDepan, , namaBelakang, ,alamat] =['jhon','mikey','smith','25 tahun','balikpapan'];
// console.log(namaDepan);
// console.log(namaBelakang);
// console.log(alamat);

//menukar nilai 2 variabel atau lebih
// let a =20;
// let b = 30;
// [a,b]=[a,b];


//Destrukturisasi Objek
//ES5

// let orang = {
//     nama: "Jhon",
//     umur: 20,
//     sudahMenikah: false
//   };
  
//   let nama = orang.nama;
//   let umur = orang.umur;
//   let sudahMenikah = orang.sudahMenikah;
  
//   console.log(nama);
//   console.log(umur);
//   console.log(sudahMenikah);

//ES6
// let biodata = {
//     nama: "smith",
//     umur: 22,
//     sudahMenikah: false
//   };
  
//   // Destrukturisasi Objek
//   let { nama, umur, statusMenikah } = biodatah;
  
//   console.log(nama); 
//   console.log(umur);
//   console.log(statusMenikah);


//   let {
//     namaProperti1: namaVariabelBaru1,
//     namaProperti2: namaVariabelBaru2
//   } = namaObjek;
//   let orang = {
//     name: "smith",
//     age: 22,
//   };
  
//   // buat variabel nama berisi nilai dari properti name pada orang
//   // buat variabel age berisi nilai dari properti umur pada orang
//   let { name: nama, age: umur } = orang;
  
//   console.log(nama); 
//   console.log(umur); 
  
//Destrukturisasi objek bertingkat
// let murid = {
//     kelas: "11",
//     nama: ["jhon", "smith", "james"],
//     prestasi: {
//       olahraga: "juara 1",
//       akademik: "juara 2"
//     }
//   };
  
//   let {
//     prestasi: { olahraga }
//   } = murid;
  
//   console.log(olahraga);





