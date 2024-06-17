// new todo dropdown helper

function newTodoCatagoryDropDown(parent, arr) {
  arr.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.innerText = item.name;

    parent.appendChild(option);
  });
}

export { newTodoCatagoryDropDown };
