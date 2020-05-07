const cocktailsList = document.querySelector('.cocktailsList');
const searchBar = document.querySelector('.searchBar');
const searchBtn = document.querySelector('.searchBtn');
const divHide = document.querySelector('.hide');

let ginCocktails = [];
let vodkaCocktails = [];
let whiskeyCocktails = [];
let rumCocktails = [];

window.onload = () => {
    document.querySelector('.searchBar').onkeypress = function searchKeyPressed(e) {
       if (e.keyCode == 13) {
           document.querySelector('.searchBtn').click();
       }
   };
};

searchBar.addEventListener('keyup', (e) => {
    // let searchString = e.target.value;
    // searchString = searchString.charAt(0).toUpperCase() + searchString.slice(1);
    // divHide.classList.remove('hide');
    if(e.target.value === '')
    divHide.classList.add('hide');

    // const filteredGinCocktails = ginCocktails.filter((cocktail) => {
    //     return cocktail.strDrink.includes(searchString);
    // });
    // displayCocktails(filteredGinCocktails);
});

searchBtn.addEventListener('click', () => {
    if(searchBar.value === 'gin') {
        divHide.classList.remove('hide')
        displayCocktails(ginCocktails)
    }
    if(searchBar.value === 'vodka') {
        divHide.classList.remove('hide')
        displayCocktails(vodkaCocktails)
    }
    if(searchBar.value === 'whiskey') {
        divHide.classList.remove('hide')
        displayCocktails(whiskeyCocktails)
    }
    if(searchBar.value === 'rum') {
        divHide.classList.remove('hide')
        displayCocktails(rumCocktails)
    }
});

const loadGinCocktails = async () => {
    try {
        const res =  await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin');
        ginCocktails = await res.json();
        // console.log(ginCocktails);
        ginCocktails = ginCocktails.drinks;
        displayCocktails(ginCocktails);
    } catch (err) {
        console.log(err);
    }
};

const loadVodkaCocktails = async () => {
    try {
        const res =  await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka');
        vodkaCocktails = await res.json();
        // console.log(vodkaCocktails);
        vodkaCocktails = vodkaCocktails.drinks;
        displayCocktails(vodkaCocktails);
    } catch (err) {
        console.log(err);
    }
};

const loadWhiskeyCocktails = async () => {
    try {
        const res =  await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Whiskey');
        whiskeyCocktails = await res.json();
        // console.log(whiskeyCocktails);
        whiskeyCocktails = whiskeyCocktails.drinks;
        displayCocktails(whiskeyCocktails);
    } catch (err) {
        console.log(err);
    }
};

const loadRumCocktails = async () => {
    try {
        const res =  await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum');
        rumCocktails = await res.json();
        // console.log(rumCocktails);
        rumCocktails = rumCocktails.drinks;
        displayCocktails(rumCocktails);
    } catch (err) {
        console.log(err);
    }
};

const displayCocktails = (cocktails) => {
    const cocktailString = cocktails.map((cocktail) => {
        return `
        <li class="cocktail">
        <h3>${cocktail.strDrink}</h3>
        <img src="${cocktail.strDrinkThumb}">
        </li>
        `;
    });
    cocktailsList.innerHTML = cocktailString; //To be done
};

function active() {
    const searchBar = document.querySelector('.searchBar');

    if(searchBar.value == 'Search Cocktails') {
        searchBar.value = ''
        searchBar.placeholder = 'Search Cocktails'
    }
};

function inactive() {
    const searchBar = document.querySelector('.searchBar');

    if(searchBar.value == '') {
        searchBar.value = ''
        searchBar.placeholder = 'Search Cocktails'
    }
};

loadGinCocktails();
loadVodkaCocktails();
loadWhiskeyCocktails();
loadRumCocktails();



