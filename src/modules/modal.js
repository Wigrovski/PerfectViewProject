const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')

    function animate({timing, draw, duration}) {

        let start = performance.now()
        requestAnimationFrame(function animate(time) {
        
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);
            draw(progress); // отрисовать её
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }    
    });
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if(document.documentElement.clientWidth > 768) {
                animate({
                    duration: 20,
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
                }, 10)
            }
            modal.style.display = 'block'
        })
        
    })
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
            modal.style.opacity = ''
            modal.style.transition = ''
        }
    })

}

export default modal