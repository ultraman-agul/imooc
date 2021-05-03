// 弹框和遮罩层
let layer = document.querySelector('#popLayer')
let popBox = document.querySelector('#popBox')
let login = document.querySelector(".login")
let register = document.querySelector('#register')
let registerBox = document.querySelector('#registerBox')

login.onclick = (e) => {
    e.preventDefault();
    layer.style.display = 'block';
    popBox.style.display = 'block';
}

register.onclick = (e) => {
    e.preventDefault();
    layer.style.display = 'block';
    registerBox.style.display = 'block';
}

let closeBox = document.querySelectorAll('.closeBox')
for (let i = 0; i < closeBox.length; i++) {
    closeBox[i].onclick = () => {
        layer.style.display = 'none';
        popBox.style.display = 'none';
        registerBox.style.display = 'none';
    }
}

// 切换登录方式
let zh = document.querySelector('.zh')
let zhBtn = document.querySelector('.zhanghao')
let yz = document.querySelector('.yz')
let yzBtn = document.querySelector('.yzm')

zhBtn.onclick = () => {
    yz.style.display = 'none';
    zh.style.display = 'block';
    zhBtn.classList.add('activeLogin')
    yzBtn.classList.remove('activeLogin')
}

yzBtn.onclick = () => {
    zh.style.display = 'none'
    yz.style.display = 'block'
    yzBtn.classList.add('activeLogin')
    zhBtn.classList.remove('activeLogin')
}

let pswInput = document.querySelectorAll('.pswInput')
let seePwd = document.querySelectorAll('.see')
for (let i = 0; i < seePwd.length; i++) {
    seePwd[i].onclick = function (e) {
        e.preventDefault();
        if (this.className.indexOf('icon-yanjing-guan') === -1) {
            this.classList.remove('icon-yanjing-kai')
            this.classList.add('icon-yanjing-guan')
            pswInput[i].setAttribute('type', 'password')
        } else {
            this.classList.remove('icon-yanjing-guan')
            this.classList.add('icon-yanjing-kai')
            pswInput[i].setAttribute('type', 'text')
        }
    }
}

// 表单验证
function validityFun(obj, tips) {
    // 验证邮箱或手机号
    if (obj.validity.valueMissing || obj.validity.patternMismatch) {
        tips.style.visibility = 'visible';
        obj.setCustomValidity('')
    } else {
        tips.style.visibility = 'hidden ';
    }
}

let emailPhoneNum = document.querySelector("#emailPhoneNum")
let psw1 = document.querySelector('#psw1')
let pList = document.querySelectorAll('.zh>.inputItem>p')

emailPhoneNum.onblur = function (e) {
    e.preventDefault()
    // 验证邮箱或手机号
    validityFun(emailPhoneNum, pList[0])
}
psw1.onblur = function (e) {
    e.preventDefault()
    // 验证密码
    validityFun(psw1, pList[1])
}

let phoneNum = document.querySelector("#phoneNum")
let yzm = document.querySelector('#yzm')
let pList1 = document.querySelectorAll('.yz>.inputItem>p')
phoneNum.onblur = function (e) {
    e.preventDefault()
    // 验证邮箱或手机号
    validityFun(phoneNum, pList1[0])
}
yzm.onblur = function (e) {
    e.preventDefault()
    // 验证密码
    validityFun(yzm, pList1[1])
}

let rgPhone = document.querySelector('#rgPhone')
let rgYzm = document.querySelector('#rgYzm')
let rgPsw = document.querySelector('#rgPsw')
let pList2 = document.querySelectorAll(".rg>.inputItem>p")
rgPhone.onblur = function (e) {
    e.preventDefault()
    // 验证密码
    validityFun(rgPhone, pList2[0])
}
rgYzm.onblur = function (e) {
    e.preventDefault()
    validityFun(rgYzm, pList2[1])
}
rgPsw.onblur = function (e) {
    e.preventDefault()
    validityFun(rgPsw, pList2[2])
}


let submitObj = document.querySelectorAll('input[type="submit"]')
for (let i = 0; i < submitObj.length; i++) {
    submitObj[i].onclick = function (e) {
        e.preventDefault();
        layer.style.display = 'none';
        popBox.style.display = 'none';
        registerBox.style.display = 'none';
        let noLogin = document.querySelectorAll('.noLogin')
        for (let i = 0; i < noLogin.length; i++) {
            noLogin[i].style.display = 'none'
        }

        let already = document.querySelectorAll('.already')
        for (let j = 0; j < already.length; j++) {
            already[j].style.display = 'block'
        }
    }
}