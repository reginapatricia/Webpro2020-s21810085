/*
    Javascript Loop
*/

/*
5 loop pada java
1. for
2. for in
3. for of
4. while
5. do while
yang lebih sering dipake : for dan while
*/

//for
// for (let i=1; i=10; i++){
//     console.log(i);
// }

//for in
// const buku = {
//     judul : "Harry Potter and the Goblet of Fire",
//     pengarang : "J.K. Rowling",
//     tahun : 2000
// };
// for (x in buku){
//     console.log(x, ':', buku[x]);
// }

//for of
// const buku = ["Harry Potter and the Goblet of Fire", 
// "Harry Potter and the Order of Phoenix", 
// "Harry Potter and the half-blood prince"
// ];

// for(x of buku){
//     console.log(x);
// }

// //while
// let i = 1;      

// while (i<=10){              //kondisi benar dijalankan yang didalamnya
//     console.log(i);
//     i++;
// }

//do while

// let i=1;

// do{
//     console.log(i);
//     i++
// }while (i<=10);             //kondisinya ada diterakhir



/*
    conditional
*/

/*
2 cara menulis perintah pada conditional
1. if, else if, dan else
2. switch dan case
 */

 //1. if, else, dan else if

 let nilaiRegina = 96;

 if(nilaiRegina >80){
     console.log("SANGAT BAIK");
 }
 else if (nilaiRegina >= 60 && nilaiRegina<=80){
     console.log("BAIK");
 }
 else{
     console.log("JANGAN MENYERAH DAN COBA LAGI");
 }


 //2. switch dan case

 let seragamSekolah;
 let hari = "kamis";

 switch (hari){
    case "senin" :              //diperiksa casenya begitupun seterusnya
         seragamSekolah = "kemeja putih bawahan abu-abu";
         break;
    case "selasa" : 
         seragamSekolah ="kemeja putih bawahan abu-abu";
         break;
    case "rabu" :
         seragamSekolah = "kemeja batik bawahan putih";
         break;
    case "kamis" :
         seragamSekolah = "kemeja kokoh biru muda bawahan abu-abu";
         break;
    case "jumat" :
         seragamSekolah = "baju pramuka";
         break;
    default :
         seragamSekolah = "baju olahraga";
 }
 console.log(seragamSekolah);

 