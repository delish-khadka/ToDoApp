// const LOCAL_STORAGE_LIST_KEY = "task.list";
// let list = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

// function save() {
//   localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(list));
// }

// function saveAndRender() {
//   save();
//   myFunction();
// }

window.addEventListener("load", () => {
  //   todos = JSON.parse(localStorage.getItem("todos")) || [];
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;
    if (!task) {
      alert("Fill out the task");
      return;
    }

    // <div class="task">
    //         <div class="content">
    //           <input type="text" class="text" value="My tasks" readonly />
    //         </div>
    //         <div class="actions">
    //           <button class="edit">Edit</button>
    //           <button class="delete">Delete</button>
    //         </div>
    //       </div>

    //div with classname of ".task" //outer div
    const task_el = document.createElement("div");
    task_el.classList.add("task");

    //div with classname of ".content" //middle div which include text from input
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    //input tag with classname of ".text"
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "");

    // div for buttons
    const task_action_el = document.createElement("div");
    task_action_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.innerText = "Edit";
    task_edit_el.classList.add("edit");

    const task_delete_el = document.createElement("button");
    task_delete_el.innerText = "Delete";
    task_delete_el.classList.add("delete");

    task_el.appendChild(task_content_el);

    task_content_el.appendChild(task_input_el);

    task_action_el.appendChild(task_edit_el);

    task_action_el.appendChild(task_delete_el);

    task_el.appendChild(task_action_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText.toLowerCase() === "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly", "");
        task_input_el.focus();
        task_edit_el.innerText = "Edit";
      }
    });

    input.addEventListener("change", (e) => {
      localStorage.setItem("task_input_el", e.target.value);
    });

    // const todo = {
    //   content: e.target.elements.content.value,
    // };
    // todos.push(todo);
    // localStorage.setItem("todos", JSON.stringify(todos));
    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
