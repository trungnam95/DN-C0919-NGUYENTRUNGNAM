function find(input, a, b) {
    let check = false;
    for (let i = 0; i < a.length; i++) {
        if (input === a[i]) {
            alert(b[i]);
            check = true;
        }
    }
    if (!check) {
        for (let j = 0; j < a.length; j++) {
            if (input !== a[j]) {
                alert("nhập sai");
                break;
            }
        }
    }

}
