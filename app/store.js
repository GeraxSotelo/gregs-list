import Value from "./Models/Value.js";
import Car from "./Models/Car.js";
import House from "./Models/House.js"

let _state = {
  activeValue: new Value({ title: "something" }),
  /** @type {Value[]} */
  values: [],
  // cars: [new Car({ make: "Subaru", model: "Crosstrek", year: 2018, miles: 43, price: 27000 })],
  cars: [],
  houses: [],
  jobs: []
};

//NOTE You should not need to change the code from this point down

/**
 * Validates the property string is defined in the state
 * @param {string} prop
 */
function _validateProp(prop) {
  if (!_state[prop]) {
    throw new Error(`${prop} is not defined on the state`);
  }
}

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  /**
   * Takes in a property to set, and the value to set it to
   * @param {string} prop
   * @param {any} data
   */
  commit(prop, data) {
    _validateProp(prop);
    _state[prop] = data;
  }
}

const store = new Store();
export default store;
