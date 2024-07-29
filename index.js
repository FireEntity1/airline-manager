var amt_q400 = 1
var amt_a320 = 0
var amt_a350 = 0
var amt_747 = 0

const q400_cost = 27000000
const a320_cost = 100000000
const a350_cost = 366000000
const b747_cost = 418000000

var money = 500000000
update()
function buyPrompt(code, amt) {
    code = prompt("ENTER AIRCRAFT CODE:");
    code = code.toUpperCase()
    switch(code) {
        case "Q400":
            amt = prompt("How many?");
            if (money >= q400_cost*amt) {
            alert(amt + " Q400 bought!");
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

function update() {
    document.getElementById("money").innerHTML = money.toString()
}