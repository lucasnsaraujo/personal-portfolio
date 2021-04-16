let modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
for(let card of cards) {
    card.addEventListener('click', ()=> {
        const iframe = document.querySelector('iframe');
        const videoId = card.getAttribute("id")
        iframe.src = `https://www.youtube.com/embed/${videoId}`
        modalOverlay.classList.toggle('active')
    })
}

const closeModal = document.querySelector('.close-modal')
closeModal.addEventListener('click', function() {
    modalOverlay.classList.toggle('active')
})


iframe.src = ""

//https://www.youtube.com/embed/5-sfG8BV8wU