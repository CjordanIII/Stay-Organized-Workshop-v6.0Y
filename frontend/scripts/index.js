import { getCategories } from "./services/create_routes.js";

async function handleCategories() {
  try {
    let res = await getCategories();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

handleCategories();
