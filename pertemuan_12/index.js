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
