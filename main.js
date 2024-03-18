const modalContainer = document.querySelector('.modal')
const watchModal = document.querySelector('footer')
const buttonGhost = document.querySelector('.button-ghost')

watchModal.addEventListener('click', ()=>{
  modalContainer.setAttribute('data-visible', true)
})

buttonGhost.addEventListener('click', ()=>{
  modalContainer.removeAttribute('data-visible')
})