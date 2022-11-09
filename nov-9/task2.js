
let subj = document.getElementById('sub')
let des = document.getElementById('des')
let typeA = document.getElementById('typeA')
let typeB = document.getElementById('typeB')
let typeC = document.getElementById('typeC')
let technology = document.getElementById('technology')
let card = document.getElementById('card')
card.style.display = 'none'
card.style.border = '1px solid black'
card.style.width = '400px'

function setInp(inp) {
    sessionStorage.setItem(inp.id , inp.value)
}
function setBox(box) {
    if(box.checked){
    sessionStorage.setItem(box.id , box.name)
    }
}

function subm() {
subj.innerHTML = 'Subject: '+ sessionStorage.getItem('subject')
des.innerHTML = 'Description: '+ sessionStorage.getItem('description')
technology.innerHTML = 'Technology: '+ sessionStorage.getItem('tech')
typeA.innerHTML = sessionStorage.getItem('type1')
typeB.innerHTML = sessionStorage.getItem('type2')
typeC.innerHTML = sessionStorage.getItem('type3')
card.style.display = 'block'

}