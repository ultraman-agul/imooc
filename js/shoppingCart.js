let originBtn = document.querySelector('#originBtn>a')
let showSearch = document.querySelector('.show_search')
let searchInput = document.querySelector('#search_input')
originBtn.onclick = function (e) {
    e.preventDefault()
    showSearch.style.opacity = '1'
    this.style.opacity = '0'
    searchInput.focus()
}

searchInput.onblur = function () {
    showSearch.style.opacity = '0'
    originBtn.style.opacity = 1
}
