let name = localStorage.getItem("name");
let score = Number(localStorage.getItem("score"));
let total = Number(localStorage.getItem("total"));

document.getElementById("studentName").innerHTML = "👤 " + name;
document.getElementById("score").innerHTML = score + " / " + total + " Points";

let percent = Math.round((score / total) * 100);

document.getElementById("percentage").innerHTML = percent + "%";

let msg = "";

if(percent >= 90){
    msg = "🏆 Outstanding!";
}
else if(percent >= 75){
    msg = "🌟 Excellent!";
}
else if(percent >= 60){
    msg = "👏 Very Good!";
}
else if(percent >= 40){
    msg = "🙂 Good Try!";
}
else{
    msg = "💪 Keep Learning!";
}

document.getElementById("message").innerHTML = msg;

