let userName = window.prompt('Please enter your name:')
let userScore = 0;

for(let i = 0; i < questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer === question.correctAnswer){
        console.log('Correct')
        userScore=userScore+ 10

    }
}
{
    text: `What is the first book of the Old Testament?
    A. Leviticus
    B. Numbers
    C. Genesis
    D. Exodus`,
    correctAnswer = "C"
}
window.alert('Your score is: ' +userScore)
{
    text: 'True or False 5==="5"?'
text: 'A. True'
Text: 'B. False'
    correctAnswer = "B"
    
}
window.alert('your score is:'+userScore)

let serializedGames= localStorage .getItem('games')
let games;
if(serializedGames=== null){
    games=[]
}else {
    games= JSON.parse(serializedGames)

}

let games =[]

let game= {
    user: userName,
    score: userScore
}
games.push(game)
console.log(games)

let serializedGames= JSON.stringify(games)
localStorage.setItem('games',serializedGames)