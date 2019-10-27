function checkUserName() {
    let idName = document.getElementById("idName").value;
    let idNameLength = idName.length;
    let flag1 = false;

    if (idName == "") {
        document.getElementById("namesp").innerHTML = "<img src='img/error.png'>不可空白";
    } else if (idNameLength >= 2) {
        for (let i = 0; i < idNameLength; i++) {
            idNameChar = idName.charCodeAt(i);
            if (idNameChar >= 0x4E00 && idNameChar <= 0x9FFF) {
                flag1 = true;
            } else {
                flag1 = false;
                break;
            }
        }
        if (flag1) document.getElementById("namesp").innerHTML = "<img src='img/correct.png'>姓名格式正確";
        else document.getElementById("namesp").innerHTML = "<img src='img/error.png'>姓名格式不正確";
    } else {
        document.getElementById("namesp").innerHTML = "<img src='img/error.png'>姓名至少兩個字元";
    }
}

function checkPwd() {
    idPwd = document.getElementById("idPwd").value;
    idPwdLength = idPwd.length;
    let symbol = ['!', '@', '#', '$', '%', '^', '&', '*'];
    let flag1 = false, flag2 = false, flag3 = false;

    if (idPwd == "") {
        document.getElementById("pwdsp").innerHTML = "<img src='img/error.png'>密碼不可為空白";
    } else if (idPwdLength >= 6) {
        for (let i = 0; i < idPwdLength; i++) {
            let idPwdChar = idPwd.charAt(i).toUpperCase();
            if (idPwdChar >= 'A' && idPwdChar <= 'Z') {
                flag1 = true;
            } else if (idPwdChar >= 0 && idPwdChar <= 9) {
                flag2 = true;
            } else {
                // 特殊符號檢查
                for (let j = 0; j < symbol.length; j++) {
                    if (idPwdChar.indexOf(symbol[j]) != -1) {
                        flag3 = true;
                        break;
                    }
                }
            }
            if (flag1 && flag2 && flag3) break;
        }
        if (flag1 && flag2 && flag3) {
            document.getElementById("pwdsp").innerHTML = "<img src='img/correct.png'>密碼格式正確";
        }
        else {
            document.getElementById("pwdsp").innerHTML = "<img src='img/error.png'>密碼格式不正確";
        }
    } else {
        document.getElementById("pwdsp").innerHTML = "<img src='img/error.png'>密碼至少6個字元";
    }
}
function checkDateFormat() {
    let idDate = document.getElementById("idDate").value;
    let dataNormal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let dataSpecial = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let flag1 = false, flag2 = false;

    // 檢查 date 預期的格式
    let regex = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
    if (regex.test(idDate)) { flag1 = true;}

    // 切割字串 year/month/date
    idDateArr = idDate.split("/");
    year = idDateArr[0];
    month = idDateArr[1] - 1;
    date = idDateArr[2];

    if (month >= 0 && month < 12) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            if (date <= dataSpecial[month] && date >= 1) { flag2 = true; }
        } else {
            if (date <= dataNormal[month] && date >= 1) { flag2 = true; }
        }
    }

    if (flag1 && flag2) document.getElementById("datesp").innerHTML = "<img src='img/correct.png'>日期格式正確";
    else if (flag1 == false) document.getElementById("datesp").innerHTML = "<img src='img/error.png'>預期格式錯誤, 格式: yyyy/mm/dd";
    else if (flag2 == false) document.getElementById("datesp").innerHTML = "<img src='img/error.png'>日期格式錯誤";
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("idName").addEventListener("blur", checkUserName, false );
    document.getElementById("idPwd").addEventListener("blur", checkPwd, false);
    document.getElementById("idDate").addEventListener("blur", checkDateFormat, false);
});