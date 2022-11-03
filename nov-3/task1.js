

const mark = 72

if(mark >= 0 && mark < 50){
    document.write('Fail')
}else if(mark >=50 && mark <= 59){
    document.write('D')
}else if(mark >=60 && mark <= 69){
    document.write('C')
}else if(mark >=70 && mark <= 79){
    document.write('B')
}else if(mark >=80 && mark <=89){
    document.write('A')
}else if(mark >=90 && mark <= 100){
    document.write('A+')
}else{
    document.write("invalid input")
}


const pi = 3.14;

const radius = 20;

const circumference = 2 * pi * radius

document.write(`<br> the circumference is: ${circumference}`  )