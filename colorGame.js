let numSquares = 6;	

let pickedColor = pickColor();

let colors = generateRandomColors(numSquares);

let squares = document.querySelectorAll(".square");

let colorDisplay = document.querySelector("#colorDisplay");

let messageDisplay = document.querySelector("#message");

let h1 = document.querySelector("h1")

let resetButton = document.querySelector("#reset");

let modeButtons = document.querySelectorAll(".modeButton");

init();

function init(){
	for(i = 0; i < modeButtons.length; i++){
 	  modeButtons[i].addEventListener("click", function(){
  	  	modeButtons[0].classList.remove("selected");
  	  	modeButtons[1].classList.remove("selected");
  	  	this.classList.add("selected");
  	  	this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
  	  	reset();
      }); 
	}

	for(i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			let clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!"
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again?"
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again."
			};
		});
	};

	reset();
}

function reset(){
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for(i = 0; i<squares.length; i++){
	  if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	  }else{ squares[i].style.display= "none";}
	};
}

resetButton.addEventListener("click", function(){
reset();
});

function changeColors(color){
	for(i=0; i<squares.length; i++){
	  squares[i].style.backgroundColor = color;
	}
};

function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	let arr = [];
	for(i=0; i < num; i++){
		arr.unshift(randomColor());
	}
	return arr;
}

function randomColor(){
	let r = Math.floor(Math.random() * 256)
	let g = Math.floor(Math.random() * 256)
	let b = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

colorDisplay.textContent = pickedColor;
