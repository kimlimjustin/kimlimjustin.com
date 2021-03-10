document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem('theme')) document.body.dataset.theme = localStorage.getItem('theme')
})