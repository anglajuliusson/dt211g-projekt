/**
 * Hämtar en cocktail från CocktailDB baserat på ett namn.
 * @param {string} cocktailName - Namnet på drinken att söka efter.
 * @returns {Promise<Object|null>} - Ett cocktailobjekt eller null om inget hittas.
 */
async function fetchCocktail(cocktailName) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.drinks ? data.drinks[0] : null;
  }
  
  /**
   * Hämtar en GIF från Giphy baserat på ett sökord.
   * @param {string} searchTerm - Termen att söka efter i Giphy.
   * @returns {Promise<string|null>} - URL till en GIF, null om inget hittas.
   */
  async function fetchGif(searchTerm) {
    const apiKey = "k06lejMAsmzUXzhEg8Syt3mLtuL5VCQc"; // Egenskapad API från Giphy
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data.length > 0 ? data.data[0].images.fixed_height.url : null;
  }
  
  /**
   * Visar resultatet (drink + gif) i DOM:en.
   * @param {Object} cocktail - Cocktail-objektet.
   * @param {string} gifUrl - URL till en gif.
   */
  function displayResult(cocktail, gifUrl) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";
  
    if (!cocktail) {
      resultContainer.innerHTML = "<p>Ingen drink hittades.</p>";
      return;
    }
  
    const title = document.createElement("h2");
    title.textContent = cocktail.strDrink;
  
    const image = document.createElement("img");
    image.src = cocktail.strDrinkThumb;
    image.alt = cocktail.strDrink;
  
    const instructions = document.createElement("p");
    instructions.textContent = cocktail.strInstructions;
  
    resultContainer.appendChild(title);
    resultContainer.appendChild(image);
    resultContainer.appendChild(instructions);
  
    if (gifUrl) {
      const gif = document.createElement("img");
      gif.src = gifUrl;
      gif.alt = "Drink GIF";
      gif.classList.add("gif"); 
      resultContainer.appendChild(gif);
    }
  }
  
  /**
   * Lyssnar på klick på sökknappen och triggar mashup-hämtning.
   */
  document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector(".search_button");
    const inputField = document.querySelector(".drinkInput");
  
    searchButton.addEventListener("click", async () => {
      const searchTerm = inputField.value.trim();
      if (!searchTerm) return;
  
      const cocktail = await fetchCocktail(searchTerm);
      const gifUrl = await fetchGif(searchTerm);
      displayResult(cocktail, gifUrl);

      inputField.value = ""; // Rensa sökfällt efter klick 
    });
  });
  