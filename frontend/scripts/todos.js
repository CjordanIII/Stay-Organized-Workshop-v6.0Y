"use strict"

console.log("the gangs all here");


window.onload = () => {

    populateDropdown();

    let theUsersDropdown = document.querySelector("#theUsers");

    theUsersDropdown.addEventListener("change", viewTask);

    //create dropdown to grab users name / id and pull up their info.. use the users id to get info. 

}



async function viewTask() {

    
    let theTasks = document.querySelector("#theTasks"); //where the stuff will show in div/html

    let usersTodoData = await todoData(); //wait for json data to pullup in function todoData


    console.log(usersTodoData);

  theTasks.innerHTML= 

    `
       <p> Category: ${usersTodoData.category}</p>
       <p> Description: ${usersTodoData.description}</p>
        <p>Deadline: ${usersTodoData.deadline}</p>
       <p> Priority: ${usersTodoData.priority}</p>
        <p> Completed: ${usersTodoData.completed}</p>`
        
 }

async function populateDropdown() {
    let theUsersDropdown = document.querySelector("#theUsers");

    let users = await usersList ();

    let defaultOption = document.createElement("option");
    defaultOption.value = "";

    defaultOption.innerText = "Select A User";

    theUsersDropdown.appendChild(defaultOption);

    users.forEach((users) => {
        //put categories in the select 
        let theOption = document.createElement("option")

        theOption.value = users.id;

        theOption.textContent = users.name;

        theUsersDropdown.appendChild(theOption);
        
    });

    console.log(users);
}


async function usersList() {

    try {
        let response = await fetch("http://localhost:8083/api/users");
        let data = await response.json();

        return data;
       
       
    } catch (err) {
        console.log("nah buddy")
        throw new Error(err)
    }
    

}



   const todoData = async (id) => {
    let theUsersDropdown = document.querySelector("#theUsers").value
        //try catch for error handling
        try {
    
            //make a fetch (GET) request to get the data from the API
            let response = await fetch("http://localhost:8083/api/todos/" + theUsersDropdown,
            
            );
    
            //turn those todo in to something we can work with
            let todos = await response.json();
    
            //put the todo in the console
            return todos
        } catch (err) {
    
            //what the hell happened
            console.log("something went south")
    
        }

}