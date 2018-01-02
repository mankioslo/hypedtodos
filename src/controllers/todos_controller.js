import { Controller } from "stimulus"

export default class extends Controller {
  create(e) {
    e.preventDefault();

    console.log(this.title);
  }

  get title() {
    return this.targets.find("title").value;
  }
}
