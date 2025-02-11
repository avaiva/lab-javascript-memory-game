const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let htmlAdd = '';
  memoryGame.shuffleCards()

  memoryGame.cards.forEach((pic) => {
    htmlAdd += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = htmlAdd;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {

      card.classList.add('turned');
      // console.log(card.getAttribute("data-card-name"))
      memoryGame.pickedCards.push(card);
      // console.log(memoryGame.pickedCards);


      if(memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards[0].getAttribute("data-card-name")
        const card2 = memoryGame.pickedCards[1].getAttribute("data-card-name")
        const comparisonResult = memoryGame.checkIfPair(card1, card2);

        document.querySelector("#pairs-clicked").innerHTML = memoryGame.pairsClicked;
       
        if(comparisonResult) {
          // display result in inner html
          document.querySelector("#pairs-guessed").innerHTML = memoryGame.pairsGuessed;
          memoryGame.pickedCards = []
        } else {
          //turn cards around again
          setTimeout(() => {

            if(memoryGame.pickedCards[0].classList[1] === "turned" && memoryGame.pickedCards[1].classList[1] === "turned") {
              // document.querySelector(`[data-card-name = "${card1}"]`).classList.remove('turned');
              // document.querySelector(`[data-card-name = "${card2}"]`).classList.remove('turned');
              memoryGame.pickedCards[0].classList.remove("turned")
              memoryGame.pickedCards[1].classList.remove("turned")
              memoryGame.pickedCards = [];
            }
          }, 1000);
        } 
      }

      console.log(`Card clicked: ${card}`);
    });
  });
});

