var myVar=document.getElementById('display');

myVar[0].onclick = function() { myVar[0].innerHTML= "Answer is " + 1;
};

var myAns = ""  ;


var a = function (x){
    myAns= myAns + x;
    myVar[0].innerHTML=myAns;
};

var ac = function(){
    myAns="";
    myVar[0].innerHTML=myAns;
};

var ev=function(){
   var resu;
   resu = eval(myAns);
    myVar[0].innerHTML=resu;
    myAns="";
};
