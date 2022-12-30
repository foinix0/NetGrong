

var slide = ["C:/Users/frait/Documents/GitHub/NetGrong Site/NetGrong/Imm/1.png",
"C:/Users/frait/Documents/GitHub/NetGrong Site/NetGrong/Imm/2.jpg", 
" C:/Users/frait/Documents/GitHub/NetGrong Site/NetGrong/Imm/3.jpg"];

 var i = 0;
 function demo(){
    document.getElementById("imms").src = slide[i];
    i++
    if(i > 2){
        i = 0;
    }
 }

 function demo1(){
    document.getElementById("imms").src = slide[i];
    i--
    if( i < 0){
        i = 2;
    }
 }
