var display = document.getElementById("display");
display.onclick = function() { display.innerHTML= "Answer is " + 1;
};

var myAns = ""  ;


var v = function (x){
    myAns= myAns + x;
    display.innerHTML=myAns;
};

var ac = function(){
    myAns="";
    display.innerHTML=myAns;
};

var ev = function(){

    var resu = eval(myAns);
    display.innerHTML=resu;
    myAns="";
};
