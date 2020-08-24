
// NOTE POJO's are plain old javascript objects, they do not have a class
let chocolateShake = {
  name: "Capt. Choco",
  description: "Chocolate lovers buy this",
  price: 4.00,

  mix: () => {
    console.log("wrrrrrrr")
  }
}

// NOTE export default can only be used once, it becomes the default when the file is imported.
export default chocolateShake