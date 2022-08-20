"use strict"
// CONSTRUCTOR FUNCTION
let accountsnumberarr = [];
let accountspinarr = [];

function BankAccount(customerName, mail, num) {
    this.customerName = customerName;
    this.mail = mail;
    this.accountNumber = Date.now();

    this.num = num;
    var ranarr = [];
    while (ranarr.length < 6) {
        var r = Math.floor(Math.random() * 10);
        if (ranarr.indexOf(r) === -1) ranarr.push(r);
    }
    this.password = ranarr.join("");
    getvalues(this.accountNumber, this.password)
    showbox(this.accountNumber, this.password);
    let y = new BalanceOfAccount(0);

}
//Function to get values in array of pin and number from BankAccount
function getvalues(num, pin) {
    accountsnumberarr.push(+num);
    accountspinarr.push(+pin);
    console.log(accountsnumberarr, accountspinarr);
}



// CREATING FORM BOXES ON CLICK OF CREATE BUTTON THROUGH THIS FUNCTION
var create_btn = document.getElementById("create_btn");
create_btn.addEventListener("click", function() {
    create_btn.disabled = "true";
    var create = document.getElementById("create");

    var inputName = document.createElement("input");
    inputName.setAttribute("type", "name");
    inputName.setAttribute("id", "name");
    inputName.setAttribute("class", "inputs");
    inputName.setAttribute("placeholder", "NAME");
    create.appendChild(inputName);

    var inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("id", "email");
    inputEmail.setAttribute("class", "inputs");
    inputEmail.setAttribute("placeholder", "EMAIL");
    create.appendChild(inputEmail);

    var inputNum = document.createElement("input");
    inputNum.setAttribute("id", "num");
    inputNum.setAttribute("type", "tel");
    inputNum.setAttribute("class", "inputs");
    inputNum.setAttribute("pattern", "[0-9]{4}-[0-9]{7}");
    inputNum.setAttribute("placeholder", "PHONE NUMBER");
    create.appendChild(inputNum);

    var submitbtn = document.createElement("button");
    submitbtn.setAttribute("type", "submit");
    submitbtn.setAttribute("class", "btns");
    submitbtn.setAttribute("onclick", "submit(this)");
    submitbtn.innerHTML = "Submit";
    submitbtn.style.cursor = "pointer";

    create.appendChild(submitbtn);


})
var accounts = [];
var accountname;
var usernumber;
var accountmail;
var mailarr = [];
var accnumarr = [];
var pinarr = [];
var i = 0;
// SUBMITTING CREDENTIALS THROUGH THIS FUNCTION
function submit(e) {


    if (e.parentNode.childNodes[3].value !== "" && e.parentNode.childNodes[4].value !== "" && e.parentNode.childNodes[5].value !== "") {
        if (mailarr.includes(e.parentNode.childNodes[4].value)) {
            alert("Email already exist");
        } else {
            accountname = e.parentNode.childNodes[3].value;
            accountmail = e.parentNode.childNodes[4].value;
            usernumber = +(e.parentNode.childNodes[5].value);
            console.log(accountmail);
            let x = new BankAccount(accountname, accountmail, usernumber);

            accounts.push(x);
            console.log(accounts);
            mailarr.push(accounts[i].mail);
            accnumarr.push(accounts[i].accountNumber);
            pinarr.push(+(accounts[i].password));
            console.log(`THIS IS EMAIL ${mailarr[i]}`);
            e.parentNode.childNodes[3].value = "";
            e.parentNode.childNodes[4].value = "";
            e.parentNode.childNodes[5].value = "";
            i++;
        }
    } else {
        alert("Please Enter All Values Correctly");
    }


}
// SHOWING ACCOUNT NUMBER AND PASSWORD THROUGH THIS FUNCTION
function showbox(accnumber, password) {
    var create = document.getElementById("create");
    var div = document.createElement("div");
    div.setAttribute("class", "showbox1");
    create.appendChild(div);

    var ul = document.createElement("ul");
    ul.setAttribute("id", "listbox");

    var li1 = document.createElement("li");
    li1.setAttribute("class", "listelements");
    var text1 = document.createElement("p");
    text1.innerHTML = `Your Account Number is ${accnumber}`;

    var li2 = document.createElement("li");
    li2.setAttribute("class", "listelements");
    var text2 = document.createElement("p");
    text2.innerHTML = `Your Account Code is ${password}`;
    li1.appendChild(text1);
    li2.appendChild(text2);
    ul.appendChild(li1);
    ul.appendChild(li2);
    div.appendChild(ul)
}

// ACCOUNT BALANCE CONSTRUCTOR FUNCTION
function BalanceOfAccount(balance = 0) {
    this.balance = balance;
    getBalance(this.balance);
}
// getting balance from function
var bal = [];

function getBalance(balance) {
    bal.push(balance);
}



// DEPOSIT BUTTON FUNCTIONALITY
var deposit_btn = document.getElementById("dep_btn");
deposit_btn.addEventListener("click", function() {
    deposit_btn.disabled = "true";
    var deposit = document.getElementById("dep");

    var inputaccnum = document.createElement("input");
    inputaccnum.setAttribute("type", "number");
    inputaccnum.setAttribute("id", "accnum");
    inputaccnum.setAttribute("class", "inputs");
    inputaccnum.setAttribute("placeholder", "Provide Your Account Number");
    deposit.appendChild(inputaccnum);

    var inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "password");
    inputEmail.setAttribute("id", "password");
    inputEmail.setAttribute("class", "inputs");
    inputEmail.setAttribute("placeholder", "Provide Your Pin Code");
    deposit.appendChild(inputEmail);

    var submitdep = document.createElement("button");
    submitdep.setAttribute("type", "submit");
    submitdep.setAttribute("class", "btns");
    submitdep.setAttribute("onclick", "submitdep(this)");
    submitdep.innerHTML = "Submit";
    submitdep.style.cursor = "pointer";
    deposit.appendChild(submitdep);
});
// Submitting Deposit's credentials

let indexnum;

function submitdep(e) {


    if (e.parentNode.childNodes[3].value !== "" && e.parentNode.childNodes[4].value !== "") {
        if (accnumarr.indexOf(+(e.parentNode.childNodes[3].value)) == pinarr.indexOf(+(e.parentNode.childNodes[4].value))) {
            // to show previous balance
            indexnum = accnumarr.indexOf(+(e.parentNode.childNodes[3].value));


            var deposit = document.getElementById("dep");
            var div = document.createElement("div");
            div.setAttribute("class", "showbox1");
            div.setAttribute("id", "depositbox");
            deposit.appendChild(div);
            let pbalancebox = document.createElement("p");
            pbalancebox.setAttribute("class", "boxes")
            let textbalance = document.createTextNode(`Your Previous Balance is ${bal[indexnum]}`);
            pbalancebox.appendChild(textbalance);
            div.appendChild(pbalancebox);

            let balancebox = document.createElement("input");
            balancebox.setAttribute("class", "boxes");
            balancebox.setAttribute("class", "inputs");
            balancebox.setAttribute("placeholder", "DEPOSIT");
            div.appendChild(balancebox);

            let submitbalance = document.createElement("button");
            submitbalance.setAttribute("type", "submit");
            submitbalance.setAttribute("class", "btns");
            submitbalance.setAttribute("onclick", "submitbalance(this)");
            submitbalance.innerHTML = "Submit";
            submitbalance.style.cursor = "pointer";
            div.appendChild(submitbalance);

        } else {
            alert("NOT EXIST");

        }
    } else {
        alert("Please Enter All Values Correctly");
    }


}
// Adding money
function submitbalance(e) {
    bal[indexnum] += +(e.parentNode.childNodes[1].value);
}


// WITHDRAW BUTTON FUNCTIONALITY
var withdraw_btn = document.getElementById("wdrw_btn");
withdraw_btn.addEventListener("click", function() {
    withdraw_btn.disabled = "true";
    var withdraw = document.getElementById("wdrw");

    var inputaccnum = document.createElement("input");
    inputaccnum.setAttribute("type", "number");
    inputaccnum.setAttribute("id", "accnum");
    inputaccnum.setAttribute("class", "inputs");
    inputaccnum.setAttribute("placeholder", "Provide Your Account Number");
    withdraw.appendChild(inputaccnum);

    var inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "password");
    inputEmail.setAttribute("id", "password");
    inputEmail.setAttribute("class", "inputs");
    inputEmail.setAttribute("placeholder", "Provide Your Pin Code");
    withdraw.appendChild(inputEmail);

    var submitdep = document.createElement("button");
    submitdep.setAttribute("type", "submit");
    submitdep.setAttribute("class", "btns");
    submitdep.setAttribute("onclick", "submitwdrw(this)");
    submitdep.innerHTML = "Submit";
    submitdep.style.cursor = "pointer";
    withdraw.appendChild(submitdep);
});
// Submitting withdraw's credentials



function submitwdrw(e) {


    if (e.parentNode.childNodes[3].value !== "" && e.parentNode.childNodes[4].value !== "") {
        if (accnumarr.indexOf(+(e.parentNode.childNodes[3].value)) == pinarr.indexOf(+(e.parentNode.childNodes[4].value))) {
            // to show previous balance
            indexnum = accnumarr.indexOf(+(e.parentNode.childNodes[3].value));


            var withdraw = document.getElementById("wdrw");
            var div = document.createElement("div");
            div.setAttribute("class", "showbox1");
            div.setAttribute("id", "withdrawbox");
            withdraw.appendChild(div);
            let pbalancebox = document.createElement("p");
            pbalancebox.setAttribute("class", "boxes")
            let textbalance = document.createTextNode(`Your Previous Balance is ${bal[indexnum]}`);
            pbalancebox.appendChild(textbalance);
            div.appendChild(pbalancebox);

            let balancebox = document.createElement("input");
            balancebox.setAttribute("class", "boxes");
            balancebox.setAttribute("class", "inputs");
            balancebox.setAttribute("placeholder", "withdraw");
            div.appendChild(balancebox);

            let submitbalance = document.createElement("button");
            submitbalance.setAttribute("type", "submit");
            submitbalance.setAttribute("class", "btns");
            submitbalance.setAttribute("onclick", "subtractbalance(this)");
            submitbalance.innerHTML = "Withdraw";
            submitbalance.style.cursor = "pointer";
            div.appendChild(submitbalance);

        } else {
            alert("NOT EXIST");

        }
    } else {
        alert("Please Enter All Values Correctly");
    }


}
// Subtracting money
function subtractbalance(e) {
    bal[indexnum] -= +(e.parentNode.childNodes[1].value);
}