

const hour = new Date().getHours()

if (hour >= 7 && hour <=17){
    document.body.classList.remove('noche')
    document.body.classList.add('dia')
} else if (hour >=17 && hour <= 19){
    document.body.classList.remove('dia')
    document.body.classList.add('atardecer')
} else {
    document.body.classList.add('noche')
}