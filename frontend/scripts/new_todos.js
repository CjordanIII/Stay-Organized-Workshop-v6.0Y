import { newTodoCatagoryDropDown } from "./helpers/dorpdown.js";
import { getCategories } from "./services/create_routes.js";
const catagoryDropDown = document.querySelector("#category");
async function handleCategories() {
  try {
    let res = await getCategories();
    res.unshift({ id: 0, name: "none" });

    newTodoCatagoryDropDown(catagoryDropDown, res);
  } catch (error) {
    console.log(error);
  }
}

handleCategories();
