export default class Jobs {
  constructor(data) {
    this.company = data.company || "Unknown"
    this.position = data.position || "Unknown"
    this.location = data.location || "Unknown"
    this.salary = data.salary || "Unknown"
  }

  getTemplate(index) {
    return `
      <div class="col-3 m-3 p-2 border rounded bg-success">
        <h2>Company: ${this.company}</h2>
        <h2>Position: ${this.position}</h2>
        <h5>Location: ${this.location}</h5>
        <h5>Salary: $${this.salary}</h5>
        <button class="btn btn-danger btn-block" onclick="app.jobsController.removeJob(${index})">Remove</button>
      </div>
    `
  }

}