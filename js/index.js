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