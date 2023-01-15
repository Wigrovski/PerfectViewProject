const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо наш менеджер свяжется с вами'



    const validate = (list) => {
        let success = true

        list.forEach((input) => {
            if (
                ((input.type === "text") && (input.value.length < 2)) ||
                ((input.type === "email") && ((!input.value.includes('@') || (!input.value.includes('.'))))) ||
                ((input.type === "tel") && ((input.value.length < 11)))) {
                success = false
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
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
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