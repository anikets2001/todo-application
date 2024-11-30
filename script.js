const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
  if (!inputBox.value) {
    alert("you must write some task in the input first");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.append(li);
    let span = document.createElement("span");
    span.id = "span";
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

listContainer.addEventListener("click", (e) => {
  if (e.target.localName === "li") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.localName === "span") {
    e.target.parentElement.remove();
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showTasks = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showTasks();
