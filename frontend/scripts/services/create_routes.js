import { baseRoute } from "../constraints/base_route.js";

// post request

async function createTodo(obj) {
  const { userid, category, description, deadline, priority, completed } = obj;

  try {
    let res = await fetch(`${baseRoute}/api/todos`, {
      method: "POST",
      body: JSON.stringify({
        userid: userid,
        category: category,
        description: description.trim(),
        deadline: deadline,
        priority: priority,
        completed: completed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
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

    return res.json();
  } catch (error) {
    return error;
  }
}

async function getUsers() {
  try {
    let res = await fetch(`${baseRoute}/api/users`);

    return res.json();
  } catch (error) {
    return error;
  }
}

export { createTodo, getCategories, getUsers };
