
function SNT(val) {
    for(let i=2;i<=Math.sqrt(val);i++){
        if(val%i===0){
            return false;
        }
    }return true;
}