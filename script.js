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
    // Navbar
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
        window.addEventListener("resize", () => {
            document.querySelector(".topnav-menu").style.width = '0vw';
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

    let PROJECTS = [] // variable used in terminal
    fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=kimlimjustin')
    .then(response => response.json())
    .then(result =>PROJECTS = result)

    // Articles
    let ARTICLES = [] // variable used in terminal
    fetch('https://dev.to/api/articles?username=kimlimjustin')
    .then(response => response.json())
    .then(result => {
        ARTICLES = result;
        let recentArticles = result.slice(0,4);
        recentArticles.forEach(article => {
            let articleElement = document.createElement('div');
            articleElement.classList.add("article");
            articleElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="article-code-svg" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg>
            <img src="${article.social_image}" class="article-cover" alt="cover image for${article.title} on dev.to">
            <h2 class="article-title">${article.title}</h2>
            <div class="article-stats">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img">
                    <path d="M2.821 12.794a6.5 6.5 0 017.413-10.24h-.002L5.99 6.798l1.414 1.414 4.242-4.242a6.5 6.5 0 019.193 9.192L12 22l-9.192-9.192.013-.014z"></path>
                </svg>
                <span>${article.public_reactions_count}</span>
                <a href="${article.url}" class="article-link-btn" target="_blank" rel="noopener">
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

    // Read JSON file
    const readJSONFile = (file, callback) => {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }
    let multilingual;
    readJSONFile('multilingual.json', text =>{
        multilingual = JSON.parse(text)
    })

    let currentLang = "en-US";

    // Terminal Version
    document.querySelector(".terminal-version-btn").addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        const terminalElement = document.querySelector(".terminal");
        modal.style.display = "block";

        const inputTerminal = document.querySelector(".terminal-input-command")
        inputTerminal.focus();

        const REMOVE_LOG = () => {
            const outputLog = terminalElement.querySelectorAll(".terminal-row");
            outputLog.forEach(log => {
                if(!log.contains(inputTerminal)){
                    terminalElement.removeChild(log)
                }
            })
        }
        const EXIT = () => {
            REMOVE_LOG();
            inputTerminal.removeEventListener("change", inputTerminalHandler)
            modal.style.display = "none";
        }
        modal.querySelector(".modal-close-btn").addEventListener("click", () => {
            EXIT()
        })

        const RETURN_VALUE = (inputValue, outputValue) => {
            let outputElement = document.createElement("p");
            outputElement.classList.add('terminal-row');
            outputElement.classList.add('terminal-log');
            outputElement.innerHTML = outputValue;
            let lastInputElement = document.createElement('p');
            lastInputElement.classList.add('terminal-row');
            lastInputElement.innerHTML = `<span class="terminal-user">ask@justin:~$</span><span class="terminal-log">${inputValue}</span>`
            terminalElement.insertBefore(outputElement, inputTerminal.parentNode)
            terminalElement.insertBefore(lastInputElement, outputElement)
        }

        let PREVIOUS_COMMANDS= [];

        const inputTerminalHandler = e => {
            if(e.key === "Enter" && e.target.value){
                let input = e.target.value;
                let output = `'${input.split(" ")[0]}' is not recognized as a command.`;
                PREVIOUS_COMMANDS.push(input)
                if(input === "help"){
                    output = `<span>Some available commands are:</span><ul>
                    <li>about ......... About me</li>
                    <li>clear ......... Clear terminal log</li>
                    <li>exit .......... Exit terminal session</li>
                    <li>help .......... Showing available commands</li>
                    <li>links ......... Social media links</li>
                    <li>theme ......... Change theme of terminal</li>
                    <li>articles ...... Recent articles</li>
                    <li>projects ...... My pinned projects on GitHub</li>
                    <li>lang .......... Change language of this website</li>
                    </ul><span>Besides, there are some hidden feature, try to find it out!</span>`
                }else if(input === "about"){
                    output = "Hello, I'm Justin Maximillian Kimlim from Indonesia, a 15 y.o. junior high school student with hobbies of computer science, programming and science fiction. I enjoy making projects or even website clone."
                }else if(input === "links"){
                    output = `<ul>
                    <li><a href="https://instagram.com/justin_kimlim_" target="_blank" rel="noopener">Instagram</a></li>
                    <li><a href="https://github.com/kimlimjustin" target="_blank" rel="noopener">GitHub</a></li>
                    <li><a href="https://dev.to/kimlimjustin" target="_blank" rel="noopener">Dev.to</a></li>
                    <li><a href="https://reddit.com/kimlimjustin" target="_blank" rel="noopener">Reddit</a></li>
                    <li><a href="mailto:kimlimjustin@gmail.com" target="_blank" rel="noopener">Email</a></li>
                    </ul>`
                }else if(input.split(' ')[0] === "theme"){
                    const availableThemes = ['light', 'dark', 'sky', 'tokyo night', 'atom'];
                    if(input.trim() === "theme"){
                        output = `<span>Usage: theme [option]. Available themes:</span><ul>${availableThemes.map(theme => `<li>${theme}</li>`).join('')}</ul>`
                    }else{
                        let inputTheme = input.split(' ').slice(1).join(' ');
                        if(availableThemes.indexOf(inputTheme) === -1) output = `${inputTheme} is not recognized as a theme`;
                        else{
                            output = "";
                            terminalElement.dataset.theme = inputTheme
                        }
                    }
                }else if(input === "articles"){
                    output = `<ul>${ARTICLES.map(article => `<li><a href = "${article.url}" target="_blank" rel="noopener">${article.title}</a></li>`).join('')}</ul>`
                }else if(input === "github"){
                    let github = window.open('https://github.com/kimlimjustin', "_blank");
                    github.focus()
                    output = ""
                }else if(input === "https://kimlim.net" || input === "kimlim.net" || input === "http://kimlim.net"){
                    output = `This website is designed and built by Justin Maximillian Kimlim using HTML, CSS and Vanilla JavaScript and was inspired by several websites over the internet. Find out the repo of this website <a href = "https://github.com/kimlimjustin/kimlimjustin.github.io" target="_blank" rel="noopener">here.</a>`
                }else if(input === "hello" || input === "hi"){
                    window.open('mailto:kimlimjustin@gmail.com?Subject=Hello');
                    output = `Say hello to me <a href="mailto:kimlimjustin@gmail.com?Subject=Hello">here!</a>`;
                }else if(input === "refresh"){
                    location.reload()
                    output = ""
                }else if(input === "whoami"){
                    output = "You are human when you type this command :)"
                }else if(input === "pwd"){
                    output = "https://kimlim.net"
                }else if(input.split(' ')[0] === "sudo"){
                    output = "Are you thinking you are on linux man?"
                }else if(input.split(' ')[0] === "cd"){
                    output = "Where do you want to go? This is just a website that simulates terminal haha."
                }else if(input === "ls"){
                    output = "Nothing here xd."
                }else if(input.split(' ')[0] === "ping"){
                    output = "Where do you want to ping to? Haha"
                }else if(input.split(' ')[0] === "echo"){
                    output = input.split(' ').slice(1).join(' ')
                }else if(input.split(' ')[0] === "kill"){
                    output = "Please don't kill me 😆😆"
                }else if(input.split(' ')[0] === "man"){
                    output = "What?"
                }else if(input.split(' ')[0] === "shutdown"){
                    output = "Wait? what???"
                }else if(input === "whoareu" || input === "whoareyou"){
                    output = `I'm human :) Contact me <a href = "kimlimjustin@gmail.com">here</a>`
                }else if(input === "languages" || input === "language"){
                    output = "I speak Indonesian, English, Chinese and Japanese. I code in JavaScript, Python in most and some others."
                }else if(input === "clear cache"){
                    localStorage.clear()
                    output = "Localstorage has been cleared :)"
                }else if(input === "date"){
                    output = new Date()
                }else if(input === "projects"){
                    output = `<span>My pinned repositories:</span>
                    <ul>${PROJECTS.map(repo => `<li><a href="${repo.link}" target="_blank" rel="noopener">${repo.owner}/${repo.repo}</a> (${repo.description})</li>`).join('')}</ul>`
                }else if(input === "fork" || input == "star"){
                    let repo = window.open('https://github.com/kimlimjustin/kimlimjustin.github.io', "_blank");
                    repo.focus()
                    output = ""
                }else if(input.split(' ')[0] === "lang" || input.split(' ')[0] === "language"){
                    if(input.trim() === "lang" || input.trim() === "language"){
                        output = `<span>Usage: lang [language code]. Available languages:<ul>${multilingual.availableLanguages.map(lang => `<li>${lang}</li>`).join('')}</span>`
                    }else{
                        let langCode = input.split(' ').slice(1).join(' ');
                        if(multilingual.availableLanguagesCode.indexOf(langCode) === -1) output = `${langCode} is not recognized as language code.`
                        else{
                            Object.keys(multilingual.resources).forEach(en =>{
                                findAndReplaceDOMText(document.body, {
                                    find: multilingual.resources[en][currentLang] || en,
                                    replace: multilingual.resources[en][langCode]
                                })
                            })
                            output = ""
                        }
                        currentLang = langCode;
                        document.querySelector("html").setAttribute("lang", langCode);
                    }
                }
                RETURN_VALUE(input, output)

                if(input === "clear" || input === "cls") REMOVE_LOG()
                if(input === "exit") EXIT()
                inputTerminal.value = "";
                terminalElement.scrollTop = terminalElement.scrollHeight;
            }
        }

        inputTerminal.addEventListener("keypress", inputTerminalHandler)
        let i = PREVIOUS_COMMANDS.length
        document.addEventListener('keydown', e => {
            if(e.keyCode === 38){
                e.preventDefault()
                i > 0 ? i = i - 1: i = PREVIOUS_COMMANDS.length -1
                if(PREVIOUS_COMMANDS[i]) inputTerminal.value = PREVIOUS_COMMANDS[i]
                inputTerminal.focus()
            }else if(e.keyCode === 40){
                e.preventDefault()
                i < PREVIOUS_COMMANDS.length -1 ? i = i + 1: i = 0
                if(PREVIOUS_COMMANDS[i]) inputTerminal.value = PREVIOUS_COMMANDS[i]
                inputTerminal.focus()
            }
        })
        terminalElement.addEventListener("click", () => inputTerminal.focus())
        document.body.addEventListener("click", e => {
            if(e.target === modal) EXIT()
        })
    })
})