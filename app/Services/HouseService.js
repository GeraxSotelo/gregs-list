import House from "../Models/House.js"
import _store from "../store.js"

class HouseService {
  constructor() {

  }

  addHouse(houseData) {
    let house = new House(houseData)

    _store.State.houses.push(house)

  }

  removeHouse(houseIndex) {
    _store.State.houses.splice(houseIndex, 1)
  }
}

let HOUSESERVICE = new HouseService()

export default HOUSESERVICE