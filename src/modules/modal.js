import { animate } from "./helpers"

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if(document.documentElement.clientWidth > 768) {
                animate({
                    duration: 80,
                    timing(timeFraction) {
                        return timeFraction
                    },
                    draw(progress) {
                        modal.style.display = 'block'
                        modal.style.opacity = '0'
                        setTimeout(() => {
                            modal.style.transition = 'all .7s ease-in-out'
                            modal.style.opacity = '1'
                        })
                    }
                }, 50)
            }
            modal.style.display = 'block'
        })
        
    })
    //Делегирование события закрытия  модального окна (урок 22)
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
            modal.style.opacity = ''
            modal.style.transition = ''
        }
    })

}

export default modal