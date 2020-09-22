//var let const

// let nama= "regina";
// let nama = "patricia";

// console.log(nama);

/* scope dalam javascript 
1. function scope (var)
2. block scope
*/
// function tes(){
//     for (var i =0; i<10; i++){
//         console.log(i);         //agar tidak bisa diakses dari luar
//     }
// }
// tes();

// //IIFE : fungsi yang langsung dipanggil. fungsinya ada didalam kurung
// //contoh IIFE
(function tes(){
    for (var i =0; i<10; i++){
        console.log(i); 
    }
})()

// let i;
// for (let i = 0; i < 10; i++){
//     console.log(i);    //seperti contoh ini bisa diakses dari luar for
// }
// console.log(i);

const person = {
    firstName : "regina",
    lastName : "mailangkay",
    age : 19,
};

// console.log(
//     "halo nama saya "+person.firstName +
//     " " +person.lastName +
//     ". umur saya adalah "+person.age+" tahun."
// );

//dipastikan memakai cara yang dibawah

console.log(
    `halo nama saya ${person.firstName} ${person.lastName} dan berumur ${person.age}` 
);