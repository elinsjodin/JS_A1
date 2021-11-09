class Todo {
  constructor() {
    this.task = "";
    this.isFinished = false;
  }
}

window.onload = function () {
  start();
};

let t1 = new Todo();
t1.task = "Meditation in Headspace";

let t2 = new Todo();
t2.task = "Workout at the gym";

let t3 = new Todo();
t3.task = "Do Javascript assignment for school";

let t4 = new Todo();
t4.task = "Go for a walk";

let t5 = new Todo();
t5.task = "Make dinner";

let LOCAL_STORAGE_LIST_KEY = "task.items";
let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [
  t1,
  t2,
  t3,
  t4,
  t5,
];

console.log(tasks);

function start() {
  let container = document.createElement("div");
  container.id = "container";
  document.body.appendChild(container);

  let box = document.createElement("div");
  box.className = "box";
  container.appendChild(box);

  let heading = document.createElement("div");
  heading.className = "heading";
  box.appendChild(heading);

  let h1 = document.createElement("h1");
  h1.innerHTML = "2 Do List";
  heading.appendChild(h1);

  let lines = document.createElement("div");
  lines.className = "lines";
  box.appendChild(lines);

  let diamond = document.createElement("div");
  diamond.className = "diamond";
  lines.appendChild(diamond);

  let taskdiv = document.createElement("div");
  taskdiv.className = "taskdiv";
  box.appendChild(taskdiv);

  let form = document.createElement("form");
  form.id = "form";
  taskdiv.appendChild(form);

  let input = document.createElement("input");
  this.type = Text;
  input.className = "todoinput";
  input.id = "todoinput";
  form.appendChild(input);

  let inputbutton = document.createElement("button");
  inputbutton.className = "add";
  inputbutton.innerHTML = "+";
  inputbutton.addEventListener("click", addTask);
  form.appendChild(inputbutton);

  let ul = document.createElement("ul");
  ul.id = "theMainList";
  taskdiv.appendChild(ul);

  saveAndRender();
}
function saveAndRender() {
  save();
  render();
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(tasks));
}

function render() {
  let ul = document.getElementById("theMainList");
  ul.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.innerHTML += tasks[i].task;
    if (tasks[i].isFinished) {
      li.className = "completed";
    }
    ul.appendChild(li);

    let buttons = document.createElement("div");
    buttons.className = "buttons";
    li.appendChild(buttons);

    let checkbtn = document.createElement("button");
    checkbtn.className = "checkbtn";
    checkbtn.innerHTML = "&#10003;";

    let deletebtn = document.createElement("button");
    deletebtn.className = "deletebtn";
    deletebtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    checkbtn.addEventListener("click", () => done(i));

    deletebtn.addEventListener("click", () => deleteTask(i));

    buttons.appendChild(checkbtn);
    buttons.appendChild(deletebtn);
  }
}

function addTask(event) {
  event.preventDefault();

  let inputTag = document.getElementById("todoinput");

  let inputText = inputTag.value;
  let theNewTodo = new Todo();
  theNewTodo.task = inputText;

  tasks.push(theNewTodo);
  inputTag.value = "";
  saveAndRender();
}

function done(i) {
  tasks[i].isFinished = !tasks[i].isFinished;

  saveAndRender();
}

function deleteTask(i) {
  tasks.splice(i, 1);
  saveAndRender();
}
