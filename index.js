var randomNum = Math.floor(Math.random()*6)+1;
var randomImg = "dice"+randomNum+".png";
var randomSource ="images/"+randomImg;
var result = document.querySelectorAll("img")[0];
result.setAttribute("src", randomSource);


var randomNum1 = Math.floor(Math.random()*6)+1;
var randomSource2 = "images/dice"+randomNum1+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomSource2);

if(randomNum > randomNum1){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNum1 > randomNum){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else
{
    document.querySelector("h1").innerHTML="DraW the Match";
}





  













