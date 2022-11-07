
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]

function shorterInArray (arr){
let arr1 = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].length < arr1.length){
        arr1 = arr[i]
    }
    
  }
return arr1

}

document.write(shorterInArray(strings))