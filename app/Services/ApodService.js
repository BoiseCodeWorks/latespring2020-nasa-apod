import store from "../store.js";
import Apod from "../Models/Apod.js";

let _api = axios.create({
  baseURL: '//api.nasa.gov/planetary/apod?api_key=I3WS88dvYrb8uHM0ydV4Ug8wMkErc7fxImZDj37r',
  timeout: 15000
})
class ApodService {

  constructor() {
    this.getApod()
  }

  getApod() {
    _api.get()
      .then(res => {
        console.log(res.data)
        let rawDataObject = res.data
        let apod = new Apod(rawDataObject)
        store.commit('apod', apod)
      })
      .catch(err => console.error(err))
  }

}

const service = new ApodService();
export default service;


