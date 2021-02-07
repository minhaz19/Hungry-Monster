// search meal

document.getElementById("searchButton").addEventListener("click", function () {
    const inputValue = document.getElementById("inputValue").value;
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showAllMeal(data.meals))
        .catch(error => errorMessage())
})

const showAllMeal = mealsDetails => {
    const allMealDiv = document.getElementById("allMeal");
    allMealDiv.innerHTML = "";
    const CurrentMealDiv = document.getElementById("mealDetail");
    CurrentMealDiv.innerHTML = "";
    mealsDetails.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = "meal";
        const mealInfo = `
        <img onclick ="displayCountryDetail('${meal.strMeal}')" src="${meal.strMealThumb}">
        <h4 onclick ="displayCountryDetail('${meal.strMeal}')">${meal.strMeal}</h4>
        `;
        mealDiv.innerHTML = mealInfo;
        allMealDiv.appendChild(mealDiv);
    });
}


const displayCountryDetail = (name) => {
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => mealDetail(data.meals))
}
// single meal details

const mealDetail = meal => {
    const CurrentMealDiv = document.getElementById("mealDetail");
    CurrentMealDiv.innerHTML = "";
    meal.forEach(item => {
        const mealDiv = document.createElement('div');
        mealDiv.className = "aboutMeal";
        const mealInfo = `
        <img src="${item.strMealThumb}">
        <h2>${item.strMeal}</h2>
        <h4>Ingredients</h4>
        <li>${item.strIngredient1} ${item.strMeasure1}</li>
        <li>${item.strIngredient2} ${item.strMeasure2}</li>
        <li>${item.strIngredient3} ${item.strMeasure3}</li>
        <li>${item.strIngredient4} ${item.strMeasure4}</li>
        <li>${item.strIngredient5} ${item.strMeasure5}</li>
        <li>${item.strIngredient6} ${item.strMeasure6}</li>
        <li>${item.strIngredient7} ${item.strMeasure7}</li>
        <li>${item.strIngredient8} ${item.strMeasure8}</li>
        <li>${item.strIngredient9} ${item.strMeasure9}</li>
        <li>${item.strIngredient10} ${item.strMeasure10}</li>
        `;
        mealDiv.innerHTML = mealInfo;
        CurrentMealDiv.appendChild(mealDiv);
    });

}
// if no meals found 
const errorMessage = () => {
    const allMealDiv = document.getElementById("allMeal");
    const errorInfo = `<p>There is no Meal in this name</p>`;
    allMealDiv.innerHTML = errorInfo;
}


