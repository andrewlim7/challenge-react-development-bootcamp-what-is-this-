function setupApp() {
    this.version = "5.1.2"
    this.createdBy = "Wes"
  
    document.addEventListener("click", function () {
      console.log(
        `Hi, welcome to version: ${this.version} hand crafted by ${this.createdBy}`
      )
    })
}
  
  setupApp()

  //Challenge
  class Car {
    constructor(owner) {
      this.brand = 'Tesla'
      this.model = 'Model X'
      this.owner = owner
      //this.drive = this.drive.bind(this)
    }
  
    drive = () => {
      console.log(`${this.owner.name} is driving his ${this.brand}`)
    }
  
    doSomethingTwice(action) {
      for (let i = 0; i < 2; i++) {
         action()
      }
    }
  }
  
  const mycar = new Car({
    name: 'Nicholas',
    age: 21,
    gender: 'male'
  })
  
  mycar.doSomethingTwice(mycar.drive) 