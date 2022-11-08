
let short = document.getElementById('short');
let match = document.getElementById('match');
let btn = document.getElementById('btn');
short.style.visibility = 'hidden';
match.style.visibility = 'hidden';
btn.style.visibility = 'hidden';
let check = false
let val = 'string'
function getVal(inp){
    
    if(inp.id == 'password' && inp.value.length < 6){
        short.style.visibility = 'visible'

    }else if(inp.id == 'password' && inp.value.length >= 6){
        short.style.visibility = 'hidden'
         val = inp.value
        check = true
    }
    if(inp.id == 'repeat-password' && check == true){
          if(inp.value === val){
             btn.style.visibility = 'visible'
             match.style.visibility = 'hidden';
          }else{
            btn.style.visibility = 'hidden';
            match.style.visibility = 'visible';
          }
    }
}