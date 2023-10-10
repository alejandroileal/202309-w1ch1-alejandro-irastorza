

const playCards = () => {

  const generateCardsClasses = (minNum = 0, maxNum = 0) => {

    const generateNumberRange = (min = 0, max = 0) => {

        let numberRangeArray = []
    
        for ( let i = min; i <= max; i++) {
    
            numberRangeArray.push(i)
    
        }
    
        return numberRangeArray
    
    };

    const cardNumbers = generateNumberRange(minNum, maxNum);

    const cardClasses = ['j', 'q', 'r', 'a'];

    const cardClassesAdded = [];

    cardNumbers.map((number) => String(cardClassesAdded.push(number)));

    cardClasses.map((classHere) => cardClassesAdded.push(classHere));

    return cardClassesAdded;

};

const generateCardByType = (cardTypeHere) => {

const cardClasses = generateCardsClasses(2, 10)

const cardObject = [];

for ( let i = 2; i <= 14; i++ ) {

    cardObject.push({
        cardValue: i,
        cardClass: cardClasses[i - 2].toString(),
        cardType: cardTypeHere
    })

}

return cardObject

};

const generateMasterCards = () => {

const caseSwords = generateCardByType('♠️');
const caseClubs = generateCardByType('♣️');
const caseDiamond = generateCardByType('♦️');
const caseHearts = generateCardByType('♥️');

const masterCardObject = [];

caseSwords.map((item) => masterCardObject.push(item));
caseClubs.map((item) => masterCardObject.push(item));
caseDiamond.map((item) => masterCardObject.push(item));
caseHearts.map((item) => masterCardObject.push(item));


return masterCardObject

};

const generateRandomNumberByRange = (maxNumber = 0) => {

    return Math.trunc(Math.random() * maxNumber)
};

const mixCards = (cardMasterArray) => {

    const cardMasterMixed = [];
    const cardIndex = []

    do {

        let randomIndex = generateRandomNumberByRange(52)

        if ( cardIndex.includes(randomIndex) === false){

            cardMasterMixed.push(cardMaster[randomIndex])
            cardIndex.push(randomIndex)
        }

    } while ( cardIndex.length < 52)

return cardMasterMixed
};


const doSmth = (event) => {

    const firstIcon = document.querySelector('#firstCardIcon')

    firstIcon.innerHTML =
    `:)`
}

const cardMaster = generateMasterCards()
const mixedCards = mixCards(cardMaster)

console.log(mixedCards)

const dom = document;



    const gameElemet = dom.querySelector('button')


gameElemet.addEventListener('click', doSmth)

};

playCards()

