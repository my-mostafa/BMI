let kg = document.querySelector("#kg")
let cm = document.querySelector("#cm")
let lbkm = document.querySelector(".lbkm")
let lbcm = document.querySelector(".lbcm")
let avgnum1 = document.querySelector(".avgnum1")
let avgtext1 = document.querySelector(".avgtext1")
let avg 
let power
let vazn


kg.addEventListener("input",funbmi)


cm.addEventListener("input",funbmi)


function funbmi(){
    lbkm.innerHTML = kg.value +" kg"
    vazn = kg.value
    lbcm.innerHTML = cm.value +" cm"
    power = ((cm.value)/100)*((cm.value)/100)
    avg = vazn/power
        avgnum1.innerHTML = avg.toFixed(1)
        if(avg.toFixed(1) < 18.5){
           avgtext1.innerHTML = "کم وزن" 
           avgtext1.style.color = 'yellow'
        }else if (avg < 24.9 && avg > 18.5){
            avgtext1.innerHTML = "نرمال" 
            avgtext1.style.color = 'green'
        }else if (avg < 29.9 && avg > 25){
            avgtext1.innerHTML = "اضافه وزن" 
            avgtext1.style.color = 'orange'
        }else if ( avg > 29.9){
            avgtext1.innerHTML = "چاق" 
            avgtext1.style.color = 'red'
        }
}






