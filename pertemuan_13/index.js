/*
    rest anda spread operator
*/

//rest --> digunakan untuk parameter fungsi untuk mengubah menjadi array

// const hitung = (a,b,c,d,e,f,g) => {
//     const angka =[a,b,c,d,e,f,g];
//     let total = 0;
//     for(let i=0; i; i++){
//         total = total +angka[i];
//     }
//     return total;
// };                          //lebih disederhanakan dengan rest

// const hitung = (...angka)=>{ //angka disini adalah array
//     let total =0;
//     angka.forEach((el) =>{
//         total = total +el;
//     });
//     return total;
// }

// console.log(hitung(1,2,3,4,5,6,7,8,9,10));

//SPREAD -->bisa untuk array dan untuk menambahkan beberapa objek sekaligus

//duplikasi array
// const angka = [1,2,3,4,5];
// const angka2=[...angka];    //menduplikasi array
// const angka2=angka;     //ini hanya copy referensi array saja

// angka[0]=10;
// console.log(angka);
// console.log(angka2);

// console.log(angka);
// console.log(...angka);  //memecah array


//menggabungkan array
// const angka1 = [1,2,3,4,5];
// const angka2=[6,7,8,9,10];
// const angka3=[12,13];

// const gabung = angka1.concat(angka2);
// console.log(gabung);

// const gabung6 = [...angka1,...angka2,11,...angka3]; //bisa menyisipkan angka(lebih fleksibel)
// console.log(gabung6);


let orang ={
    nama: "gina",
    umur:19,
};
// orang.pekerjaan='mahasiswa';
// orang.pendidikan='kuliah';

orang = {...orang, pekerjaan :"mahasiswa", pendidikan :"kuliah"};
console.log(orang);                 //untuk objek, bisa menambah

