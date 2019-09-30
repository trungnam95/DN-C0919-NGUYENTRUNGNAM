let translate=function () {
    this.setDoC=function (DoC) {
        this.DoC=DoC;
    };
    this.getDoC=function () {
        return this.DoC;
    };
    this.getDoF=function () {
        return this.DoC*1.8 +32;
    };
    this.getDoK=function () {
        return this.DoC+273.15;
    }
};