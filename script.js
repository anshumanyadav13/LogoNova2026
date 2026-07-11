if(localStorage.getItem("quizCompleted")=="true"){
    alert("You have already completed the quiz.");
    window.location.href="result.html";
}
function startQuiz(){

    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let cls = document.getElementById("class").value;

    // Check Name
    if(name==""){
        alert("Please enter your name.");
        return;
    }

    // Name should contain only letters and spaces
    if(!/^[A-Za-z ]+$/.test(name)){
        alert("Name should contain only letters.");
        return;
    }

    // Check Roll Number
    if(roll==""){
        alert("Please enter your Roll Number.");
        return;
    }

    // Roll number should contain only digits
    if(!/^[0-9]+$/.test(roll)){
        alert("Roll Number should contain only numbers.");
        return;
    }

    localStorage.setItem("name",name);
    localStorage.setItem("roll",roll);
    localStorage.setItem("class",cls);

   window.location.href="rules.html";

}