
function calc() {
    var ppl = parseInt(document.getElementById("nmb_ppl").value);
    if (isNaN(ppl)){
        alert("You must enter party size!");
        return;
    }
    var total = parseInt(document.getElementById("cost").value);
    if (isNaN(total)){
        alert("You must enter total cost!");
        return;
    }
    console.log(total); 
    var tip = parseInt(document.getElementById("tip").value);
    if (isNaN(tip)){
        alert("You should really tip bruh");
        return;
    }
    var tipamnt = total*(tip/100);
    var pay = (total+ tipamnt)/ppl;
    if (isNaN(pay)){
        document.getElementById("pay").innerHTML = "Something wrong";
    }
    else{
        document.getElementById("pay").innerHTML = pay;
    }
}