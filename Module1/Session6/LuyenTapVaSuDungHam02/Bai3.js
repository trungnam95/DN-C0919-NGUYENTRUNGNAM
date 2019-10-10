function giaiThua(a) {
    let result=1;
    for (let i = 1; i <= a; i++) {
        result *= i;
        // document.getElementById("txt").innerHTML=("giai thừa của:"+i+" "+"là: "+result);
    }document.write("giai thừa của"+a+"là"+result);//muốn hiển thị ko trùng thì đem ra ngoài vòng for ngoài ra cần
    //nhớ kết quả in ra liên quan tới giá trị hập vào.
}