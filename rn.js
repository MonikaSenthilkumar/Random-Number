let a = Math.floor(Math.random()*100);
let count = 10;

function check(){
        document.getElementById('count').innerHTML = count;
    let b = document.getElementById('num');
    count--;
    if(b.value<a && count>0){
        document.getElementById('result').innerHTML = "guess is low";
    }
    else if(b.value>a && count>0){
        document.getElementById('result').innerHTML = "guess is high";
    }
    else if(b.value==a && count>0){
        document.getElementById('result').innerHTML = "won the match";
    }
    else if(count == 0){
        document.getElementById('result').innerHTML = "lose the match";
    }
}


function reload(){
    location.reload();
}