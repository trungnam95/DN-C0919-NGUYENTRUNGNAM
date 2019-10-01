function checkAccount(str) {
    let check=/^[_a-z0-9]{6,}$/;
    if(check.test(str)){
        alert("ok");
    }else
        alert("not ok");
}