const adviceId = document.querySelector('.advice')
const btn = document.querySelector('.btn')

btn.addEventListener("click", fetchAdvice)

async function fetchAdvice(url) {
    try {
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
        console.log(data.slip.advice)
        adviceId.innerHTML = '<p class="adviceId">Advice #' + data.slip.id +'</p><p class="adviceText">"'+ data.slip.advice +'"</p>'
    
    } catch(error) {
        console.log(error)
    }

}

fetchAdvice()