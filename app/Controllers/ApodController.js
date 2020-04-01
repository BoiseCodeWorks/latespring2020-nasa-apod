import ApodService from "../Services/ApodService.js";
import store from "../store.js";

//Private
function _draw() {
  document.getElementById('apod').innerHTML = store.State.apod.Template
}

//Public
export default class ApodController {
  constructor() {
    store.subscribe("apod", _draw);
  }
}
