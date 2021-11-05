window.onload = function () {
  start();
};

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

  let hr = document.createElement("hr");
  box.appendChild(hr);

  let taskdiv = document.createElement("div");
  taskdiv.className = "taskdiv";
  box.appendChild(taskdiv);

  let tasks = [
    "Meditation in Headspace",
    "Workout at the gym",
    "Do Javascript assignment for school",
    "Go for a walk",
    "Make dinner",
  ];
  let ul = document.createElement("ul");

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = tasks[i];
    ul.appendChild(li);
  }
  taskdiv.appendChild(ul);

  let buttons = document.createElement("div");
  buttons.className = "buttons";
  box.appendChild(buttons);

  let buttoncheck = document.createElement("button");
  buttoncheck.className = "buttoncheck";
  buttoncheck.addEventListener("click", handleClick);

  let buttonuncheck = document.createElement("button");
  buttonuncheck.className = "buttonuncheck";
  buttonuncheck.addEventListener("click", handleClick);

  buttons.appendChild(buttoncheck);
  buttons.appendChild(buttonuncheck);

  // buttoncheck.innerHTML = "Compleated";
  // buttonuncheck.innerHTML = "Not Compleated";
}
function handleClick() {}
