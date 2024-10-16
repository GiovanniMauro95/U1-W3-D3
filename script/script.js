const taskForm = document.getElementsByTagName("form")[0]
taskForm.addEventListener("submit", function (e) {
  e.preventDefault()
})

const buttonClick = function () {
  const taskInput = document.getElementById("task")
  const newTask = taskInput.value

  const ul = document.getElementById("list")
  const singleLi = createLi(newTask)
  const delButton = createDeleteButton(singleLi)
  ul.appendChild(singleLi)
  singleLi.appendChild(delButton)

  taskForm.reset()
}

const createLi = function (newTask) {
  const newLi = document.createElement("li")
  newLi.textContent = newTask
  newLi.addEventListener("click", function () {
    newLi.style.textDecoration = "line-through"
  })
  newLi.classList.add("liHover")
  return newLi
}

const createDeleteButton = function (singleLi) {
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "Elimina"
  deleteButton.classList.add("deleteButton")
  deleteButton.addEventListener("click", function () {
    singleLi.remove()
  })
  return deleteButton
}
