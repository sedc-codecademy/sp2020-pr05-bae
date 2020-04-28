function myFunction(media) {
  if (media.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
   document.body.style.backgroundColor = "pink";
  }
}

let singleCoctail = document.querySelector(".single-cocktail");

async function fetchURLs() {
  let cardURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='
  try {
  let allData = await Promise.all([
      
      fetch(cardURL + 'a').then((response) => response.json()),
      fetch(cardURL + 'b').then((response) => response.json()),
      fetch(cardURL + 'c').then((response) => response.json()),
      fetch(cardURL + 'd').then((response) => response.json()),
      fetch(cardURL + 'e').then((response) => response.json()),
      fetch(cardURL + 'f').then((response) => response.json()),
      fetch(cardURL + 'g').then((response) => response.json()),
      fetch(cardURL + 'h').then((response) => response.json()),
      fetch(cardURL + 'i').then((response) => response.json()),
      fetch(cardURL + 'j').then((response) => response.json()),
      fetch(cardURL + 'k').then((response) => response.json()),
      fetch(cardURL + 'l').then((response) => response.json()),
      fetch(cardURL + 'm').then((response) => response.json()),
      fetch(cardURL + 'n').then((response) => response.json()),
      fetch(cardURL + 'o').then((response) => response.json()),
      fetch(cardURL + 'p').then((response) => response.json()),
      fetch(cardURL + 'q').then((response) => response.json()),
      fetch(cardURL + 'r').then((response) => response.json()),
      fetch(cardURL + 's').then((response) => response.json()),
      fetch(cardURL + 't').then((response) => response.json()),
      fetch(cardURL + 'v').then((response) => response.json()),
      fetch(cardURL + 'w').then((response) => response.json()),
      fetch(cardURL + 'y').then((response) => response.json()),
      fetch(cardURL + 'z').then((response) => response.json())
    ]);

    allData.map(data =>{
      let drinks = data.drinks;
      drinks.map((el) =>{
  
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
            let singleCard= document.querySelector("#singleCard");
            singleCard.classList.remove("hide");
  
            let cardTop = document.querySelector("#topCard");
            let cardBot = document.querySelector("#botCard");
            
            cardTop.querySelector("h1").innerHTML = title.innerHTML;

            let ulType = document.querySelector("#ulType");
            ulType.querySelector(":nth-child(1)").innerHTML = category.innerHTML;
            ulType.querySelector(":nth-child(2)").innerHTML = alchohol;
            ulType.querySelector(":nth-child(3)").innerHTML = glass;
  
            switch(category.innerHTML) {
              case "Cocktail":
                cardTop.style.backgroundImage = "url('IMG/coctail-bg4.jpg')";
                cardTop.style.backgroundPosition = "100% 30%";
                break;
              case "Shot":
                cardTop.style.backgroundImage = "url('IMG/shot-bg.jpeg')";
                cardTop.style.backgroundPosition = "100% 47%";
                break;
              case "Ordinary Drink":
                cardTop.style.backgroundImage = "url('IMG/ordinary-bg.jpeg')";
                cardTop.style.backgroundPosition = "100% 20%";
              break;
              case "Other/Unknown":
                cardTop.style.backgroundImage = "url('IMG/other-bg.jpg')";
                cardTop.style.backgroundPosition = "100% 16%";
              break;
              case "Coffee / Tea":
                cardTop.style.backgroundImage = "url('IMG/cofee-bg.jpg')";
                cardTop.style.backgroundPosition = "100% 30%";
                break;
              case "Beer":
                cardTop.style.backgroundImage = "url('IMG/beer.jpeg')";
                cardTop.style.backgroundPosition = "100% 40%";
                break;
              case "Soft Drink / Soda":
                cardTop.style.backgroundImage = "url('IMG/soft-bg.jpeg')";
                cardTop.style.backgroundPosition = "100% 12%";
                break;
              case "Homemade Liqueur":
                cardTop.style.backgroundImage = "url('IMG/liquor-bg.jpg')";
                cardTop.style.backgroundPosition = "100% 12%";
                break;
              case "Cocoa":
                cardTop.style.backgroundImage = "url('IMG/cocoa-bg.jpeg')";
                cardTop.style.backgroundPosition = "100% 14%";
                break;
              case "Milk / Float / Shake":
                cardTop.style.backgroundImage = "url('IMG/shaker.jpeg')";
                cardTop.style.backgroundPosition = "100% 20%";
                break;     
              case "Punch / Party Drink":
                cardTop.style.backgroundImage = "url('IMG/punch-bg.jpeg')";
                cardTop.style.backgroundPosition = "100% 15%";
                break;             
              default:
                cardTop.style.backgroundImage = "url('IMG/coctail-bg4.jpg')";
                cardTop.style.backgroundPosition = "100% 30%";
            }
  
            let img = cardBot.querySelector("img");
            img.src = thumbnail.src;
            
            let ulIngridients = document.querySelector("#ingridientsUl");
            
            filteredIngridient.map((ingridient) =>
            {
             
              let liIngridient = document.createElement("li");
              let newstring = ingridient.replace(/null/, ''); 
              liIngridient.innerHTML = newstring;
             
              ulIngridients.appendChild(liIngridient)
              
            })

            let categoryLength = category.innerHTML.length + alchohol.length + glass.length;
            //Laptop L
            laptopLarge = window.matchMedia("(max-width: 1750px)")
            if (laptopLarge.matches) { 
              
              if (title.innerHTML.length >= 28) {
                cardTop.querySelector("h1").style.fontSize = '250%'
              }
              if (categoryLength > 48) {
                ulType.style.fontSize = '15px'
              }
              if (instructions.length >= 500 && instructions.length < 2000) {
                cardBot.style.marginTop = "35px"
                cardBot.style.paddingBottom = "45px"
              }
              if (instructions.length >= 2000) {
                singleCard.style.height = "165vh"
                cardBot.style.marginTop = "15px"
                cardBot.style.paddingBottom = "45px"

              }
            }
              //Laptop S
            laptopSmall = window.matchMedia("(max-width: 1024px)")
            if (laptopSmall.matches) {
              if (title.innerHTML.length >= 28) {
                cardTop.querySelector("h1").style.fontSize = '25px'
              }
              if (instructions.length >= 450 && instructions.length < 2000) {
                cardBot.style.flexDirection = "column"
                cardBot.style.alignItems = "center"
                img.style.height = '370px'
                img.style.marginTop = '0'
              }
              if (instructions.length >= 2000) {
                img.style.height = '370px'
                cardBot.style.flexDirection = "column"
                cardBot.style.alignItems = "center"
                cardBot.style.height = 'auto';
              }
             }

              //TABLET
            tablet = window.matchMedia("(max-width: 768px)")
            if (tablet.matches) {
              if (title.innerHTML.length >= 28) {
                cardTop.querySelector("h1").style.fontSize = '180%'
              }
              if (instructions.length >= 450 && instructions.length < 2000) {
                cardBot.style.flexDirection = "column"
                cardBot.style.alignItems = "center"
                img.style.height = '350px'
                img.style.marginTop = '0'

              }
              if (instructions.length >= 2000) {
                img.style.height = '350px'
                cardBot.style.flexDirection = "column"
                cardBot.style.alignItems = "center"
                cardBot.style.height = 'auto';
              }
            } 

            //MOBILE
            mobile = window.matchMedia("(max-width: 480px)")
            if (mobile.matches) {

              let listCategories = document.querySelector('#mobileList > ul');
              listCategories.querySelector(":nth-child(1)").innerHTML = category.innerHTML;
              listCategories.querySelector(":nth-child(2)").innerHTML = alchohol;
              listCategories.querySelector(":nth-child(3)").innerHTML = glass;
              listCategories.classList.remove('hide');

              if (categoryLength >= 50) {
                listCategories.style.fontSize = '13px'
              }
              if (categoryLength > 51 && categoryLength < 50) {
                listCategories.style.fontSize = '11px'
              }

              if (title.innerHTML.length >= 17 && title.innerHTML.length < 28) {
                cardTop.querySelector("h1").style.fontSize = '150%'
              }
              if (title.innerHTML.length >= 28) {
                cardTop.querySelector("h1").style.fontSize = '120%'
              }
              if (instructions.length >= 450 && instructions.length < 2000) {
                cardBot.style.flexDirection = "column"
                cardBot.style.alignItems = "center"
                img.style.height = '200px'
                img.style.width = '200px'
                // img.style.marginTop = '0'

              }
              if (instructions.length >= 2000) {
                img.style.height = '200px'
                img.style.width = '200px'
                cardBot.style.flexDirection = "column"
                cardBot.style.alignItems = "center"
                cardBot.style.height = 'auto';
              }

              switch(category.innerHTML) {
                case "Ordinary Drink":
                  cardTop.style.backgroundImage = "url('IMG/ordinary-bgMOB.jpg')";
                  cardTop.style.backgroundPosition = "85% 14%";
                break;
                case "Soft Drink / Soda":
                  cardTop.style.backgroundImage = "url('IMG/soft-bgMOB.jpg')";
                  cardTop.style.backgroundPosition = "100% 12%";
                  cardTop.style.backgroundColor = 'black'
                  break;
                case "Homemade Liqueur":
                  cardTop.style.backgroundImage = "url('IMG/liquor-bgMob.jpg')";
                  cardTop.style.backgroundPosition = "55% 14%";
                  break;
                case "Cocoa":
                  cardTop.style.backgroundImage = "url('IMG/cocoa-bg.jpeg')";
                  cardTop.style.backgroundPosition = "100% 14%";
                  break;
                case "Milk / Float / Shake":
                  cardTop.style.backgroundImage = "url('IMG/shaker-Mob.jpg')";
                  cardTop.style.backgroundPosition = "100% 20%";
                  break;     
                default:
                  cardTop.style.backgroundPosition = "100% 30%";
              }


            }
            
            let howToMix = cardBot.querySelector("span");
            console.log(howToMix);
            howToMix.innerHTML = instructions;
           
  
          },false)
         
          singleCoctail.appendChild(card);
         

      })
    })

  } catch (error) {
    console.log(error);
  }
}

fetchURLs()
