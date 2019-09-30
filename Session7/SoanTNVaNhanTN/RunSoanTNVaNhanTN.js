let input=document.getElementById("nokiaInput");
let array=[];

function send() {
    let ms=new message();
    ms.setInput(input.value);
    array.push(ms);
    input.value="";
    alert("added");
}
function display() {
    let result="";
    for (let i=0;i<array.length;i++)
    {
        result+=array[i].getInput();
    }
    document.getElementById("output").innerHTML=result;
}