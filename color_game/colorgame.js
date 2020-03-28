var colors = generateRandomColors(6)
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var isHard = true;

easyBtn.addEventListener("click", function(){
	isHard = false;
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click", function(){
	isHard = true;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	// generate new random colors
	if(isHard){
		colors = generateRandomColors(6);
	}
	else {
		colors = generateRandomColors(3);
	}

	// pick a new color from the array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors"
	messageDisplay.textContent = "";
	// apply new randon colors to boxes
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];

	}
	h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listeners
	squares[i].addEventListener("click", function(){

	// grab color of clicked square
	var clickedColor = this.style.backgroundColor;
	// compare clicked color
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "correct!";
		resetButton.textContent = "Play Again?";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
	}
	else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try again"
	}
	});
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	return arr
}

function randomColor(){
	// pick red, green, blue, each from 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
}