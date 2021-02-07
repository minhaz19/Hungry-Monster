document.getElementById("searchButton").addEventListener("click",function(){
    const inputValue = document.getElementById("inputValue").value;
    url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showAllMeal(data.meals))
    .catch(error => errorMessage())
})

const showAllMeal = mealsDetails =>{
    const allMealDiv = document.getElementById("allMeal");
    allMealDiv.innerHTML = "";
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


const displayCountryDetail = (name) =>{
    url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => mealDetail(data.meals))
}

const mealDetail = meal =>{
    const CurrentMealDiv = document.getElementById("mealDetail");
    CurrentMealDiv.innerHTML ="";
    const ul = document.getElementById("IngredientDetail");
    meal.forEach(item => {
        const mealDiv = document.createElement('div');
        mealDiv.className = "aboutMeal";
        const li = document.createElement('li');
        const mealInfo= `
        <img src="${item.strMealThumb}">
        <h2>${item.strMeal}</h2>
        <h4>Ingredients</h4>
        <li><p></p></li>
        `;
        // // li.innerText = item.strIngredient1 + strMeasure1;
        // // ul.appendChild(li);
        // Object.keys(item).forEach(function() {
            
        //     const ingredients = item.strIngredient1
        //     console.log(ingredients);
        // });
        

        mealDiv.innerHTML = mealInfo;
        CurrentMealDiv.appendChild(mealDiv);

    });
   
}

const errorMessage = () =>{
    const allMealDiv = document.getElementById("allMeal");
    const errorInfo = `<p>There is no Meal in this name</p>`;
    allMealDiv.innerHTML = errorInfo;
}
