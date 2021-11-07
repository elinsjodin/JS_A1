class Todo {
  constructor() {
    this.task = "";
  }
}
window.onload = function () {
  start();
};

// function x(e) {
//   e.parentNode.querySelector("li").innerHTML = ""
//   e.parentNode.remove();
// }

// Object.namn.värde

// variabel

// function createHTML()
//function
// Todo.push

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
  // let hr = document.createElement("hr");
  // box.appendChild(hr);

  let taskdiv = document.createElement("div");
  taskdiv.className = "taskdiv";
  box.appendChild(taskdiv);

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

  let ul = document.createElement("ul");

  let tasks = [t1, t2, t3, t4, t5];

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.innerHTML += tasks[i].task;
    ul.appendChild(li);

    let buttons = document.createElement("div");
    buttons.className = "buttons";
    li.appendChild(buttons);

    let buttoncheck = document.createElement("button");
    buttoncheck.className = "buttoncheck";
    buttoncheck.innerText = "Done";
    buttoncheck.addEventListener("click", handleClick);

    buttons.appendChild(buttoncheck);
  }
  taskdiv.appendChild(ul);
}

function handleClick() {
  //Mark as done
}
