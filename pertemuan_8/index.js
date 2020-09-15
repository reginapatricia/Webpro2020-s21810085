/*
        Exercise 2
*/

const account = {
    name: "Regina",
    expenses: [],
}

const addExpenses = function (desctiprion, amount){
    account.expenses.push({
        description : desctiprion,
        amount : amount
    });
};

const getAccountSummary = function (){
    let totalExpenses = 0;
    account.expenses.forEach(function(el){
        totalExpenses = totalExpenses + el.amount
    });
    return "total pengeluaran dari " + account.name + " adalah Rp. " +totalExpenses;
};

addExpenses('buku', 99000);
addExpenses('ongkir', 60000);
console.log(getAccountSummary());