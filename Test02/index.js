//Bagian 1 (Ubahlah syntax ES5 berikut ke dalam ES6)

// 1. 
// const calculateAge = (birthYear)=> {
// 	return 2019 - birthYear;
// }
 
// const yearUntilRetirement = (object)=>{
// 	var age = calculateAge(object.year);
// 	var retirement = 60 - age;
   
// 	if(retirement > 0){
//     	console.log(`${object.firstName}  retires in  ${retirement} years`);
// 	} else {
//     	console.log(`${object.firstName}  is already retired`);
// 	}
// }
 
// yearUntilRetirement({year: 1987, firstName: 'John'});

//2.

// const addNumber = (a, b, c, d, e, f, g) => {
//     let numbers = [a, b, c, d, e, f, g];
//     let sum = 0;
//     let i = numbers.map(item=>{
//       return sum+=item
//     })
//     console.log(i);
// }
// addNumber(1,2,3,4,5,6,7);

//3.

// let phi = 3.14;
// let power = 2;
// let radius = 0;
 
// let calculateArea = (radius, power) => {
//   return phi * Math.pow(radius, power);
// };
 
// radius = 21;
// let area21 = calculateArea(radius, 2);
 
// radius = 7;
// let area7 = calculateArea(radius, 2);
 
// console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);


//4. 

// const makeAjaxRequest = (url = 'www.google.com', method = 'GET') => {
//     if (!method) {
//         method = 'GET';
//    }
//    console.log(url, method);
// }

// makeAjaxRequest();


//Bagian 2


//1. Buatlah sebuah function

// const warnaKesukaan = ( warna= "putih" ) => {
//     return "Warna kesukaan saya adalah " + warna;
// }
// console.log(warnaKesukaan());



//2. Gunakan spread operator untuk menggabungkan

// let namaBuah1 = ['apel', 'mangga'];
// let namaBuah2 = ['sirsak', 'semangka'];

// let semuaNamaBuah = namaBuah1.concat(namaBuah2);
// console.log(semuaNamaBuah);


const namaBuah1 = ['apel', 'mangga'];
const namaBuah2 = ['sirsak', 'semangka'];

const semuaNamaBuah = namaBuah1.concat(namaBuah2);
console.log(semuaNamaBuah);