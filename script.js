
const state = {
    toggleState: true
}


const toggleBtn = document.querySelector('.toggle-on');
const iconElem = document.querySelector('.icon');
const textElem = document.querySelector('.text-name');
const toggleSwitchIConElem = document.querySelector('.toggle-icon');
const bodyElem = document.querySelector('body');
const listElem = document.querySelector('.nav').querySelectorAll('li');
toggleBtn.addEventListener('click', toggleswitchHandler)

function toggleswitchHandler() {
    state.toggleState = !state.toggleState

    if (state.toggleState) {

        iconElem.classList.add('fa-sun')
        iconElem.classList.remove('fa-moon')
        textElem.innerHTML = "Light Mode"
        toggleSwitchIConElem.classList.remove('fa-toggle-on')
        toggleSwitchIConElem.classList.add('fa-toggle-off')
        bodyElem.classList.remove('backgroundcolorDark')
        listElem.forEach((ele) => {
            ele.classList.remove('text-dark')
        })
    }
    else {

        iconElem.classList.add('fa-moon')
        iconElem.classList.remove('fa-sun')
        textElem.innerHTML = "Dark Mode"
        toggleSwitchIConElem.classList.add('fa-toggle-on')
        toggleSwitchIConElem.classList.remove('fa-toggle-off')
        bodyElem.classList.add('backgroundcolorDark')
        listElem.forEach((ele) => {
            ele.classList.add('text-dark')
        })

    }
   
}