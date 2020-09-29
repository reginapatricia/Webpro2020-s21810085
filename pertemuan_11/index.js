/*
    ARROW 
*/

//fungsi dengan parameter 
// const operasiPenjumlahan = (bil1, bil2)=>{
//     const hasil =bil1+bil2;
//     return hasil;
// };

// console.log(operasiPenjumlahan(5,3));

// // fungsi yang tidak memiliki parameter

// const jenisAnjing = () =>{
//     const anjing =["bulldog", "poodle", "golden"];
//     return anjing[Math.floor(Math.random()*(anjing.length))];
// }
// console.log(jenisAnjing()); // outputnya hasil random


// //implicit return nilai

// // function nickname(nama){
// //     return`Hallo${nama}`;
// // }
// // console.log(nickname(' gina'));

// //cara yang singkat 
// const nickname = (nama)=>`hallo ${nama}`;
// console.log(nickname(' gina'));





/*
        penjelasan dikelas mengenai Arrow
*/

// const calcAge = function (year){
//     return 2020 - year;
// };

// console.log (calcAge(2000));


// const calcAge = year =>{   //tidak usah pakai kurung jika hanya satu parameter
//     return 2020 - year;  //fungsinya dihapus lalu tambah tanda panah
// };

// console.log (calcAge(2000));

//multiple argument
// const calcAge = (tahunLahir, tahunSekarang)=> {
//     const x;
//     return tahunSekarang - tahunLahir;
// };

// //no argument dengan implicit return value
// const calcAge=()=> 2020-1992;

// console.log(calcAge());


// const years=[1990,1995,1997,2000];

// const calcAge5 = years.map(function(el) {
//     return 2020-el;
// });

// const calcAge3 = years.map((el)=> 2020 - el);

// console.log (calcAge3)

//default Parameter

// const calcAge = (birthYear, currentYear = 2020) => currentYear -birthYear;

// console.log (calcAge(2000, 2021));


//exercise --> convert to ES6 syntax

// function yearUntilRetirement (year, firstName){
//     var age = 28;
//     var retirement = 65 - age;
//     if (retirement > 0){
//         console.log(firstName + "retired in" + retirement +" years");
//      }
//      else {
//          console.log(firstName + " is already retired.");
//      }
// }

//ES6


const yearUntilRetirement = (firstName, year) =>{
    var age = 20;
    var retirement = 65 - age;
    if (retirement > 0 ){
        console.log(`${firstName} retired in ${retirement} years`);
    }
    else{
        console.log(`${firstName} is already retired`);
    }
}
console.log(yearUntilRetirement('gina'));
