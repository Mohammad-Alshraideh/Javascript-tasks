
let country = document.getElementById('country')

let img = document.createElement('img')


img.style.width = '400px'
country.appendChild(img)
let countryObj = {
    jordan: 'https://wallpapercave.com/wp/wp4205037.jpg' ,
    saudi: 'https://wallpapercave.com/wp/wp2182987.jpg',
    syria: 'https://flagpedia.net/data/flags/w1600/sy.png',
    palestine: 'https://th.bing.com/th/id/R.44b554ecceaa5c7f67a66f59de6f9416?rik=xhTR0f%2bqJ9iaEA&riu=http%3a%2f%2fs1.bwallpapers.com%2fwallpapers%2f2014%2f05%2f29%2fpalestine-flag_121354613.jpg&ehk=aADzx6MOJV49RacNhzeMRv3zv7D68YslRmQI71ogfRg%3d&risl=&pid=ImgRaw&r=0',
    iraq: 'https://th.bing.com/th/id/OIP.Ve_lUUkdzOVXuQFgej1QHwHaEy?pid=ImgDet&rs=1'
}
img.setAttribute('src' , countryObj.jordan )
function change(x){
    if(x.value == 'jordan'){
        img.setAttribute('src' , countryObj.jordan )
    }else if(x.value == 'saudi'){
        img.setAttribute('src' , countryObj.saudi )
    }else if(x.value == 'syria'){
        img.setAttribute('src' , countryObj.syria )
    }else if(x.value == 'palestine'){
        img.setAttribute('src' , countryObj.palestine )
    }else if(x.value == 'iraq'){
        img.setAttribute('src' , countryObj.iraq )
    }
}