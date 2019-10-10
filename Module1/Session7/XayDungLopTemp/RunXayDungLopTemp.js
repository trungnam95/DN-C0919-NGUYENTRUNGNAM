let doc=document.getElementById("temp");
let result="";
function transToF() {
    let tf=new translate();
    tf.setDoC(doc.value*1);
    result="gia tri do F la"+tf.getDoF();
    document.getElementById("output").innerHTML=result;
}
function transToK() {
    let tk=new translate();
    tk.setDoC(doc.value*1);
    result="gia tri do K la:"+tk.getDoK();
    document.getElementById("outputK").innerText=result;
}