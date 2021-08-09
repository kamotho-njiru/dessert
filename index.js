

Choose the size of pizza I want e.g Small, Medium, Large
let size("small", "medium", "large"){
    funtion() choose size by client on click button
}

Choose what kind of crust I would like the pizza to have e.g Crispy, Stuffed, Gluten-free

let crust ("Crispy", "stuffed", "gluten-free"){
    function() (choose crust on getbyelementid crust);
}
Choose the topping(s) I want on my pizza.
let toppings ("Pepperoni",
    "Mushrooms",
    "Onions",
    "Sausage",
    "Bacon",
    "Extra cheese",
    "Black olives",
    "Green peppers",
    );
Place an order for my Pizza and see the total charge for it.
total cost= {size + Crust + toppings}
Have an option to order as many pizzas as I want.
let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);

Have an option to have the pizza delivered or not.  If delivered I want to be alerted how much the delivery charge will be.

$("button").click(function(){
    $("p").slideDown();
  });

  let delivery("optional")  

total cost =  pizza + deliver
If I want my pizza to be delivered, I want to be prompted to enter where the delivery should be made and an alert saying '' your order will be delivered to your location"
See a checkout button that when clicked shows the total amount charged for the orders.
Requirements
Determine the prices for each pizza size.
Each pizza topping should have a set value depending on the size of the pizza.
Determine the cost for the crust
The total cost of a pizza should constitute, the crust, topping(s) and size of the pizza.
On checkout, the application displays the orders’ summary together with the total amount charged. For example, if the customer has made more than one pizza order, on checkout the application displays a summary of all the orders he/she has made and the total amount to pay for all his/her orders.
