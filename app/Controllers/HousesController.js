import _store from "../store.js"
import _houseService from "../Services/HouseService.js"

function _drawHouses() {
  let template = ''
  let houses = _store.State.houses
  houses.forEach((house, i) => template +=)
}

export default class HousesController {
  constructor() {
    _drawHouses()
  }

  addHouse(event) {
    event.preventDefault()
    let formData = event.target
    let houseData = {
      sqft: formData.sqft,
      floors: formData.floors,
      bedrooms: formData.bedrooms,
      bathrooms: formData.bathrooms
    }

    _houseService.addHouse(formData)

    _drawHouses()
    formData.reset() // reset the form
  }

  removeHouse(houseIndex) {
    _houseService.removeHouse(houseIndex);
    _drawHouses()
  }


}