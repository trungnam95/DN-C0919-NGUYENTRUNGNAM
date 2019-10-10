function findMin(arr) {
    let min=arr[0];
    for (let i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
}
function findMax(arr) {
    let max=arr[0];
    for (let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    } return max;
}