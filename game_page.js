var player1 = localStorage.getItem("player1_name");
var player2 = localStorage.getItem("player2_name");
var playerScore1 = 0;
var playerScore2 = 0;
var questionTurn = "player1"; 
var answerTurn = "player2";

document.getElementById("player1Name").innerHTML = player1;
document.getElementById("player2Name").innerHTML = player2;
document.getElementById("player1Score").innerHTML = playerScore1;
document.getElementById("player2Score").innerHTML = playerScore2;
document.getElementById("player_question").innerHTML = "Turno de pergunta " + player1;
document.getElementById("player_answer").innerHTML = "Turno de resposta " + player2;

function enviar()
{
   // o charAt conta o índice, já o lenght - 1 conta normal.
    var getWord = document.getElementById("word").value;
    var word  = getWord.toLowerCase();
    charAt1 = word.charAt(1);
    console.log(charAt1);

    lenghtDivide2 = Math.floor(word.lenght/2);
    charAt2 = word.charAt(lenghtDivide2);
    console.log(charAt2);

    lenghtMinus1 = word.lenght - 1;
    charAt3 = word.charAt(lenghtMinus1);
    console.log(charAt3);

    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
    console.log(removeCharAt3);

    question_word = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>";
     inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
      checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
       row = question_word + inputBox + checkButton ;
     document.getElementById("output").innerHTML = row; document.getElementById("word").value = "";
}
function check()
{
  getAnswer = document.getElementById("inputCheckBox").value;
  var answer =  getAnswer.toLowerCase();
  if(answer == word){
    if (answerTurn == "player1") {
      playerScore1 = playerScore1 + 1;
      document.getElementById("player1Score").innerHTML = playerScore1;
    } else {
      playerScore2 = playerScore2 + 1;
      document.getElementById("player1Score").innerHTML = playerScore2;
    }
  }
  if(questionTurn == "player1"){
    questionTurn == "player2";
    document.getElementById("player_question").innerHTML = "o turno da pergunta é do(a): " + player2;
  }
  else{
    questionTurn == "player1";
    document.getElementById("player_question").innerHTML = "o turno da pergunta é do(a): " + player1;
  }

  if(answerTurn == "player1"){
    answerTurn == "player2";
    document.getElementById("player_answer").innerHTML = "o turno da resposta é do(a) :" + player2;
  }
  else{
    answerTurn == "player1";
    document.getElementById("player_answer").innerHTML = "o turno da resposta é do(a) :" + player1;
  }
}