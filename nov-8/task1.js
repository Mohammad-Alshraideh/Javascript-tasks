let h1 = document.createElement('h1')
let body = document.getElementsByTagName('body')
h1.setAttribute('id', 'h1')
body[0].appendChild(h1)
h1.innerHTML = 'Hello World!'
h1.style.backgroundColor = 'yellow'
h1.style.border = '1px solid black'
h1.style.padding = '10px'
h1.style.textAlign = 'center'
h1.style.width = '20%'