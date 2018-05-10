function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true
    }
    return false
}

function ValidatePhone(phone) {

    if (/^\d{10}$/.test(phone)) {
        return true
    }
    return false
}