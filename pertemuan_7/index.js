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
const buku = ["Harry Potter and the Goblet of Fire", 
"Harry Potter and the Order of Phoenix", 
"Harry Potter and the half-blood prince"
];

for(x of buku){
    console.log(x);
}

//while
let i = 1;      

while (i<=10){              //kondisi benar dijalankan yang didalamnya
    console.log(i);
    i++;
}

//do while

// let i=1;

// do{
//     console.log(i);
//     i++
// }while (i<=10);             //kondisinya ada diterakhir