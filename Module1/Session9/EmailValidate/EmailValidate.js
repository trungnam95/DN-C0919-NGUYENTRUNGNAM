function checkEmail(str) {
    let check=/^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if(check.test(str)){
        alert("ok");
    }else{
        alert("not ok");
    }
}