export default class House {
  constructor(data) {
    this.hometype = data.hometype || "Unknown"
    this.sqft = data.sqft || "Unknown"
    this.floors = data.floors || "Unknown"
    this.bedrooms = data.bedrooms || "Unknown"
    this.bathrooms = data.bathrooms || "Unknown"
    this.price = data.price || "Unknown"
  }

  getTemplate(index) {
    return `
      <div class="col-3 m-3 p-2 border rounded bg-warning text-dark">
        <h2>${this.sqft} sqft ${this.hometype}</h2>
        <h2>Floors: ${this.floors}</h2>
        <h5>Bedrooms: ${this.bedrooms}</h5>
        <h5>Bathrooms: ${this.bathrooms}</h5>
        <h5>Price: $${this.price}</h5>
        <button class="btn btn-danger btn-block" onclick="app.housesController.removeHouse(${index})">Remove</button>
      </div>
    `
  }
}