//if (checktimer != null) {
//setInterval(callTimer,1000);
//}

//liga o timer
console.log("liga o timer");
let t = 0;
var intervalo = setInterval(callTimer,1000);
console.log(intervalo)

function callTimer() {
  const cronometro = document.getElementById("displaytimer");
  const inputtag = document.getElementById("timer");
  t += 1;
  if (cronometro != null) {
    cronometro.innerHTML = "<b>Timer: " + t + " seconds</b>";
    inputtag.value = t;
  }
  resultado = document.querySelector("#btnresultado");
  if (resultado.style.display === "block") 
  {
    console.log("Todas questões respondidas limpar timer");
    clearInterval(intervalo);
  }

}

function openQuestion(evt, questionId) {
  //declare variables
  var i, tabcontent, tablinks;

  //Get all elements with class='tabcontent' and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  //Get all elements with class='tablinks' and remove the active
  //tablinks = document.getElementsByClassName("btn btn-info");
  //for (i = 0; i < tablinks.length; i++) {
  //  tablinks[i].className = tablinks[i].className.replace("active", "");
  //}

  //Show the current tab and add an active class to the button that opened the tab
  document.getElementById(questionId).style.display = "block";
  //evt.currentTarget.className += "active";
}

function checkAnswer(evt, questionId, buttonId, resposta, alternativa) {
  // declare variables
  var i, count, tabcontent, buttons;
  questiontab = document.querySelectorAll("div.btn-group-vertical");
  console.log("questiontab");
  console.log(questiontab);
  // get the children buttons
  for (i = 0; i < questiontab.length; i++) {
    if (questiontab[i].id === questionId) {
      buttons = questiontab[i].children;
    }
  }
  console.log("buttons");
  console.log(buttons);
  // verify if the answer is correct
  for (i = 0; i < buttons.length; i++) {
    if (buttons[i].type === "button") {
      buttons[i].disabled = true;
      if (buttons[i].id === buttonId) {
        if (resposta === alternativa) {
          console.log("Resposta Correta");
          buttons[i].className = buttons[i].className.replace("btn btn-primary","btn btn-success");
        } else {
          console.log("Resposta Incorreta");
          buttons[i].className = buttons[i].className.replace("btn btn-primary","btn btn-danger");
        }
      }
    }
    let explicaid1 = "explica1" + questionId;
    const explica1 = document.getElementById(explicaid1);
    explica1.style.display = "block";
    let explicaid2 = "explica2" + questionId;
    const explica2 = document.getElementById(explicaid2);
    explica1.style.display = "block";
    explica2.style.display = "block";

    if (buttons[i].id === "explica1") {
      buttons[i].style.display = "block";
    }
    if (buttons[i].id === "explica2") {
        buttons[i].style.display = "block";
    }
  }

  // verify all questions are done
  var right, wrong;
  wrong = document.querySelectorAll(".btn.btn-danger");
  right = document.querySelectorAll(".btn.btn-success");
  console.log("Check all questions");
  console.log(wrong);
  console.log(right);
  count = wrong.length + right.length;

  console.log(count);
  // if all question are answered
  if (count === questiontab.length) {
    resultado = document.querySelector("#btnresultado");
    resultado.style.display = "block";
    const inputwrong = document.getElementById("errado");
    const inputright = document.getElementById("correto");
    inputwrong.value = wrong.length;
    inputright.value = right.length;
    console.log("Todas questões respondidas limpar timer");
    console.log(intervalo)
    clearInterval(intervalo);
  }
}
