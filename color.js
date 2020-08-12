var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
var isItColOne = false;
var isItColTwo = false;
var isItColThree = false;
var isItColFour = false;
var isItColFive = false;
var isItColSix = false;
var easy = true;
var gameStarted = false;

function changeColors(){
	gameStarted = true;
	if(easy==true){
		if (isItColOne==false && isItColTwo==false && isItColThree==false){
			//pass
		}
		else{
			isItColOne = false;
			isItColTwo = false;
			isItColThree = false;
		}

		document.getElementById('colOne').style.backgroundColor= "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
		document.getElementById('colTwo').style.backgroundColor="rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
		document.getElementById('colThree').style.backgroundColor="rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
		
		r = Math.floor(Math.random() * 256);
		g = Math.floor(Math.random() * 256);
		b = Math.floor(Math.random() * 256);

		document.getElementById('colors').innerHTML ="<b>The RGB VALUE IS: ("+r+","+g+","+b+")</b>";
		var choice = Math.floor(Math.random() * 4+1);
		if(choice ==1){
			isItColOne = true;
			document.getElementById('colOne').style.backgroundColor= "rgb(" + r + ", " + g + ", " +b + ")";
		}
		else if(choice == 2){
			isItColTwo = true;
			document.getElementById('colTwo').style.backgroundColor= "rgb(" + r + ", " + g + ", " +b + ")";
		}
		else{
			isItColThree = true;
			document.getElementById('colThree').style.backgroundColor= "rgb(" + r + ", " + g + ", " +b + ")";
		}
	}
	else{
		if (isItColOne==false && isItColTwo==false && isItColThree==false && isItColFour==false && isItColFive==false && isItColSix==false){
			//pass
		}
		else{
			isItColOne = false;
			isItColTwo = false;
			isItColThree = false;
			isItColFour=false;
			isItColFive=false;
			isItColSix=false;
			
		}

		document.getElementById('colOne').style.backgroundColor= "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
		document.getElementById('colTwo').style.backgroundColor="rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
		document.getElementById('colThree').style.backgroundColor="rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
		document.getElementById('colFour').style.backgroundColor= "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
		document.getElementById('colFive').style.backgroundColor="rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
		document.getElementById('colSix').style.backgroundColor="rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
		
		r = Math.floor(Math.random() * 256);
		g = Math.floor(Math.random() * 256);
		b = Math.floor(Math.random() * 256);

		document.getElementById('colors').innerHTML ="<b>The RGB VALUE IS: ("+r+","+g+","+b+")</b>";
		var choice = Math.floor(Math.random() * 7+1);
		if(choice ==1){
			isItColOne = true;
			document.getElementById('colOne').style.backgroundColor= "rgb(" + r + ", " + g + ", " +b + ")";
		}
		else if(choice == 2){
			isItColTwo = true;
			document.getElementById('colTwo').style.backgroundColor= "rgb(" + r + ", " + g + ", " +b + ")";
		}
		else if(choice==3){
			isItColThree = true;
			document.getElementById('colThree').style.backgroundColor= "rgb(" + r + ", " + g + ", " +b + ")";
		}
		else if(choice == 4){
			isItColFour = true;
			document.getElementById('colFour').style.backgroundColor= "rgb(" + r + ", " + g + ", " +b + ")";
		}
		else if(choice==5){
			isItColFive = true;
			document.getElementById('colFive').style.backgroundColor= "rgb(" + r + ", " + g + ", " +b + ")";
		}
		else{
			isItColSix = true;
			document.getElementById('colSix').style.backgroundColor= "rgb(" + r + ", " + g + ", " +b + ")";
		}
	}
}


function checkWin(i){
	if(gameStarted==true){
		if(easy==true){
			if(i.localeCompare('colOne')==0){
				if(isItColOne==true){
					alert("You Have Chosen The Correct Container!");
				}
				else{
					alert("You Have Chosen The Wrong Container!");
				}
			}
			else if(i.localeCompare('colTwo')==0){
				if(isItColTwo==true){
					alert("You Have Chosen The Correct Container!");
				}
				else{
					alert("You Have Chosen The Wrong Container!");
				}
			}
			else{
				if(isItColThree==true){
					alert("You Have Chosen The Correct Container!");
				}
				else{
					alert("You Have Chosen The Wrong Container!");
				}
			}
		}
		else{
			if(i.localeCompare('colOne')==0){
				if(isItColOne==true){
					alert("You Have Chosen The Correct Container!");
				}
				else{
					alert("You Have Chosen The Wrong Container!");
				}
			}
			else if(i.localeCompare('colTwo')==0){
				if(isItColTwo==true){
					alert("You Have Chosen The Correct Container!");
				}
				else{
					alert("You Have Chosen The Wrong Container!");
				}
			}
			else if(i.localeCompare('colThree')==0){
				if(isItColThree==true){
					alert("You Have Chosen The Correct Container!");
				}
				else{
					alert("You Have Chosen The Wrong Container!");
				}
			}
			else if(i.localeCompare('colFour')==0){
				if(isItColFour==true){
					alert("You Have Chosen The Correct Container!");
				}
				else{
					alert("You Have Chosen The Wrong Container!");
				}
			}
			else if(i.localeCompare('colFive')==0){
				if(isItColFive==true){
					alert("You Have Chosen The Correct Container!");
				}
				else{
					alert("You Have Chosen The Wrong Container!");
				}
			}
			else{
				if(isItColSix==true){
					alert("You Have Chosen The Correct Container!");
				}
				else{
					alert("You Have Chosen The Wrong Container!");
				}
			}
		}
	}
	
	
}

function difficulty(){
	if(document.getElementById("currDiff").innerHTML == "Hard Mode"){
		document.getElementById("currDiff").innerHTML = "Easy Mode";
		document.getElementById("hard").style.display="flex";
		easy = false;
		changeColors();
	}
	else{
		easy = true;
		document.getElementById("currDiff").innerHTML = "Hard Mode";
		document.getElementById("hard").style.display="none";
		changeColors();
	}
	
}