/*Task 1: Create the Order System
Create two arrays:
● The drinks array stores three drink orders (e.g., “Latte”, “Tea”, “Espresso”).
● The pastry array stores three pastry orders (e.g., “Croissant”, “Muffin”,
“Bagel”).
Task 2: Log the number of drinks and number of pastries by using .length on each
row.
Task 3: Access Orders Using Bracket Notation
Use bracket notation to log a specific drink and a specific pastry using
hardcoded numbers. For example, you might want to log the first drink and last
pastry. Do this for three combinations.
Task 4: Access Orders Dynamically with Variables
Task 5: Write a loop that logs all the items in the drink category, ensuring the loop
dynamically adjusts to the number of items using .length.
Task 6: Add a New Order & Track Length
*/
let drinkOrders = ["Latte", "Tea", "Espresso"];
let pastryOrders = ["Croissant", "Muffin", "Bagel"];
console.log("The number of drinks in the system are", `${drinkOrders.length}`);
console.log("The number of pastry orders are", `${pastryOrders.length}`);
console.log(drinkOrders[0],pastryOrders[0]);
console.log(drinkOrders[2],pastryOrders[0]);
console.log(drinkOrders[1],pastryOrders[2]);
for(let i=0; i< drinkOrders.length; i++)
{
    console.log(drinkOrders[i]);
}
drinkOrders.push("Cappacino");
console.log(drinkOrders);
drinkOrders.push("Flat White");
console.log(drinkOrders);
console.log(drinkOrders.length);

