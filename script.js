let theme_button = document.getElementById("theme")
let theme_button_value = 'white'
let test = document.getElementById('test')
theme_button.onclick = function(){
    if (theme_button_value == 'white') {
        document.documentElement.style.display = 'none';
        document.head.insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" href="/styles/light.css" onload="document.documentElement.style.display = \'\'">',
        );
        theme_button.style.transform = 'rotate(360deg)'
        theme_button_value = 'black'
    } else{
        document.body.style.transition = '400ms'
        document.head.insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" href="/styles/dark.css" onload="document.documentElement.style.display = \'\'">',
        );
        theme_button_value = 'white'
        theme_button.style.transform = 'rotate(180deg)'
}}