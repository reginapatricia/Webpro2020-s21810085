/*
   Function


   contoh function : 
*/


    let a = 8;
    let b = 3;

    let luasA = a*a;
    let luasB = b*b;

    let total = luasA + luasB
    console.log(total);


/*
  function penjumlahan
*/

function penjumlahanDua(a,b){
    return a*a + b*b;
}

console.log(penjumlahanDua(8,3));  //8*8 = 64  3*3 = 9 -->64+9=73  
console.log(penjumlahanDua(10,5)); //10*10 = 100  5*5 = 25 -->125

function tambah (a,b){
    return a+b; //yang pertama
}
function kali (a,b){
    return a*b; //yang kedua
}

console.log(tambah(kali(5,2), kali (10,2)));

/*
    Function Declaration
*/

/*
    contoh :
    function penjumlahan (a,b){
        let total;
        total a+b;
        return total
    }
 */

