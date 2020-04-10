let startUrl = `https://www.thecocktaildb.com/api/json/v1/1/`;
async function getTypeOneAnswers() {
  result = [];
  while (result.length != 4) {
    let current = await fetch(startUrl + 'random.php');
    current = await current.json();
    current = current.drinks[0];
    if (
      result.every((drink) => {
        return current.idDrink != drink.idDrink;
      })
    )
      result.push(current);
  }
  return result;
}
function getAnswerObjects(drinks) {
  result = [];
  for (let i = 0; i < 4; i++) {
    result.push(new Answer(drinks[i]));
  }
  return result;
}
class Ingredient {
  name;
  amount;
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }
  getString() {
    return `${this.amount ? this.amount + ' of ' : ' '} ${this.name}`;
  }
}
class Answer {
  name;
  imgUrl;
  isCorrect;
  ingredients = [];
  constructor(fullDrink) {
    this.name = fullDrink.strDrink;
    this.imgUrl = fullDrink.strDrinkThumb;
    this.isCorrect = false;
    this.getIngredients(fullDrink);
  }
  getIngredients(fullDrink) {
    let i = 0;
    while (fullDrink[`strIngredient${++i}`])
      this.ingredients.push(
        new Ingredient(
          fullDrink[`strIngredient${i}`],
          fullDrink[`strMeasure${i}`]
        )
      );
  }
  getQuestion() {
    result = `this cocktail is made from `;
    for (let i = 0; i < this.ingredients.length - 1; i++)
      result =
        result +
        this.ingredients[i].getString() +
        (i == this.ingredients.length - 2 ? ' and ' : ', ');
    return `${result}${this.ingredients[
      this.ingredients.length - 1
    ].getString()}?`;
  }
}

class Question {
  allAnswers;
  correctAnswer;
  async setAnswers() {
    let drinks = await getTypeOneAnswers();
    this.allAnswers = getAnswerObjects(drinks);
  }
  setCorrectAnswer() {
    this.correctAnswer = Math.floor(4 * Math.random());
    this.allAnswers[this.correctAnswer].isCorrect = true;
  }
  async show(quiz) {
    let questionContainer = document.querySelector('.question>p');
    questionContainer.innerText = this.allAnswers[
      this.correctAnswer
    ].getQuestion();
    let container = document.querySelector('.answers');
    container.innerHTML = '';
    for (let i = 0; i < 4; i++) {
      let div = document.createElement('div');
      div.classList.add('answer');
      let img = document.createElement('img');
      img.src = this.allAnswers[i].imgUrl;
      let p = document.createElement('p');
      p.innerText = this.allAnswers[i].name;
      div.appendChild(img);
      div.appendChild(p);
      container.appendChild(div);
      div.addEventListener('click', async () => {
        quiz.correctAnswers += i == this.correctAnswer ? 1 : 0;
        console.log(quiz.correctAnswers);
        quiz.moveToNextQuestion();
      });
    }
  }
}

class Quiz {
  currentQuestion;
  nextQuestion;
  correctAnswers;
  constructor() {
    this.correctAnswers = 0;
  }
  async getQuestion() {
    let result = new Question();
    await result.setAnswers();
    result.setCorrectAnswer();
    return result;
  }
  async setCurrent() {
    this.currentQuestion = await this.getQuestion();
  }
  async setNext() {
    this.nextQuestion = await this.getQuestion();
  }
  async init() {
    await this.setCurrent();
    await this.setNext();
    this.currentQuestion.show(this);
  }
  async moveToNextQuestion() {
    this.currentQuestion = this.nextQuestion;
    await this.currentQuestion.show(this);
    this.setNext();
  }
}
let quiz = new Quiz();
quiz.init();
setTimeout(() => {
  console.log(quiz);
}, 5000);
