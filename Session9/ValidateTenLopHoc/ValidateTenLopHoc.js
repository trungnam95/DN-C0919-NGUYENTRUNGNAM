function checkClassName(val) {
    let reg=/^[ABP]{1}[\d]{1,4}[GHIKLM]{1}$/;
    return reg.test(val);
}