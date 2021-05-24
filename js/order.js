let arrow = $("#arrow")
arrow.bind('click', function () {
    if ($(".hidContent").css('display') == 'none') {
        $(this).css({ "transform": "rotate(180deg)" })
        $(".hidContent").css('display', 'block')
    } else {
        $(".hidContent").css('display', 'none')
        $(this).css({ "transform": "rotate(0deg)" })
    }
})

$(".quanA").eq(0).bind('click', function (e) {
    e.preventDefault()
    $('.quanA').eq(1).toggleClass('activeQuan')
    $(this).toggleClass('activeQuan')
    $('.yhq').toggleClass('hidYH')
    $('.yhm').toggleClass('hidYH')
})

$(".quanA").eq(1).bind('click', function (e) {
    e.preventDefault()
    $('.quanA').eq(0).toggleClass('activeQuan')
    $(this).toggleClass('activeQuan')
    $('.yhq').toggleClass('hidYH')
    $('.yhm').toggleClass('hidYH')
})

