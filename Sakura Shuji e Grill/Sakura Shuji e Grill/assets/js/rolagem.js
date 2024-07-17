console.log('Unico sempre ativão')

const every = document.querySelectorAll('.hidden')

//aqi se adiciona intersetion observer
const observer = new IntersectionObserver((vigilante) => {
    vigilante.forEach ((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('show')
        }else{
            entrada.target.classList.remove('show')
        }
        console.log(vigilante)
    })
})

//Aqui adiciona o elemento que você quer que ele observe
every.forEach((elements) => observer.observe(elements))