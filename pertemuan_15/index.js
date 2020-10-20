//penjelasan dikelas

/*
    materi dikelas --> destructuring
    untuk memecah item/properti pada array/object ke dalam variabel yang berbeda
 */

 //1. Array
//  const colors = ["merah","kuning", "hijau"];

//  let satu =colors[0];
//  let dua = colors[1];
//  let tiga =colors[2];

//--disederhanakan
// let [satu, dua , tiga] = colors;
//  console/log(satu, suda, tiga);

//  let [satu,dua,tiga]=colors;
//  console.log(satu,dua);

//  let [satu, , tiga] = colors;
//  console.log(satu,tiga);

//  let [satu,dua,tiga,empat ="biru"] = colors;
//  console.log(satu, dua,tiga,empat);


 //2.object

//  const user ={
//      name : "regina",
//      gender:"male",
//      age :19,
//  };

// //  let name = user.name;
// //  let gender = user.gender;
// //  let age = user.age;

// //--disederhanakan
// let{name,gender,age}= user;

//  console.log(name,gender,age);

// let {name, gender, age, born = "balikpapan"}=user;
// console.log(name,gender,age,born);

//jika ingin ambil nama dan umur saja, tidak perlu dipisahkan lagi dengan koma

// let {name,age}=user;
// console.log(name,age);

// const display = (props) =>{
//     console.log(`nama saya adalah ${props.name}. umur saya adalah ${props.age}`);
// };
// display(user);

//--disederhanakan
// let {name,age}=user;
// console.log(name,age);

// const display = ({name,age}) =>{
//     console.log(`nama saya adalah ${name}. umur saya adalah ${age}`);
// };
// display(user);


//3.array object

// const users =[
//     { id :1, name :"doni"},
//     { id :2, name:"regina"},
// ];

// // let [user1,user2]=users;
// // console.log(user1,user2);

// //hanya ingin ambil id2
// let[,{name}]=users;
// console.log(name);


//4. kombinasi dengan rest operator
const colors = ["merah", "kuning", "hijau", "biru"];

let [satu, ... lainnya]=colors;

console.log(satu);
console.log(lainnya);