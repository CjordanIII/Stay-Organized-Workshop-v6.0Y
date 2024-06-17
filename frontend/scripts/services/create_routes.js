import { baseRoute } from "../constraints/base_route.js";

// post request

async function createTodo(obj) {
  const { userid, category, description, deadline, priority, completed } = obj;
  try {
    let res = await fetch(`${baseRoute}/api/todos`, {
      method: "POST",
      body: {
        userid: "1",
        category: "Personal Task",
        description: "Finish studying for Eng 211 exam",
        deadline: "2022-12-15",
        priority: "Medium",
        completed: "",
      },
    });

    return res.json();
  } catch (error) {
    return error;
  }
}

export { createTodo };
