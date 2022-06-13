const input = document.getElementById("input");
const btn = document.getElementById("btn");
const ul = document.getElementById("task_list");

window.onload = function () {
  input.focus();
};

btn.addEventListener("click", (e) => {
  if (!input.value) {
    alert("enter a task");
  } else {
    ul.innerHTML += `      
      <li>
        <i class="fa fa-check"></i>
        <p>${input.value}</p>
        <i class="fa fa-trash"></i>
      </li> 
      `;
  }

  input.value = "";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("fa-check")) {
    if (e.target.parentElement.classList.contains("checked")) {
      e.target.parentElement.classList.remove("checked");
    } else {
      e.target.parentElement.classList.add("checked");
    }
  }
});
