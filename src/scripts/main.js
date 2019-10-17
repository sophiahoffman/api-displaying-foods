// Once you have retrieved all of the foods from your own Food API, display each one of them in the DOM. Create an HTML representation of each food which will display the name of the food, its type, and its ethnicity.

// Create a DOM element in your index.html with a class of foodList.
// Create a function which returns a string template. The template is the HTML representation for a food item.
// Create a function that inserts an HTML representation of a food into the DOM

// Use Flexbox row direction so that you have a horizontal list of items.

console.log("F....")

function foodFactory(foo) {
    return `
    <article><h2>${foo.name}</h2>
    <h3>Category: ${foo.category}<br><br>
    Ethnicity: ${foo.ethnicity}<br><br>
    Ingredients: ${foo.ingredients}</h3></article>
    `;
}


function addFoodToDom(foo) {
    document.querySelector(".foodList").innerHTML = foo;
}

// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         let foodAsHTML = "";
//         parsedFoods.forEach(food => {
//             fetch(`https://https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
//             foodAsHTML = foodFactory(food);
//             console.log(foodAsHTML);
//             addFoodToDom(foodAsHTML);
//         }) 

//     })

fetch("http://localhost:8088/food")
.then(food => food.json())
.then(myParsedFoods => {
    let foodAsHTML = ""
    myParsedFoods.forEach(food => {

        // Now fetch the food from the Food API
        fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
        .then(response => response.json())
        .then(productInfo => {
            if (productInfo.product["ingredients_text"]) {
                food.ingredients = productInfo.product["ingredients_text"]
            } else {
                food.ingredients = "no ingredients listed"
            }
            // Produce HTML representation
            foodAsHTML += foodFactory(food)
            // Add representaiton to DOM
            addFoodToDom(foodAsHTML)
        })
    })
})




                    


 // optional   
// function foodFactory(foo) {
//     return `
//     <article><h2>${foo.name}</h2>
//     <h3>${foo.category}<br>
//     ${foo.ethnicity}</h3></article>
//     `;
// }

// function addFoodToDom(foo) {
//     document.querySelector(".foodList").innerHTML += foo;
// }

// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         parsedFoods.forEach(food => {
//             let foodAsHTML = foodFactory(food);
//             addFoodToDom(foodAsHTML);
//         }) 
//     })
