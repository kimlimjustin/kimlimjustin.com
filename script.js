document.addEventListener("DOMContentLoaded", () => {
    if(document.documentElement.clientWidth <= 480){
        document.querySelector(".topnav-name").innerText = "<Justin M.K. />"
    }else{
        document.querySelector(".topnav-name").innerText = "<Justin Maximillian Kimlim />"
    }
    window.addEventListener("resize", () => {
        if(document.documentElement.clientWidth <= 480){
            document.querySelector(".topnav-name").innerText = "<Justin M.K. />"
        }else{
            document.querySelector(".topnav-name").innerText = "<Justin Maximillian Kimlim />"
        }
    })
    document.querySelector(".topnav-ham").addEventListener("click", () => {
        document.querySelector(".topnav-menu").style.width = '100vw';
        document.querySelector(".topnav-exit-menu").addEventListener("click", () => {
            document.querySelector(".topnav-menu").style.width = '0vw';
        })
    })
})