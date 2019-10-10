let arrListCustomer = [];
let checkToTalPay = false;
let checkEditCustomer = false;
let checkDeleteCustomer = false;

let insertNewCus = new Customer();

insertNewCus.setNameCustomer("Nam");
insertNewCus.setBirthdayCustomer("10/12/1995");
insertNewCus.setEmailCustomer("asd");
insertNewCus.setRentDays(10);
insertNewCus.setDiscount(10);
insertNewCus.setTypeService("Villa");
insertNewCus.setIdCard("6546789");

arrListCustomer.push(insertNewCus);
function displayMenu() {
    let input = parseInt(prompt("1.Add new customer" + "\n2.Display informartion customer" + "\n3.Display total pay of customer "
        + "\n4.Edit information customer" + "\n5.Delete Customer" + "\n6.Exit"));
    switch (input) {
        case 1:
            addNewCustomer();
            break;
        case 2:
            displayCustomers();
            break;
        case 3:
            chooseDisplayTotalPay();
            break;
        case 4:
            chooseEditCustomer();
            break;
        case 5:
            chooseDeleteCustomer();
            break;
        case 6:
            break;
        default:
            displayMenu();
    }
}

function addNewCustomer() {
    let cus = new Customer();
    cus.setNameCustomer(prompt("Input Name:"));
    while (!checkName(cus.getNameCustomer())) {
        cus.setNameCustomer(prompt("Input Name:"));
    }
    cus.setIdCard(prompt("Input ID"));
    while (!checkIdCard(cus.getIdCard())) {
        cus.setIdCard(prompt("Input ID"));
    }
    cus.setBirthdayCustomer(prompt("Input Birthday"));
    while (!checkBirthday(cus.getBirthdayCustomer())) {
        cus.setBirthdayCustomer(prompt("Input Birthday"));
    }
    cus.setEmailCustomer(prompt("Input Email"));
    while (!checkEmail(cus.getEmailCustomer())) {
        cus.setEmailCustomer(prompt("Input Email"));
    }
    cus.setAddressCustomer(prompt("Input Address"));
    cus.setTypeCustomer(prompt("Input Type Customer"));
    cus.setDiscount(prompt("Input Discount"));
    cus.setNumberOfAccompanying(prompt("Input Accompanying"));
    cus.setTypeRoom(prompt("Input TypeRoom"));
    cus.setRentDays(prompt("Input Rent days"));
    cus.setTypeService(prompt("Input Type Service"));
    arrListCustomer.push(cus);
    displayMenu();
}

function checkEmail(val) {
    let reg = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    return reg.test(val);
}

function checkIdCard(val) {
    let reg = /^[\d]{9}$/;
    return reg.test(val);
}

function checkName(val) {
    let reg = /^([\p{Lu}]|[\p{Lu}][\p{Ll}]{1,8})((\s)([\p{Lu}]|[\p{Lu}][\p{Ll}]{1,8})){0,3}$/u;
    return reg.test(val);
}

function checkBirthday(val) {
    let reg = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    return reg.test(val);
}

function displayCustomers() {
    let result = "";
    for (let i = 0; i < arrListCustomer.length; i++) {
        result += "\n" + (i + 1) + ".Name: " + arrListCustomer[i].getNameCustomer() + "; ID card " + arrListCustomer[i].getIdCard();
    }
    result += "\n" + (arrListCustomer.length + 1) + ".Back to menu";
    let chooseDisplayCustomer = prompt(result);
    if (chooseDisplayCustomer*1 <(arrListCustomer.length + 1)) {
        if (!checkDeleteCustomer) {
            if (!checkToTalPay) {
                displayInformationCustomer(Number.parseInt(chooseDisplayCustomer) - 1);
            } else {
                displayTotalPay(Number.parseInt(chooseDisplayCustomer) - 1);
            }
        } else {
                deleteCustomer(Number.parseInt(chooseDisplayCustomer)-1);
        }

    } else if(chooseDisplayCustomer*1 ===(arrListCustomer.length + 1)) {
        checkDeleteCustomer = false;
        checkEditCustomer = false;
        checkToTalPay = false;
        displayMenu();
    }else{
        checkDeleteCustomer = false;
        checkEditCustomer = false;
        checkToTalPay = false;
        displayCustomers();
    }
}

function displayInformationCustomer(index) {
    if (checkEditCustomer) {
        let chooseInfoEdit = prompt("1.Name: " + arrListCustomer[index].getNameCustomer() +
            "\n2.ID: " + arrListCustomer[index].getIdCard() +
            "\n3.Birthday: " + arrListCustomer[index].getBirthdayCustomer() +
            "\n4.Email: " + arrListCustomer[index].getEmailCustomer() +
            "\n5.Address: " + arrListCustomer[index].getAddressCustomer() +
            "\n6.Type Customer: " + arrListCustomer[index].getTypeCustomer() +
            "\n7.Discount: " + arrListCustomer[index].getDiscount() +
            "\n8.NumberOfAccompanying: " + arrListCustomer[index].getNumberOfAccompanying() +
            "\n9.TypeRoom: " + arrListCustomer[index].getTypeRoom() +
            "\n10.RentDays: " + arrListCustomer[index].getRentDays() +
            "\n11.Type Service: " + arrListCustomer[index].getTypeService() +
            "\n12.Back");
        if (chooseInfoEdit * 1 < 12 && chooseInfoEdit > 0) {
            editInformationCustomer(index, Number.parseInt(chooseInfoEdit) - 1);
        } else {
            checkEditCustomer = false;
            displayCustomers();
        }
    } else {
        alert("1.Name: " + arrListCustomer[index].getNameCustomer() +
            "\n2.ID: " + arrListCustomer[index].getIdCard() +
            "\n3.Birthday: " + arrListCustomer[index].getBirthdayCustomer() +
            "\n4.Email: " + arrListCustomer[index].getEmailCustomer() +
            "\n5.Address: " + arrListCustomer[index].getAddressCustomer() +
            "\n6.Type Customer: " + arrListCustomer[index].getTypeCustomer() +
            "\n7.Discount: " + arrListCustomer[index].getDiscount() +
            "\n8.NumberOfAccompanying: " + arrListCustomer[index].getNumberOfAccompanying() +
            "\n9.TypeRoom: " + arrListCustomer[index].getTypeRoom() +
            "\n10.RentDays: " + arrListCustomer[index].getRentDays() +
            "\n11.Type Service: " + arrListCustomer[index].getTypeService()
        );
        displayMenu();
    }

}

function chooseDisplayTotalPay() {
    checkToTalPay = true;
    displayCustomers();
}

function chooseEditCustomer() {
    checkEditCustomer = true;
    displayCustomers();
}

function displayTotalPay(index) {
    alert(arrListCustomer[index].getToTalPay());
    checkToTalPay = false;
    displayMenu();
}
function chooseDeleteCustomer() {
    checkDeleteCustomer=true;
    displayCustomers();
}

function editInformationCustomer(indexCus, indexProperty) {
    let editInfo = prompt("Enter Info You Want Change");
    switch (indexProperty * 1) {
        case 0:
            while (checkName(editInfo) === false) {
                editInfo = prompt("Enter Info You Want Change");
            }
            arrListCustomer[indexCus].setNameCustomer(editInfo);
            break;
        case 1:
            while (checkIdCard(editInfo) === false) {
                editInfo = prompt("Enter Info You Want Change");
            }
            arrListCustomer[indexCus].setIdCard(editInfo);
            break;
        case 2:
            arrListCustomer[indexCus].setBirthdayCustomer(editInfo);
            break;
        case 3:
            while (checkEmail(editInfo) === false) {
                editInfo = prompt("Enter Info You Want Change");
            }
            arrListCustomer[indexCus].setEmailCustomer(editInfo);
            break;
        case 4:
            arrListCustomer[indexCus].setAddressCustomer(editInfo);
            break;
        case 5:
            arrListCustomer[indexCus].setTypeCustomer(editInfo);
            break;
        case 6:
            arrListCustomer[indexCus].setDiscount(editInfo);
            break;
        case 7:
            arrListCustomer[indexCus].setNumberOfAccompanying(editInfo);
            break;
        case 8:
            arrListCustomer[indexCus].setTypeRoom(editInfo);
            break;
        case 9:
            arrListCustomer[indexCus].setRentDays(editInfo);
            break;
        case 10:
            arrListCustomer[indexCus].setTypeService(editInfo);
            break;
        default:
            alert("Fail");
            return;
    }
    checkEditCustomer = false;
    displayMenu();
}
function deleteCustomer(index) {
    let confirmDelete=prompt("Do you want to delete customer:\nName"+arrListCustomer[index].getNameCustomer()+"" +
        "\nID: "+arrListCustomer[index].getIdCard()+"\n1.Yes\n2.No");
    if(confirmDelete==="1"){
        arrListCustomer.splice(index,1);
        alert("Delete Complete");
    }
    checkDeleteCustomer=false;
    displayMenu();
}

displayMenu();