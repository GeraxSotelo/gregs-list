import _carService from '../Services/CarService.js'
import _store from '../store.js'

//element to inject into
//cars data from the state
//turn car date into an element and store in template
function _drawCars() {
  let template = ''
  let cars = _store.State.cars
  cars.forEach((car, i) => template += car.getTemplate(i))
  document.querySelector("#cars").innerHTML = template
}

export default class CarsController {
  constructor() {
    _drawCars()
  }

  addCar(event) {
    event.preventDefault() //stops form submit button from refreshing the page
    let formData = event.target
    let carData = {
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value
    }

    _carService.addCar(carData)
    _drawCars()
    formData.reset()
    // console.log(event.target.make.value);
  }

  removeCar(carIndex) {
    _carService.removeCar(carIndex)
    _drawCars()
  }

}