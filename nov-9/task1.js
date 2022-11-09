let card = document.getElementById('card')
card.style.display = 'none'
card.style.border = '1px solid black'
let pref = document.getElementById('prefered')

function set(inp) {
    if (inp.id == 'male' && inp.checked) {
        sessionStorage.removeItem('female')
        inp.value = 'Male'
        inp.id = 'gender'
    }
    if (inp.id == 'female' && inp.checked) {
        sessionStorage.removeItem('male')
        inp.value = 'Female'
        inp.id = 'gender'
    }

    sessionStorage.setItem(inp.id, inp.value)
}

function subm() {
    for (let i = 1; i < sessionStorage.length; i++) {

        localStorage.setItem(sessionStorage.key(i), sessionStorage.getItem(sessionStorage.key(i)))
    }
}

for (let i = 0; i < localStorage.length; i++) {
    localStorage.setItem(sessionStorage.key(i), sessionStorage.getItem(sessionStorage.key(i)))
    if (localStorage.key(i) == 'js') {
        pref.innerHTML += `<span >Javascript</span> <br>`
    }
    if (localStorage.key(i) == 'cs') {
        pref.innerHTML += `<span >C#</span> <br>`
    }
    if (localStorage.key(i) == 'py') {
        pref.innerHTML += `<span >Python</span> <br>`
    }

    if (localStorage.key(i) != 'js' && localStorage.key(i) != 'cs' && localStorage.key(i) != 'py') {
        card.innerHTML += `<p id="${localStorage.key(i)}"> ${localStorage.key(i)}: ${localStorage.getItem(localStorage.key(i))}  </P>`
    }
    card.style.display = 'block'
}

function clr() {
    localStorage.clear()
    sessionStorage.clear()
    card.style.display = 'none'
}
