let message=function () {
    this.setInput=function (Input) {
        this.Input=Input;
    };
    this.getInput=function () {
        return this.Input;
    };
};