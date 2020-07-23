var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
var isItColOne = false;
var isItColTwo = false;
var isItColThree = false;

function changeColors(){
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

    document.getElementById('colors').innerHTML ="("+r+","+g+","+b+")";
    var choice = Math.floor(Math.random() * 4+1);
    if(choice ==1){
        isItColOne = true;
        document.getElementById('colOne').style.backgroundColor= "rgb(" + r + ", " + g + ", " +b + ")";
        //document.getElementById('colOne').innerHTML ="it";
    }
    else if(choice == 2){
        isItColTwo = true;
        document.getElementById('colTwo').style.backgroundColor= "rgb(" + r + ", " + g + ", " +b + ")";
        //document.getElementById('colTwo').innerHTML ="it";
    }
    else{
        isItColThree = true;
        document.getElementById('colThree').style.backgroundColor= "rgb(" + r + ", " + g + ", " +b + ")";
        //document.getElementById('colThree').innerHTML ="it";
    }
}

// function testGlobal(){
//     document.getElementById('colorstwo').innerHTML ="("+r+","+g+","+b+")";
// }

function checkWin(i){
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