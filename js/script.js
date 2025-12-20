fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("container");
console.log(data.meals);
    container.innerHTML = data.meals
      .map((meal) => `<li>${meal.strCategory}</li>`)
      .join("");
  });

