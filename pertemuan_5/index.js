/* 
        
    ARRAY 

*/

/*
//cara mendeklarasikan array
let angka =[1,2,3,4,5,6,7,8];
console.log(angka);
let buah = ["mangga","apel", "pir" ];
console.log(buah);
*/

/*
let arr =["text", 1, true];
console.log(arr);

let myFunc = function(){
    return "Hello Array";
}

let arr2=["text", 1, true, myFunc(), [1,2,3,4,5]];

//mengakses element dalam array
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2[4][2]);

console.log(typeof arr2);
console.log(arr2.length);
*/



//method pada array
//1. length
//2.toString (mengubah array menjadi string)
let mhs = ["john", "bob", "jane", "peter"];
console.log(mhs.toString());

//3. join

console.log(mhs.join(" - "))




//4. push, pop, unshift, shift
// push untuk menambahkan element dibelakangnya
 
mhs.push("mayrra");
mhs.push ("regina");
console.log(mhs.join (" - "));

//pop untuk menghapus
mhs.pop();
mhs.pop();
console.log(mhs.join (" - "));

//unshift untuk menambahkan element didepan

mhs.unshift("regina");
console.log(mhs.join (" - "));

//shit untuk menghapus yang paling depan

mhs.shift();
console.log(mhs.join (" - "));



/*
5. concat
let buahh = ["mangga", "apel", "anggur"];
let sayur = ["kangkung", "bayam", "buncis"];

let makanan = buahh.concat(sayur);
console.log(makanan);

*/

/*
6. splice dan slice
splice untuk menambahkan element diantara element yang ada
let buah =["pisang","mangga", "apel", "jeruk"];
buah.splice(2, 0, "melon","semangka");
console.log(buah.join (" - "));

slice untuk mengambil element untuk ditaro di array baru

let buah2 = buah.slice(0, 3);
console.log(buah2.join (" - "));

*/

/*
7.forEach dan map
forEach

let angka = [1,2,3,4,5,6,7,8];
angka.forEach(function(el){
    console.log(el);            //callback function
})


map

let angka = [1,2,3,4,5,6,7,8];
angka.map(function(el){
    console.log(el);
});

//forEach tidak mengembalikan array
//kalo map bisa mengembalikan data berupa array
let angka2 = angka.map(function(el){
    return el;
});

console.log(angka2);

*/

/*
8.sort untuk mengurutkan

let angka=[1,2,5,3,7,8];
let mhs=["john", "bob", "erick"];
mhs.sort();
console.log(mhs);
angka.sort(function(a,b){  
    return b - a;
});
console.log(angka);
*/



//9.filter untuk pencarian element element dan dikembalikan dalam bentuk array

let angka = [1,100,2,20,5,3,7,8];

let angka2 = angka.filter(function(el){
    return el>5;
});

console.log(angka2);


