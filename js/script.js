fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("container");
    console.log(data.meals);
    container.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 max-w-7xl mx-auto">
        ${data.meals
          .map(
            (meal) => `
              <div class="card bg-base-100 shadow-sm">
                <figure>
                  <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title font-bold">
                    ${meal.strCategory}
                  </h2>
                  <p>${meal.strInstructions.slice(0, 200)}</p>
                  <div class="card-actions justify-end">
                    <div class="badge">
                    <button class="btn bg-yellow-400">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  });

const search_field = document.getElementById("search_item");

search_field.addEventListener("submit", function (e) {
  console.log(e);
});
