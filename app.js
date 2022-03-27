const correctAnswers =  ['B','B','B','B']
const form = document.querySelector('.quiz-form')
const tempParagraph =  document.createElement('p')
const questions = document.querySelectorAll('.my-5') 
form.addEventListener('submit', event  => {
    event.preventDefault()
    let score = 0
    const optionsValues = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]    
    optionsValues.forEach((optionsValue, index)=> {
        if(optionsValue === correctAnswers[index]){
            score += 25
            questions[index + 1].style.color = "#00FF00"
            form.insertAdjacentElement('afterend', tempParagraph)
            tempParagraph.style.fontSize = "2rem"
            tempParagraph.textContent = `Sua nota foi ${score}`
            tempParagraph.style.color = '##00FF00'
            return
        }
        questions[index + 1].style.color = "#FF0000"
        form.insertAdjacentElement('afterend', tempParagraph)
        tempParagraph.style.color = '#41ead4'
        tempParagraph.textContent = `Sua nota foi ${score}`

    })
    console.log(score)
})