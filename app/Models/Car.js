export default class Car {
  constructor(data) {
    this.make = data.make || "Unknown"
    this.model = data.model || "Unknown"
    this.year = data.year || "Unknown"
    this.price = data.price || "Unknown"
    this.miles = data.miles || "Unknown"
  }

  getTemplate(index) {
    return `
      <div class="col-3 m-3 p-2 border rounded bg-primary">
        <h2>${this.make}</h2>
        <h2>${this.model}</h2>
        <h5>${this.year}</h5>
        <h5>${this.miles} miles</h5>
        <h5>$${this.price}</h5>
        <button class="btn btn-danger btn-block" onclick="app.carsController.removeCar(${index})">Remove</button>
      </div>
    `
  }
}