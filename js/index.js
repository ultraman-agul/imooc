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

let imgs = document.querySelectorAll('.imgBox')
let dots = document.querySelectorAll('.dotList>li')
// 此函数不能传递index值，传递的值为固定值，出错
function nextPic() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        dots[i].classList.remove('currentDot')
    }
    index++
    if (index == 6) {
        index = 0
    }
    imgs[index].style.opacity = 1;
    dots[index].classList.add('currentDot')
}

function prev() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        dots[i].classList.remove('currentDot')
    }
    index--
    if (index == -1) {
        index = 5
    }
    imgs[index].style.opacity = 1;
    dots[index].classList.add('currentDot')
}

let timer = null
let index = 0
timer = setInterval(function () {
    nextPic()
}, 1000)

let rightImg = document.querySelector('.rightImg')

rightImg.onmouseover = function () {
    clearInterval(timer)
}
rightImg.onmouseout = function () {
    timer = setInterval(function () {
        nextPic()
    }, 1000)
}

let leftBtn = document.querySelector('.leftBtn')
leftBtn.onclick = function () {
    prev()
}
let rightBtn = document.querySelector('.rightBtn')
rightBtn.onclick = function () {
    nextPic()
}

// 点击下方小点事件
for (let i = 0; i < dots.length; i++) {
    dots[i].index = i;
}
for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = function () {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.opacity = 0;
            dots[i].classList.remove('currentDot')
        }
        index = this.index
        imgs[index].style.opacity = 1;
        dots[index].classList.add('currentDot')
    }
}


// 返回顶部按钮
let toTop = document.querySelector('.toTop')
// 卷出距离
let y

// 左边颜色更换
let leftAsideItem = document.querySelectorAll('.leftAside>ul>li>a')
window.onscroll = function () {
    y = document.documentElement.scrollTop || document.body.scrollTop
    if (y >= 800) {
        toTop.style.display = 'block'
    } else {
        toTop.style.display = 'none'
    }

    if (y >= 2750) {
        clearActive(leftAsideItem, 'activeA')
        leftAsideItem[4].classList.add('activeA')
    } else if (y >= 2500) {
        clearActive(leftAsideItem, 'activeA')
        leftAsideItem[3].classList.add('activeA')
    } else if (y >= 2000) {
        clearActive(leftAsideItem, 'activeA')
        leftAsideItem[2].classList.add('activeA')
    } else if (y >= 1300) {
        clearActive(leftAsideItem, 'activeA')
        leftAsideItem[1].classList.add('activeA')
    } else if (y >= 600) {
        clearActive(leftAsideItem, 'activeA')
        leftAsideItem[0].classList.add('activeA')
    }
}
// 缓慢返回顶部
let timer1 = null
toTop.onclick = function () {
    timer1 = setInterval(function () {
        if (y == 0) {
            clearInterval(timer1)
        }
        document.documentElement.scrollTop = Math.floor(y - 200)
    }, 10)
}

let topTopA = document.querySelector('.toTop>a')
topTopA.onclick = function (e) {
    e.preventDefault()
}

//筛选课程
let courseType = document.querySelectorAll('#courseNav>ul>li>a')
let allCourse = document.querySelectorAll('.allItems>.newItem')
let someCourse = document.querySelectorAll('.someItems>.newItem')
for (let i = 0; i < courseType.length; i++) {
    courseType[i].onclick = function (e) {
        e.preventDefault()
        clearActive(courseType, 'activeNewCourse')
        this.classList.add('activeNewCourse')
        console.log(this)
        if (this.innerText == '推荐') {
            for (let i = 0; i < allCourse.length; i++) {
                allCourse[i].style.display = 'block'
            }
            for (let i = 0; i < someCourse.length; i++) {
                someCourse[i].style.display = 'none'
            }
        } else {
            for (let i = 0; i < allCourse.length; i++) {
                allCourse[i].style.display = 'none'
            }
            for (let i = 0; i < someCourse.length; i++) {
                someCourse[i].style.display = 'block'
            }

        }
    }
}



//清除指定class
function clearActive(obj, className) {
    for (let i = 0; i < obj.length; i++) {
        obj[i].classList.remove(className)
    }
}
