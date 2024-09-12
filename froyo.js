// Customer prompt upon opening the website and the value of results the customer entered //
const customerOrder = prompt(
  "Please enter a list of comma-seperated froyo flavors to order.",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);
console.log(customerOrder);

//Object that tracks flavors observed //

const flavors = customerOrder.split(",");
console.log(flavors);

// Calculation and table display of the amount of each flavor entered by customer//
const countFroyos = (froyoFlavors) => {
  const counts = {};
  for (const froyo of froyoFlavors) {
    if (froyo in froyoFlavors) {
      counts[froyo] += 1;
    } else {
      counts[froyo] = 1;
    }
  }
  return counts;
};

// Displays the number of each froyo flavor entered by customer//
const flavorOrdered = countFroyos(flavors);
console.table(flavorOrdered);
