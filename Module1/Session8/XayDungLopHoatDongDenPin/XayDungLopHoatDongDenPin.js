let Battery=function () {
    this.setEnergy=function (Energy) {
        this.Energy=Energy;
    };
    this.getEnergy=function () {
        return this.Energy;
    };
    this.decreaseEnergy=function () {
        if(this.Energy>0){
            this.Energy--;
        }
    };
};
let FlashLamp=function () {
    this.setBattery=function (battery) {
        this.battery=battery;
    };
    this.getBatteryInfo=function () {
        return this.battery.getEnergy();
    };
    this.light=function () {
        if(this.status){
            alert("lighting");
        }else
            alert("Not Lighting");
    };
    this.turnOn=function () {
        this.status=true;
    };
    this.turnOff=function () {
        this.status=false;
    };
};