let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', addFoodIncome);

let addBtn2 = document.getElementById("addBtn2");
addBtn2.addEventListener('click', addSavingsIncome);

let addBtn3 = document.getElementById("addBtn3");
addBtn3.addEventListener('click', addbillsincome);
let savings = 10;
let food = 10;
let bills = 10;

let savingamount;
let foodamount;
let billamount;


function addSavingsIncome(event){
    event.preventDefault();
    let savingname = document.getElementById("savingname").value;
    let savingamount = document.getElementById("savingAmount").value;
    let newDiv = document.createElement("div");
    newDiv.innerHTML = savingname + " " + savingamount;

    savings += parseInt(savingamount);

    let parent = document.getElementById("ledger");
    parent.appendChild(newDiv);
    drawChart();

    return savingamount;
}

function addFoodIncome(event){
    event.preventDefault();
    let foodname = document.getElementById("foodname").value;
    let foodamount = document.getElementById("foodAmount").value;

    let newDiv = document.createElement("div");
    newDiv.innerHTML = foodname + " " + foodamount;
    food += parseInt(foodamount);

    let parent = document.getElementById("food");
    parent.appendChild(newDiv);
    drawChart();

    return foodamount;
   
}
function addbillsincome(event){
    event.preventDefault();
    let billname = document.getElementById("billname").value;
    let billamount = document.getElementById("billAmount").value;

    let newDiv = document.createElement("div");
    newDiv.innerHTML = billname + " " + billamount
    bills += parseInt(billamount);

    let parent = document.getElementById("bills");
    parent.appendChild(newDiv);
    drawChart();
    return billamount;
}

function addAmmount(){
    const total = document.getElementById("billAmount").value; + document.getElementById("foodAmount").value; + document.getElementById("savingAmount").value;;
    console.log(total);
}
