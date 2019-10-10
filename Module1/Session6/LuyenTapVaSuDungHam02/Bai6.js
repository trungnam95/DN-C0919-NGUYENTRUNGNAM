function check(val) {
    if (!isNaN(val))//hàm NAN chỉ cho về kết quả đúng sai ko dùng để so sánh
    {
        if (val >= 0) {
            return true;
        } else {
            return false;
        }

    } else {
        return false;
    }
}