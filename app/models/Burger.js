class Burger {
  constructor(name, description, price = 3.10, patties = 1) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.patties = patties
  }
  menuLayout() {
    return `${this.name} - ${this.description} ($${this.price.toFixed(2)})`
  }
}



// export let markBurger = {
//   name: "Mark Deluxe",
//   description: "It's extra cheesy, lil bit o' bacon",
//   price: 6.74
// }

export let markBurger = new Burger("Mark Deluxe", "It's extra cheesy, lil bit o' bacon");
export let darrylBurger = new Burger("D$ Surprise", "What ever D$ hit on the way to work today", 4.75, 2)
