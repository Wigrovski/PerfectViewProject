const greetering = document.getElementById('greetering')
const today= document.getElementById('today')
const time = document.getElementById('time')
const countDown = document.getElementById('countdown')
const monthArr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const dayWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскрессенье']

const myDate = new Date()
const monthNum = myDate.getMonth()
const dayNum = myDate.getDay() - 1

let myHours = myDate.getHours()
let dateNy = new Date('31 december 2023').getTime()
let timeRemaining = (dateNy - myDate)/1000
let daysNy = Math.floor(timeRemaining / 60 / 60 / 24) 
countDown.textContent = 'До Нового года осталось: ' + daysNy + ' дней'

switch(true) {
    case (myHours >= 0) && (myHours < 6) : greetering.textContent = 'Доброй ночи'
    break;
    case (myHours >= 6) && (myHours < 12) : greetering.textContent = 'Доброй утро'
    break;
    case (myHours >= 12) && (myHours < 18) : greetering.textContent = 'Добрый день'
    break;
    case (myHours >= 18) && (myHours < 24) : greetering.textContent = 'Добрый вечер'
    break;
}

dayWeek.forEach((item, i, dayWeek) => {
    if (dayNum == i) {
        today.textContent = `Сегодня: ${dayWeek[i]}`
    }
})

let currentTime = myDate.toLocaleTimeString('en')
time.textContent = 'Текущее время: ' + currentTime




