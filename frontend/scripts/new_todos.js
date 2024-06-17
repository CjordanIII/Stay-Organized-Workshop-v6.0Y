import { newTodoCatagoryDropDown } from "./helpers/dorpdown.js";
import { createTodo, getCategories } from "./services/create_routes.js";
const newTodoForm = document.querySelector("#new_todo");
const catagoryDropDown = document.querySelector("#category");
async function handleCategories() {
  try {
    let res = await getCategories();
    //   adds none as a selection
    res.unshift({ id: 0, name: "none" });
    newTodoCatagoryDropDown(catagoryDropDown, res);
  } catch (error) {
    console.log(error);
  }
}

handleCategories();

newTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const targetForm = e.target;
  const form = new FormData(targetForm);
  let formData = Object.fromEntries(form);
  console.log(formData.description.length);
  if (formData.deadline.length >= 1 || formData.description.length > 1) {
    createTodo(formData);
    console.log("todo made");
  } else {
    console.log("to do has not ben made");
  }
});
