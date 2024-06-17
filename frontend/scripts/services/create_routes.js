import { baseRoute } from "../constraints/base_route.js";

// post request

async function createTodo(obj) {
  const { userid, category, description, deadline, priority, completed } = obj;
  try {
    let res = await fetch(`${baseRoute}/api/todos`, {
      method: "POST",
      body: {
        userid: userid,
        category: category,
        description: description,
        deadline: deadline,
        priority: priority,
        completed: completed,
      },
    });

    return res.json();
  } catch (error) {
    return error;
  }
}
async function getCategories() {
  try {
    let res = await fetch(`${baseRoute}/api/categories`);
    res = res.json();
    return res;
  } catch (error) {
    return error;
  }
}

export { createTodo, getCategories };
