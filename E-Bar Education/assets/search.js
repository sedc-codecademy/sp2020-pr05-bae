const cocktailsShow = document.querySelector('.cocktailsShow');
const searchBar = document.querySelector('.searchBar');
const searchBtn = document.querySelector('.searchBtn');
const cocktailsList = document.querySelector('.cocktails-list');

let cocktailsByName = [];
let allCocktails = [];

window.onload = () => {
    document.querySelector('.searchBar').onkeypress = function searchKeyPressed (e) {
       if (e.keyCode == 13) {
           document.querySelector('.searchBtn').click();
       }
   };
};

searchBar.addEventListener('keyup', (e) => {
    let searchString = e.target.value;
    if(searchString === '') {
        cocktailsList.classList.add('hide');
    }
});

searchBtn.addEventListener('click', async () => {
    cocktailsList.classList.remove('hide');
    let success = await loadCocktails(searchBar.value);
    if(!success)
    loadCocktailsByName(searchBar.value);
});

const loadCocktails = async (input) => {
    try {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`);
      allCocktails = await res.json();
      allCocktails = allCocktails.drinks;
      displayCocktails(allCocktails);
    } catch (err) {
        return false
    }
    return true
};

const loadCocktailsByName = async (input) => {
    try {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
        cocktailsByName = await res.json();
        cocktailsByName = cocktailsByName.drinks;
        displayCocktails(cocktailsByName);
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
    cocktailsShow.innerHTML = cocktailString; //To be done
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


