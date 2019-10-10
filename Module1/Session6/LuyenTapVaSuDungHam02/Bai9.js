function findArray(val,array) {
    let check=false;
    let dem=0;
    for (let i=0;i<array.length;i++){
        if(val===array[i]){
            dem++;
            check=true;
        }
    }
    if(!check){
        alert("ko có");
    }
    return dem;
}