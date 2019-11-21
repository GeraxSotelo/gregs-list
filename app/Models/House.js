export default class House {
  constructor(data) {
    this.hometype = data.hometype;
    this.sqft = data.sqft;
    this.floors = data.floors;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.price = data.price;
  }

  getTemplate(index) {
    return `
      <div class="col-3 m-3 p-2 border rounded bg-warning text-dark">
        <h2>${this.sqft} sqft ${this.hometype}</h2>
        <h2>${this.floors} Floors</h2>
        <h5>${this.bedrooms} Bedroom</h5>
        <h5>${this.bathrooms} Bathrooms</h5>
        <h5>$${this.price}</h5>
        <button class="btn btn-danger btn-block" onclick="app.HousesController.removeHouse(${index})">Remove</button>
      </div>
    `
  }
}