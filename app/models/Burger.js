// NOTE Class definition provides the archetype/blueprints for that object type
// Class names are uppercased and singular
export default class Burger {
  // NOTE This method is used when the "new" instance is being made, the function can take in any number of parameters
  // The '=' allows us to set a default if one is not provided, these should be placed at the end of the parameters
  constructor(name, description, price = 3.10, patties = 1) {
    // NOTE 'this' is a reference to the object being created (aka the instance)
    this.name = name;
    this.description = description;
    this.price = price;
    this.patties = patties
  }

  // NOTE methods can be added and used by any instance of the class
  menuLayout() {
    return `${this.name} - ${this.description} ($${this.price.toFixed(2)})`
  }
}




// export let markBurger = {
//   name: "Mark Deluxe",
//   description: "It's extra cheesy, lil bit o' bacon",
//   price: 6.74
// }

// NOTE when a class is instatiated we get an 'instance' of that class
// export let markBurger = new Burger("Mark Deluxe", "It's extra cheesy, lil bit o' bacon");
// export let darrylBurger = new Burger("D$ Surprise", "What ever D$ hit on the way to work today", 4.75, 2)



