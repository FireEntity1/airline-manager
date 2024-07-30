var amt_q400 = 1
var amt_a320 = 0
var amt_a350 = 0
var amt_747 = 0
var maintenanceM = 1.5
var maintainCost = 0

const q400_cost = 27000000
const a320_cost = 100000000
const a350_cost = 366000000
const b747_cost = 418000000

var money = 25000000

window.onload = function() {
    update();
  };

function buyPrompt(code, amt = 0) {
    code = prompt("ENTER AIRCRAFT CODE:");
    code = code.toUpperCase()
    switch(code) {
        case "Q400":
            amt = prompt("How many?");
            if (money >= q400_cost*amt) {
            alert(amt + " Q400 bought!");
            amt = Number(amt)
            amt_q400 += amt
            money -= q400_cost*amt
            update()
            break;}
            else {
                alert("Err. Low funds")
                break;
            }
        case "A320":
            amt = prompt("How many?");
            if (money >= a320_cost*amt) {
            alert(amt + " A320 bought");
            amt = Number(amt)
            amt_a320 += amt
            money -= a320_cost*amt
            update()
            break;}
            else {
                alert("Err. Low funds")
                break;
            }
        case "A350":
            amt = prompt("How many?");
            if (money >= a350_cost*amt) {
            alert(amt + " A350 bought!");
            amt = Number(amt)
            amt_a350 += amt
            money -= a350_cost*amt
            update()
            break;}
            else {
                alert("Err. Low funds")
                break;
            }
        case "B747":
            amt = prompt("How many?");
            if (money >= b747_cost*amt) {
            alert(amt + " 747 bought!");
            amt = Number(amt)
            amt_747 += amt
            money -= b747_cost*amt
            update()
            break;}
            else {
                alert("Err. Low funds")
                break;
            }
        default:
            alert("Err. Aircraft code not found")
    }
}

setInterval(flyQ400, 2500);
setInterval(flyA320, 7500);
setInterval(fly747, 15000);
setInterval(flyA350, 25000);
setInterval(maintenance, 30000)

function flyQ400() {
    money += amt_q400 * 500000 * maintenanceM
    update()
}

function flyA320() {
    money += amt_a320 * 2000000  * maintenanceM
    update()
}

function fly747() {
    money += amt_747 * 50000000  * maintenanceM
    update()
}
function flyA350() {
    money += amt_a350 * 100000000  * maintenanceM
    update()
}

function maintenance() {
    maintenanceM -= 0.05
    update()
}


function update() {
    document.getElementById("money").innerHTML = "$" + money
    document.getElementById("q400").innerHTML = "Q400: " + amt_q400
    document.getElementById("a320").innerHTML = "A320:" + amt_a320
    document.getElementById("a350").innerHTML = "A350: "+ amt_a350
    document.getElementById("747").innerHTML = "747: " + amt_747
    maintainCost = (amt_q400 * 10000) + (amt_a320 * 20000) + (amt_a350 * 50000) + (amt_747 * 100000)
    document.getElementById("maintainCost").innerHTML = maintainCost
}

function maintain() {
    maintenanceM = 1.5
    money -= maintainCost
    update()
}