
import _store from "../store.js"
import Job from "../Models/Job.js"
class JobService {
  constructor() {

  }

  addJob(jobData) {
    _store.State.jobs.push(new Job(jobData))
  }

  removeJob(jobIndex) {
    _store.State.jobs.splice(jobIndex, 1)
  }

}

const JOBSERVICE = new JobService()

export default JOBSERVICE