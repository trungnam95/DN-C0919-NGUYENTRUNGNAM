function minArray(arr) {
    // let check = false;
    if (arr.length === 0) {
        return check;
    }
    if (arr.length >= 1) {
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
}