document.getElementById("rollButton").addEventListener("click", roll);
    
function roll() {
    var random1 = Math.floor(Math.random() * 6) + 1;
    var random2 = Math.floor(Math.random() * 6) + 1;
    
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    dice1.setAttribute("src", `images/dice${random1}.jpeg`);
    dice2.setAttribute("src", `images/dice${random2}.jpeg`);
  
    var resultText = document.getElementById("resultText");
    count1 = 0;
    count2 = 0;
    draw = 0;
    if (random1 > random2) {
        count1 += 1;
        resultText.textContent = "🎉 Player 1 Wins!";
    } else if (random2 > random1) {
        count2 += 1;
        resultText.textContent = "🎉 Player 2 Wins!";
    } else {
        draw += 1;
        resultText.textContent = "😮 It's a Draw!";
    }
};


document.getElementsByClassName("count").addEventListener("click", winCount);
function winCount() {
    alert("Player 1 won: " + count1 + " times!");
    alert("Player 2 won " + count2 + " times!");
    alert("Draw: " + draw + " times!");
}
