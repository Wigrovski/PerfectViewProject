const validform = function() {
    const calcItem = document.querySelectorAll('input.calc-item')
    const formName = document.querySelectorAll('[name=user_name]')
    const formMail = document.querySelectorAll('.form-email')
    const formTel = document.querySelectorAll('.form-phone')
    const formMesg = document.querySelectorAll('.mess')


calcItem.forEach((elem) => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[\D+]/gi, '')
        })
    })
    formName.forEach((elem) => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\sА-Яа-я]|[!@#$%^&*().,':%"№;]/, '')
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
    formMesg.forEach((elem) => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\wgit/g, '')
        })
    })
}

export default validform