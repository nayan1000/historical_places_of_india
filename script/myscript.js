const togglebutton = document.getElementsByClassName('toggle-button')[0]
const menulinks = document.getElementsByClassName('menu')[0]

togglebutton.addEventListener('click',()=>{
    menulinks.classList.toggle('active')
})