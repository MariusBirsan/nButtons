let winningButton = 0;

function randomButton(totalB) {
    	return Math.floor(Math.random() * totalB);
}

function isWinner(valueOfButton) {
   	console.log(valueOfButton.target.id);
    	let chosenButton = valueOfButton.target.id;
    	console.log(chosenButton);
    	if (chosenButton == winningButton) {
       		message.innerHTML = "You selected the winner button!"
    	} else {
       		message.innerHTML = "Please select another button!"
    	}
}

let totalButtons = 0;
const maxValue = 20;

function generateButtons() {
	let input = document.getElementById("noOfButtons").value;
    	let value = parseInt(input);
    	if (input === "") {
    		value = 0;
    	}	
	if (value > 20 || value < 1) {
		message.innerHTML = "You need to enter a value bigger than 0 and smaller than 21!"
	} else if (totalButtons < maxValue){
		for (let i = 0; i < value && totalButtons < maxValue; ++i) {
        		let btn = document.createElement("button");
           		btn.addEventListener("click", isWinner);
            		btn.setAttribute("id", i);
            		btn.innerHTML = "Click Me";
            		document.body.appendChild(btn);
            		++totalButtons;
        	}
        	if (totalButtons < maxValue) {
        		message.innerHTML = "Buttons were added! Check which one is the winner!"
        	} else {
            		message.innerHTML = "You have reached to the maximum number of buttons! Check which button is the winner!"
        	}
    	}
   	winningButton = randomButton(totalButtons);
}



