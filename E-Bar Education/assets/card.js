let singleCoctail = document.querySelector(".single-cocktail");


fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let drinks = data.drinks;
    drinks.map((el) =>{
        console.log(el);

        let card = document.createElement("div");
        card.style.width = "33%";
        card.style.marginBottom = "12px";

        let divLeft = document.createElement("div");
        divLeft.style.width = "20%";
        divLeft.style.cssFloat = "left";

        let divRight = document.createElement("div");
        divRight.style.width = "60%";
        divRight.style.cssFloat = "right";

        card.appendChild(divLeft);
        card.appendChild(divRight);
        
        let thumbnail = document.createElement("img")
        thumbnail.style.width = "90%"
        thumbnail.style.height = "90%"
        thumbnail.src = el.strDrinkThumb;

        divLeft.appendChild(thumbnail);

        let alchohol = el.strAlcoholic;
        let glass = el.strGlass;

        let ingridients = [];
        let measurements = []

        ingridients.push( el.strMeasure1 + el.strIngredient1);
        ingridients.push(el.strMeasure2 + el.strIngredient2);
        ingridients.push(el.strMeasure3 + el.strIngredient3);
        ingridients.push(el.strMeasure4 + el.strIngredient4);
        ingridients.push(el.strMeasure5 + el.strIngredient5);
        ingridients.push(el.strMeasure6 + el.strIngredient6);
        ingridients.push(el.strMeasure7 + el.strIngredient7);
        ingridients.push(el.strMeasure8 + el.strIngredient8);

       
        let filteredIngridient = ingridients.filter(ingridient => ingridient != 0)

        let instructions = el.strInstructions;

        let title = document.createElement("span");
        title.innerHTML = `${el.strDrink}`;

        divRight.appendChild(title);

        let category = document.createElement("p");
        category.innerHTML = `${el.strCategory}`

        divRight.appendChild(category);

        //Single Card

        card.addEventListener("click",function(){
          singleCoctail.style.display = 'none'
          let singleCard= document.querySelector("#singleCard")
          singleCard.classList.remove("hide");
          let cardTop = document.querySelector("#topCard");
          let cardBot = document.querySelector("#botCard");

          cardTop.querySelector("h1").innerHTML = title.innerHTML;


          let img = cardTop.querySelector("img");
          img.src = thumbnail.src;
          img.style.height = "90%";

          let ulType = document.querySelector("#ulType");
          ulType.querySelector(":nth-child(1)").innerHTML = category.innerHTML;
          ulType.querySelector(":nth-child(2)").innerHTML = alchohol;
          ulType.querySelector(":nth-child(3)").innerHTML = glass;
          
          let ulIngridients = document.querySelector("#ingridients");
          
          filteredIngridient.map((ingridient) =>
          {
           
            let liIngridient = document.createElement("li");
            let newstring = ingridient.replace(/null/, ''); 
            liIngridient.innerHTML = newstring;
            console.log(liIngridient.innerHTML);
            ulIngridients.appendChild(liIngridient)
            
          })

          let howToMix = cardBot.querySelector("p");
          howToMix.innerHTML = instructions;

        },false)
       
        singleCoctail.appendChild(card);
        
        
    })
  

  });
