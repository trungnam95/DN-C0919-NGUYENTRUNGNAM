let dai=document.getElementById("dai");
let rong=document.getElementById("rong");
let x=document.getElementById("x");
let y=document.getElementById("y");
let result="";
function tinh() {
    let hcn=new HCN();
    hcn.setDai(dai.value*1);
    hcn.setRong(rong.value*1);
    result="dien tich la:"+hcn.getDienTich()+"chu vi la:"+hcn.getChuVi();
    document.getElementById("output").innerHTML=result;
}
function inHCN() {
    let ctx=document.getElementById("myCanvas").getContext("2d");
    let rectangle=new HCN();
    rectangle.setX(x.value*1);
    rectangle.setY(y.value*1);
    rectangle.setRong(rong.value*1);
    rectangle.setDai(dai.value*1);
    ctx.beginPath();
    ctx.fillStyle="#FF0000";
    ctx.fillRect(rectangle.getX(),rectangle.getY(),rectangle.getRong(),rectangle.getDai());
    ctx.fill();
}
inHCN();