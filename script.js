window.onload = function (){
    let d = new Date()
    let day = document.querySelector('.day')
    let date = document.querySelector('.date')
    let year = document.querySelector('.year')
    let month = document.querySelector('.month')
    let hours = document.querySelector('.hours')


    date.innerText = d.getDate()
    year.innerText = d.getFullYear()
    // hours.innerText = d.getHours()

    let lang = navigator.lang
    month.innerText = d.toLocaleString (lang, {month:'long'})
    day.innerText = d.toLocaleString (lang, {weekday:'long'})
    hours.innerText = d.toTimeString (lang,{hours:'long'})
}
// window.onload =function() {
//     let hours = document.querySelector('.hours')




// }