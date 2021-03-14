document.addEventListener("DOMContentLoaded", () => {
    // Deteck theme preference
    if(localStorage.getItem('theme')) document.body.dataset.theme = localStorage.getItem('theme')
    else{
        let themePreference = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark": "light";
        localStorage.setItem('theme', themePreference);
        document.body.dataset.theme = themePreference;
    }
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
        document.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                document.querySelector(".topnav-menu").style.width = '0vw';
            })
        })
    })
    AOS.init()
    fetch('https://api.github.com/repos/kimlimjustin/kimlimjustin.github.io')
    .then(response => response.json())
    .then(result => {
        document.querySelector("#github-stars").innerText = result["stargazers_count"]
        document.querySelector("#github-forks").innerText = result["forks"]
    })
    .catch(() => document.querySelector(".github-stats").removeChild(document.querySelector(".github-stats")))

    document.querySelector(".switch-theme-btn").addEventListener("click", () => {
        let newTheme = document.body.dataset.theme === "dark" ? "light": "dark";
        document.body.dataset.theme = newTheme
        localStorage.setItem('theme', newTheme)
    })
})