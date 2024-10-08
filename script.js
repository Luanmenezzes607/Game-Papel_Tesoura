const optionImage = document.querySelectorAll(".option-image");
const container= document.querySelector('.container'); 
const resultText = document.getElementById('result-text')
const userResult = document.querySelector('#userResult')
const computerResult = document.querySelector('#computerResult')

const computerImg = ['img/pedra.png', 'img/papel.png', 'img/tesoura.png']

const winner = {
    RR: 'Empate',
    RP : 'Computador',
    RS : 'Você',
    PP : 'Empate',
    PR : 'Você',
    PS : 'Computador',
    SS : 'Empate',
    SR : 'Computador',
    SP : 'Você'
}

optionImage.forEach( img  => {
    img.addEventListener('click', handleOptionClick)
});

function handleOptionClick(event){
    const clickedImage = event.currentTarget;
    const userIndex = Array.from(optionImage).indexOf(clickedImage)

    container.classList.add('start')
    resultText.textContent = '...'

    setTimeout(()=>{
        container.classList.remove('start')

        const randomNumber = Math.floor(Math.random() * computerImg.length);

        computerResult.src = computerImg[randomNumber]
        userResult.src = computerImg[userIndex]

        const userValue = ['R', 'P', 'S'] [userIndex]
        const computerValue = ['R', 'P', 'S'] [randomNumber]
        const userComputerResult = userValue + computerValue
        const finalResult = winner[userComputerResult]

        resultText.textContent = userValue === computerValue ? 'Empate' : finalResult + ' Ganhou!'
    }, 2000)
      
    computerResult.src = computerImg[0]
    userResult.src = computerImg[0]
}

