/*
        Exercise 2
*/

const account = {
    name: "Regina",  //properti nama nilai regina
    expenses: [],
}

const addExpenses = function (description, amount){
    account.expenses.push({
        description : description,
        amount : amount  //object method (2 properti)
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