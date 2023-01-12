const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days')
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
    let timeInterval

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow)/1000
        let days = 'Дней: ' + Math.floor(timeRemaining / 60 / 60 / 24) 
        let hours = Math.floor((timeRemaining / 60 / 60 % 24))
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)
        
        return {timeRemaining, days, hours, minutes, seconds}
    }
    function showTimer(days, hours, minutes, seconds) {
        let getTime = getTimeRemaining()
        timerDays.textContent = getTime.days
        timerHours.textContent = getTime.hours >= 10 ? getTime.hours : `0${getTime.hours}`
        timerMinutes.textContent = getTime.minutes >= 10 ? getTime.minutes : `0${getTime.minutes}`
        timerSeconds.textContent = getTime.seconds >= 10 ? getTime.seconds : `0${getTime.seconds}`
        
    }
    timeInterval = setInterval( () => {
        let getTime = getTimeRemaining()
        if(getTime.timeRemaining > 0) {
            showTimer()
        } else { clearInterval(timeInterval), 1000}    
}, 1000)
}

export default timer