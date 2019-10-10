function find(inputFind,arr) {
    let dem=0;
    for (let i=0;i<arr.length;i++){
        if (inputFind===arr[i]){
            dem++;
        }
    } return dem;
}