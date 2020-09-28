/*
    ARROW 
*/

//fungsi dengan parameter 
const operasiPenjumlahan = (bil1, bil2)=>{
    const hasil =bil1+bil2;
    return hasil;
};

console.log(operasiPenjumlahan(5,3));

// fungsi yang tidak memiliki parameter

const jenisAnjing = () =>{
    const anjing =["bulldog", "poodle", "golden"];
    return anjing[Math.floor(Math.random()*(anjing.length))];
}
console.log(jenisAnjing()); // outputnya hasil random


//implicit return nilai

// function nickname(nama){
//     return`Hallo${nama}`;
// }
// console.log(nickname(' gina'));

//cara yang singkat 
const nickname = (nama)=>`hallo ${nama}`;
console.log(nickname(' gina'));