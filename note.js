let input = document.getElementById('inputs');
function f1(e){
    let value = e.value;
input.style.fontSize = value + "px";
}
function f2(e){
if(input.style.fontWeight ==  "bold")
{

    input.style.fontWeight = "normal";
}

else{
    input.style.fontWeight = "bold";

}

}
function f3(e){
    if(input.style.fontStyle == "italic")
    {
        input.style.fontStyle = "normal";
    }
    else{
        input.style.fontStyle = "italic";
    }
}
function f4(e){

    if(input.style.textDecoration == "underline"){
       input.style.textDecoration = "none";
       e.classList.remove("active");
    }
    else{
        input.style.textDecoration = "underline";
        e.classList.add("active");
    }
 }


// document.getElementById("h1").style.color = "red";
function h(){

    document.getElementById("h1").style.color ="red";

}

function f5(){
    document.getElementById("input").style.color ="blue";
    
}

//count character and Words

let textbox = document.getElementById("inputs");
 textbox.addEventListener('input',function(){
    let text = this.value;
    let char = text.length;
document.getElementById("char").innerHTML = char;
text = text.trim();
let word = text.split(" ");
let cleanlist = word.filter(function(elm){
    return elm != "";
});
console.log( );
 document.getElementById("word").innerHTML =cleanlist.length;
});

