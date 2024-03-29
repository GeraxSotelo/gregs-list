import _store from "../store.js"
import Car from "../Models/Car.js"

class CarService {
  constructor() {
  }

  addCar(carData) { //carData is a POJO
    //new Car(data) is expecting data that represents a car and returns and instance of our model
    let car = new Car(carData)
    //car is now an instance of the Car class
    _store.State.cars.push(car)
    // console.log(newCar)
  }

  removeCar(carIndex) {
    _store.State.cars.splice(carIndex, 1)
  }

}

const CARSERVICE = new CarService()

export default CARSERVICE