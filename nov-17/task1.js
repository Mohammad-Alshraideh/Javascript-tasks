



async function char() {


    const response = await fetch("https://www.breakingbadapi.com/api/characters")
    const chars = await response.json()
    console.log(chars)
     return chars

}

let charec = document.getElementById('chars')



async function rend(){
    let chars =  await  char()
  for (let i = 0; i < chars.length; i++) {
 
    charec.innerHTML += `
<option value = '${chars[i].name}' > ${chars[i].name} </option>
  `
}

}

rend()


let im = document.getElementById('img')
async function dd(t) {
  
    let chars =  await  char()
    for (let i = 0; i < chars.length; i++) {
        if(chars[i].name == t.value){
            im.src = chars[i].img
        }
        
    }
}

