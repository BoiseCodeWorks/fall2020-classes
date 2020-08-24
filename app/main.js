// NOTE when importing multiple things from another file and using export, the objects come in as properties (object destructuring)
// import { darrylBurger, markBurger } from './models/Burger.js';
// NOTE when exporting default simply grab the variable name
// import chocolateShake from './models/Drink.js';
import Burger from './models/Burger.js'

// console.log(markBurger.menuLayout())
// console.log(darrylBurger.menuLayout());

// console.log(chocolateShake)

// document.getElementById("burger").innerText = markBurger.menuLayout();

let menu = {
  markBurger: new Burger("Mark Deluxe", "Extra Cheesy", 5.33, 2),
  darrylBurger: new Burger("D$ Surprise", "What ever D$ hit on the way to work today (comes with complementary 'bag')", 4.75, 2),
  alohaZach: new Burger("Aloha Zach", "You put pineapple on a burger?", 4.75, 2)
}

function drawMenu() {
  let template = '<ol>'
  for (let key in menu) {
    let burger = menu[key]
    template += `<li>${burger.menuLayout()}</li>`
  }
  template += '</ol>'
  document.getElementById('burger').innerHTML = template;
}


drawMenu();