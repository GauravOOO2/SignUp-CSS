const container = document.querySelector('.container')
const signup_button = document.querySelector('.green_bg button')

signup_button.addEventListener('click', ()=>{
    container.classList.toggle('change')
})