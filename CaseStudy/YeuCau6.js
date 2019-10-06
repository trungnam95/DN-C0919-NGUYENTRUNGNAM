let Customer = function () {
    this.setNameCustomer = function (NameCustomer) {
        this.Namecustomer = NameCustomer;
    };
    this.getNameCustomer = function () {
        return this.Namecustomer;
    };
    this.setIdCard = function (IdCard) {
        this.IdCard = IdCard;
    };
    this.getIdCard = function () {
        return this.IdCard;
    };
    this.setBirthdayCustomer = function (BirthdayCustomer) {
        this.BirthdayCustomer = BirthdayCustomer;
    };
    this.getBirthdayCustomer = function () {
        return this.BirthdayCustomer;
    };
    this.setEmailCustomer = function (EmailCustomer) {
        this.EmailCustomer = EmailCustomer;
    };
    this.getEmailCustomer = function () {
        return this.EmailCustomer;
    };
    this.setAddressCustomer = function (AddressCustomer) {
        this.AddressCustomer = AddressCustomer;
    };
    this.getAddressCustomer = function () {
        return this.AddressCustomer;
    };
    this.setTypeCustomer = function (TypeCustomer) {
        this.TypeCustomer = TypeCustomer;
    };
    this.getTypeCustomer = function () {
        return this.TypeCustomer;
    };
    this.setDiscount = function (Discount) {
        this.Discount = Discount;
    };
    this.getDiscount = function () {
        return this.Discount;
    };
    this.setNumberOfAccompanying = function (NumberOfAccompanying) {
        this.NumberOfAccompanying = NumberOfAccompanying;
    };
    this.getNumberOfAccompanying = function () {
        return this.NumberOfAccompanying;
    };
    this.setTypeRoom = function (TypeRoom) {
        this.TypeRoom = TypeRoom;
    };
    this.getTypeRoom = function () {
        return this.TypeRoom;
    };
    this.setRentDays = function (RentDays) {
        this.RentDays = RentDays;
    };
    this.getRentDays = function () {
        return this.RentDays;
    };
    this.setTypeService = function (TypeService) {
        this.TypeService = TypeService;
    };
    this.getTypeService = function () {
        return this.TypeService;
    };
    this.getToTalPay = function () {

        let moneyPerDays = 0;
        if (this.TypeService === "Villa") {
            moneyPerDays = 500;
        } else if (this.getTypeService() === "Villa") {
            moneyPerDays = 300;
        } else {
            moneyPerDays = 200;
        }
        return moneyPerDays * parseFloat(this.RentDays*(1-this.Discount/100));

    };
};