import _jobService from "../Services/JobService.js"
import _store from "../store.js"

function _drawJob() {
  let template = ''
  _store.State.jobs.forEach((job, i) => template += job.getTemplate(i))
  document.querySelector("#jobs").innerHTML = template
}

export default class JobsController {
  constructor() {

  }

  addJob(event) {
    event.preventDefault()
    let formData = event.target

    let jobData = {
      company: formData.company.value,
      position: formData.position.value,
      location: formData.location.value,
      salary: formData.salary.value
    }

    _jobService.addJob(jobData)

    _drawJob()
    formData.reset()
  }

  removeJob(jobIndex) {
    _jobService.removeJob(jobIndex)
    _drawJob()
  }
}

