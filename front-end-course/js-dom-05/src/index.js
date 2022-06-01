class TaskManager {
  listElement
  isEditing
  noTasks
  constructor(taskList) {
    this.listElement = taskList
    this.isEditing = false
    this.noTasks = taskList.firstElementChild
    this.finishEditing = this.finishEditing.bind(this)
  }

  addTask(desc) {
    if (this.listElement.firstElementChild === this.noTasks) {
      this.noTasks.remove()
    }
    const newTask = new Task()
    this.listElement.appendChild(newTask.create(desc))
    newTask.description.onclick = () => {
      this.editTask(newTask)
    }
    newTask.removeButton.onclick = () => {
      this.removeTask(newTask)
    }
  }

  removeTask(task) {
    task.destroy()
    if (!this.listElement.children.length) {
      this.listElement.appendChild(this.noTasks)
    }
  }

  editTask(task) {
    if (this.isEditing) {
      return null
    }
    this.isEditing = true
    task.edit(this.finishEditing)
  }

  finishEditing() {
    this.isEditing = false
  }
}

class HTMLElement {
  createElement(tag, value, attr, attrValue) {
    const element = document.createElement(tag)
    if (value) {
      element.innerText = value
    }
    if (attr) {
      element.setAttribute(attr, attrValue)
    }
    return element
  }
}


class Task extends HTMLElement{
  element
  description
  removeButton

  create(description) {
    const $task = this.createElement("div", null, "class", "task")
    this.element = $task
    const $task__desc = this.createElement("div", description, "class", "task__desc")
    this.description = $task__desc
    const $task__delete = this.createElement("button", null, "class", "task__delete")
    this.removeButton = $task__delete
    $task.append(...[$task__desc, $task__delete])
    return $task
  }

  edit(finishEdit) {
    const value = this.description.innerText
    this.description.innerHTML = "<input class='input--styled' placeholder='Empty not allowed'>"
    const input = this.description.firstChild
    input.focus()
    input.value = value
    input.onkeydown = ({ key, target }) => {
      if (key === "Enter") {
        input.onblur = null
        this.description.innerHTML = target.value || value
        finishEdit()
      }
    }
    input.onblur = ({ target }) => {
      this.description.innerHTML = target.value || value
      finishEdit()
    }
  }

  destroy() {
    this.element.remove()
  }
}

const taskManager = new TaskManager(document.querySelector(".taskList"))
document.querySelector("#addTask").onclick = () => {
  const input = document.querySelector("#input")
  if (input.value) {
    taskManager.addTask(input.value)
    input.value = ""
  }
}
document.querySelector("#input").onkeydown = ({ key, target }) => {
  if (key === "Enter" && target.value) {
    taskManager.addTask(target.value)
    target.value = ""
  }
}
