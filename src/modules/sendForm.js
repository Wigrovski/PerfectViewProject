const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо наш менеджер свяжется с вами'



    const validate = (list) => {
        let success = true

        list.forEach((item) => {
            if (item.classList.contains('form-email')) {
                if (!item.value.match(/.+@.+\..+/gi)) {
                    success = false;
                    return false;
                }
            } else if (item.classList.contains('form-phone')) {
                if (!item.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi)) {
                    success = false;
                    return false;
                }
            } else if (item.classList.contains('form-name') || item.classList.contains('top-form')) {
                if (!item.value.match(/^[а-яА-Я][а-яА-Я- ]+[а-яА-Я]?$/g)) {
                    success = false;
                    return false;
                }
            } else if (item.classList.contains('mess')) {
                if (item.value.match(/[a-zA-Z'][a-zA-Z']+[a-zA-Z']?$/gi)) {
                    success = false;
                    console.log(item);
                    return false;
                }
            }
        })
        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElement = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            if(val.length !== 0) {
                formBody[key] = val
            }
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)
            if (elem.type === 'block') {
                if (element.textContent !== '0') {
                    formBody[elem.id] = element.textContent
                }
            } else if (elem.type === 'input') {
                if (element.value !== '0') {
                    formBody[elem.id] = element.value
                }
            }
        }) 

        if (validate(formElement)) {
            sendData(formBody).then(data => {
                statusBlock.style.color = '#ffff'
                statusBlock.textContent = successText
                formElement.forEach(input => {
                    input.value = ''
                })
            })
            .catch ((error) => {
                statusBlock.style.color = '#ffff'
                statusBlock.textContent = errorText
            })
        } else { 
            alert('Данные не верны')
            statusBlock.textContent = errorText
        }

    }

    try {
        if(!form) {
            throw new Error('Форма отсутствует')
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            submitForm()
            
        })
    } catch(error) {
        console.log(error.message);

    }
}

export default sendForm