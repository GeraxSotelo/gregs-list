import _store from "../store.js"
import _houseService from "../Services/HouseService.js"

function _drawHouses() {
  let template = ''
  let houses = _store.State.houses
  houses.forEach((house, i) => template += house.getTemplate(i))
  document.querySelector("#houses").innerHTML = template
}

export default class HousesController {
  constructor() {
    _drawHouses()
  }


  //ADD BUTTON
  addHouse(event) {
    event.preventDefault()
    let formData = event.target
    let houseData = {
      hometype: formData.hometype.value,
      sqft: formData.sqft.value,
      floors: formData.floors.value,
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      price: formData.price.value
    }

    _houseService.addHouse(houseData)

    _drawHouses()
    formData.reset() // reset the form
  }

  //DELETE BUTTON
  removeHouse(houseIndex) {
    _houseService.removeHouse(houseIndex);
    _drawHouses()
  }


}