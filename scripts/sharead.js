let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let selectTarefeBtn = document.querySelectorAll('.tarefe button')
let modalClosBtn = document.querySelector('.modal-action--negative')

for (let i = 0; i < selectTarefeBtn.length; i++) {
    selectTarefeBtn[i].addEventListener('click', function () {
        backdrop.style.display = 'block'
        modal.style.display = 'block'

    });    
}

backdrop.addEventListener('click', clos)
modalClosBtn.addEventListener('click', clos)

function clos() {
    backdrop.style.display = 'none'
    modal.style.display = 'none'
}

