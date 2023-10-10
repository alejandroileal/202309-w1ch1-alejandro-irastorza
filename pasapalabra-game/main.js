const app = () => {

    const sumCorrectCounter = () => {

        return counterCorrectAnswers++

    }

    const sumWrongCounter = () => {

        return counterWrongAnswers++

    }

    const sumCounterPlusOne = () => {

        return turnCounter = turnCounter + 1
    };

    const printFinalStatus = () => {

        const dom = document;

        domCurrentQuestion = dom.querySelector('.question');

        if ( counterCorrectAnswers > counterWrongAnswers ) {

            domCurrentQuestion.textContent = `¡Ganaste!`

        } else {

            domCurrentQuestion.textContent = `¡Perdiste!`

        }
        
        console.log(domCurrentQuestion)


    }

    const printNextQuestion = () => {

        const dom = document;

        domCurrentQuestion = dom.querySelector('.question');
        
        domCurrentQuestion.textContent = `${questionLibrary[turnCounter][0].question}`

    };

    const printFirstQuestionOfArray = () => {

        const dom = document;

        domCurrentQuestion = dom.querySelector('.question');
        
        domCurrentQuestion.innerHTML = 
        `<label for="answer" class="question">${questionLibrary[0][0].question}</label>`

    }

    const deleteLetter = () => {

        const dom = document;
        const letterFinder = questionLibrary[turnCounter][1].letter
        domLetterElement = dom.querySelector(`.${letterFinder}-letter`);

        domLetterElement.innerHTML =
        `<div class="answered-letter ${letterFinder}-letter">
            
            <p>${letterFinder.toUpperCase()}</p>
            
        </div>`

        console.log(letterFinder)

    }

    const deleteLetterFromArray = () => {

        const dom = document;
        const letterFinder = questionLibrary[passedIndexes[0]][3].letter
        domLetterElement = dom.querySelector(`.${letterFinder}-letter`);

        domLetterElement.innerHTML =
        `<div class="answered-letter ${letterFinder}-letter">
            
            <p>${letterFinder.toUpperCase()}</p>
            
        </div>`


    }

    const deleteIndexOfArray = () => {

        passedIndexes.shift()

    }

    const printCorrectCounter = () => {

        const dom = document;

        const domCorrectCounter = dom.querySelector('.corrects-counter')

        domCorrectCounter.textContent = `${counterCorrectAnswers}`


    }

    const printInorrectCounter = () => {

        const dom = document;

        const domInorrectCounter = dom.querySelector('.incorrects-counter')

        domInorrectCounter.textContent = `${counterWrongAnswers}`


    }

    const printTurnCounter = () => {

        const dom = document;

        const domCounter = dom.querySelector('.turn-counter')

        domCounter.textContent = `${turnCounter}` 

    }

    const firstRoundCase = () => {

        const formElement = event.target;
        const correctAnswer = questionLibrary[turnCounter][0].answer;
        const userAnswer = formElement.elements.namedItem('answer').value

        if ( correctAnswer.toLowerCase() === userAnswer.toLowerCase() ) {

            sumCorrectCounter();
            printCorrectCounter();
            console.log('es correcto')

        } else {

            sumWrongCounter();
            printInorrectCounter();
            console.log('no es correcto')

        };

        deleteLetter();
        sumCounterPlusOne();
        printTurnCounter();
        printNextQuestion();
        

    }

    const secondRoundCase = () => {

        const formElement = event.target;
        const correctAnswer = questionLibrary[passedIndexes[0]][0].answer;
        const userAnswer = formElement.elements.namedItem('answer').value

        if ( correctAnswer.toLowerCase() === userAnswer.toLowerCase() ) {

            sumCorrectCounter();
            console.log('es correcto')

        } else {

            sumWrongCounter();
            console.log('no es correcto')

        };

        deleteLetterFromArray()
        sumCounterPlusOne();
        deleteIndexOfArray()
        printFirstQuestionOfArray()

    };

    const sendButton = (event) => {

        event.preventDefault();

        if ( turnCounter === 27 && passedIndexes.length !== 0 ) {

            secondRoundCaseSwitch = true;

        };

        if ( turnCounter >= 27 && passedIndexes.length === 0 ) {

            printFinalStatus();

        };

        if ( secondRoundCaseSwitch ) {

            secondRoundCase();

        } else {

            firstRoundCase();

        }

    };

    const passWord = (event) => {

        event.preventDefault()

        passedIndexes.push(turnCounter)

        console.log(passedIndexes)

        sumCounterPlusOne();
        printTurnCounter();
        printNextQuestion();

    }

    const endGameCase = (event) => {

        event.preventDefault();

        printFinalStatus();
    }

        const questionLibrary = [  
            [
                {
                    question: 'Ingrediente mas utilizado en la comida japonesa', 
                    answer: 'arroz'
                },
        
                {
                    letter:'a'
                }
            ],
        
        [
                {
                    question: '¿Cómo se llama la capital de Portugal?', 
                    answer: 'Lisboa'
                },
                
                {
                    letter:'b'
                }
        ],
    
        [
            {
                question: 'Construcción que sirve para vivienda', 
                answer: 'Casa'
            },
            
            {
                letter:'c'
            }
    ],
    
    [
        {
            question: 'Artefacto que da un número del 1 al 6', 
            answer: 'Dado'
        },
        
        {
            letter:'d'
        }
    ],
    
    [
        {
            question: 'Animal grande con trompa', 
            answer: 'Elefante'
        },
        
        {
            letter:'e'
        }
    ],
    
    [
        {
            question: 'País donde es común comer caracoles', 
            answer: 'Francia'
        },
        
        {
            letter:'f'
        }
    ],
        
        ];
    
        let counterCorrectAnswers = 0;
        let counterWrongAnswers = 0;
        let turnCounter = 0;
        const passedIndexes = [];
        let secondRoundCaseSwitch = false;
    
        const dom = document;
        const domFormElement = dom.querySelector('form')
        let domCurrentQuestion = dom.querySelector('.question');
        const domPassButton = dom.querySelector('.pass-button');
        const domEndButton = dom.querySelector('.end-button')
    
        
        printNextQuestion()
    
        domFormElement.addEventListener('submit', sendButton);
        domPassButton.addEventListener('click', passWord)
        domEndButton.addEventListener('click', endGameCase)
    

    }

    app()


    
