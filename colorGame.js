let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");

let colorDisplay = document.querySelector("#colorDisplay");

let pickedColor = pickColor();

let messageDisplay = document.querySelector("#message");

let h1 = document.querySelector("h1")

let resetButton = document.querySelector("#reset");

let hard = document.querySelector("#hard");

let easy = document.querySelector("#easy");

let easyMode = document.querySelector(".hard");

easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	easyMode.classList.add("harder");
});

hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");

})

resetButton.addEventListener("click", function(){
	//generate new colors
	colors = generateRandomColors(6);
	//pick random color from array
	pickedColor = pickColor();
	//give new colors to squares
	for(i=0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	}
	//reset background on h1
	h1.style.backgroundColor = "rgb(84, 82, 200)";
	colorDisplay.textContent = pickedColor;
	//reset message display
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
});

for(i=0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

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