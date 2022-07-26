function randomNumber()
{
  var random = Math.random()*6;
  random = Math.floor(random) + 1;
  return random;
}

var dice1 = randomNumber();
var dice2 = randomNumber();
var image1 = "images/dice"+dice1+".png";
var image2 = "images/dice"+dice2+".png";

document.querySelector(".img1").src = image1;
document.querySelector(".img2").src = image2;

if(dice1>dice2)
{
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if(dice1<dice2)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else
{
  document.querySelector("h1").innerHTML = "It's a Draw";
}
