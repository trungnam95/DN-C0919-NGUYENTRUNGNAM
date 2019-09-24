function feetToMetter(val) {
   val=parseFloat(val);
   document.getElementById("outputMetter").innerHTML=0.305 * val;
}
function metterToFeet(val) {
    val=parseFloat(val);
    document.getElementById("outputFeet").innerHTML=3.279 * val;
}