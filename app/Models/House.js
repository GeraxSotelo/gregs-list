export default class House {
  constructor(data) {
    this.sqft = data.sqft;
    this.floors = data.floors;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
  }

  getTemplate(index) {
    return `
      <div class="col-3 m-3 p-2 border rounded bg-dark">
        <h2>${this.sqft}</h2>
        <h2>${this.floors}</h2>
        <h5>${this.bedrooms}</h5>
        <h5>$${this.bathrooms}</h5>
        <button class="btn btn-danger btn-block" onclick="app.carsController.removeHouse(${index})">Remove</button>
      </div>
    `
  }
}