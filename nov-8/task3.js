
let para = document.getElementById('paragraph')
para.style.width = '400px'
para.style.border = '1px solid black'
para.style.padding = '10px'
para.style.fontSize = '12pt'
let boxes = document.getElementsByClassName('box')
let sizes = document.getElementById('size')

for (let i = 12; i <= 64; i += 2) { 
    sizes.innerHTML += `<option value=${i}>${i}pt</option>`
}

function sizer(size) {
    para.style.fontSize = size.value + 'pt'
}
para.style.fontFamily = 'Fantasy'
function font(x){
if(x.value == 'sans'){
    para.style.fontFamily = 'OpenSans'
}else if(x.value == 'arial'){
    para.style.fontFamily = 'Arial'
}
else if(x.value == 'fantasy'){
    para.style.fontFamily = 'Fantasy'
}
}


function checkb(box){
    console.log(box.value)
   
        if(box.value == 'on'){
            para.style[box.name] = box.id
           box.value = 'off'
    }else if(box.value == 'off'){
        para.style[box.name] = "unset"
        box.value = 'on'
    }
}