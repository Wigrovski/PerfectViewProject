const validform = function() {
    const calcItem = document.querySelectorAll('input.calc-item')
    const formName = document.querySelectorAll('.form-name')
    const formMail = document.querySelectorAll('.form-email')
    const formTel = document.querySelectorAll('.form-phone')


    calcItem.forEach((elem) => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[\D+]/gi, '')
        })
    })
    formName.forEach((elem) => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/^[a-zA-Z]|[!@#$%^&*().,':%"№;]$/, '')
        })
    })
    formMail.forEach((elem) => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z\[!@\'\-\*\.\\_\~]/g, '')
        })
    })
    formTel.forEach((elem) => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\()\d+\-]/, '')
        })
    })
}

export default validform