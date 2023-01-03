var count = 0;
function newgame(){
    location.reload();
}

(function(){
    document.getElementById('diroll').style.display = "none";
    document.getElementById('result').style.display = "none";
})();

function firstplayer(){
    const firstplayername = document.getElementById('firstplayer').value;
    document.getElementById('firstplayerh').innerHTML = firstplayername;
    document.getElementById('firstplayer').style.display = "none";
    document.getElementById('one').style.display = "none";
    document.getElementById('displayrule').style.display = "none";
}

function secondplayer(){
    const secondplayername = document.getElementById('secondplayer').value;
    document.getElementById('secondplayerh').innerHTML = secondplayername;
    document.getElementById('secondplayer').style.display = "none";
    document.getElementById('two').style.display = "none";
    document.getElementById('diroll').style.display = "block";
}

//          Diceroll-->

function diceroll(){
    count++;
    if(count == 1){
        firstRandomNum = Math.floor(Math.random() *6) + 1;
        const firstDiceImage = 'media/'+ firstRandomNum + '.png';
        document.getElementById('firstplayerimage').setAttribute('src',firstDiceImage);
        document.getElementsByClassName('dicevalueone').value = firstRandomNum;        
    }
    else if(count == 2){
        secondRandomNum = Math.floor(Math.random() *6) + 1;
        const secondDiceImage = 'media/'+ secondRandomNum + '.png';
        document.getElementById('secondplayerimage').setAttribute('src',secondDiceImage);
        document.getElementsByClassName('dicevaluetwo').value = secondRandomNum;
        document.getElementById('diroll').style.display = "none";
        document.getElementById('result').style.display = "block";
    }
}

//              Result-->

function result(){
    firstdicevalue = document.getElementsByClassName('dicevalueone').value;
    seconddicevalue = document.getElementsByClassName('dicevaluetwo').value;
    fname = document.getElementById('firstplayerh').innerHTML;
    sname = document.getElementById('secondplayerh').innerHTML;

    if(firstdicevalue > seconddicevalue){
        document.getElementById('box').style.display = "none";
        document.getElementById('result').style.display = "none";
        document.getElementById('win').innerHTML = `Congratulations <br> ${fname} `;
    }
    else if(seconddicevalue > firstdicevalue){
        document.getElementById('box').style.display = "none";
        document.getElementById('result').style.display = "none";
        document.getElementById('win').innerHTML = `Congratulations <br> ${sname} `;
    }
    else{
        document.getElementById('box').style.display = "none";
        document.getElementById('result').style.display = "none";
        document.getElementById('win').innerHTML = `It's Drew`;        
    }
}