function largestNumber(a,b){
    let largest
    if(a > b){
       largest = a
    }else if(b > a){
        largest = b
    }else{
        return "equal numbers"
    }

      return `The Two Numbers are: ${a} and ${b} and the largest number is ${largest}`

}
document.write( largestNumber(7,18))