export class Zoo {
  constructor() {
    this.herbivores = []
    this.carnivores = []
  }

  addCarnivores(arr) {
    arr.forEach(c => this.carnivores.push(c))
  }
}