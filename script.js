document.addEventListener("DOMContentLoaded", () => {
    // Deteck theme preference
    if(localStorage.getItem('theme')) document.body.dataset.theme = localStorage.getItem('theme')
    else{
        console.log(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)'))
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

    fetch('https://dev.to/api/articles?username=kimlimjustin')
    .then(response => response.json())
    .then(result => {
        let recentArticles = result.slice(0,4);
        recentArticles.forEach(article => {
            let articleElement = document.createElement('div');
            articleElement.classList.add("article");
            articleElement.innerHTML = `<img src="${article.social_image}" class="article-cover" alt="cover image for${article.title} on dev.to">
            <h2 class="article-title">${article.title}</h2>
            <div class="article-stats">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-labelledby="ahgconqwly4xv7fvtjtcgkecns15nssw">
                    <path d="M2.821 12.794a6.5 6.5 0 017.413-10.24h-.002L5.99 6.798l1.414 1.414 4.242-4.242a6.5 6.5 0 019.193 9.192L12 22l-9.192-9.192.013-.014z"></path>
                </svg>
                <span>${article.public_reactions_count}</span>
                <a href="${article.url}" class="article-link-btn" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            </div>`;
            articleElement.addEventListener("click", () => {
                let blog = window.open(article.url, "_blank");
                blog.focus()
            })
            document.querySelector("#articles").appendChild(articleElement)
        })
        let readMoreElement = document.createElement('a')
        readMoreElement.classList.add('article-read-more');
        readMoreElement.innerText = `Read more on dev.to`
        readMoreElement.href = 'https://dev.to/kimlimjustin';
        readMoreElement.setAttribute('target', "_blank");
        readMoreElement.setAttribute('rel', 'noopener');
        document.querySelector("#articles").appendChild(readMoreElement)
    })
    .catch(() => document.querySelector("#articles").parentNode.removeChild(document.querySelector("#articles")))
})