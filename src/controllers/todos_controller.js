import { Controller } from "stimulus"

export default class extends Controller {
  create(e) {
    e.preventDefault();

    const title = this.title;

    this.todos = [
      ...this.todos,
      title
    ];

    const el = document.createElement("li");
    el.textContent = title;

    this.todosList.append(el);
  }

  get title() {
    return this.targets.find("title").value;
  }

  get todosList() {
    return this.targets.find("todosList");
  }

  get todos() {
    if(this.data.has("todos")) {
      return JSON.parse(this.data.get("todos"));
    } else {
      return [];
    }
  }

  set todos(arr) {
    this.data.set("todos", JSON.stringify(arr));
  }
}
