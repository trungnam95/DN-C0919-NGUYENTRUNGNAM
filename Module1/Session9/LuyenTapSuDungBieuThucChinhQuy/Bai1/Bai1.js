function checkDate(str) {
    let check=/^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/;
    if(check.test(str)){
        alert("ok");
    }else
        alert("not ok");
}