"use strict"

console.log("the gangs all here");


window.onload = () => {

    populateDropdown();

    let theUsersDropdown = document.querySelector("#theUsers");

    //  theUsersDropdown.addEventListener("change", viewUserData);

    //create dropdown to grab users name / id and pull up their info.. use the users id to get info. 

}


// async function viewUserData() {

//     let theUsersDropdown = document.querySelector("#theUsers");

//     let users = await

// }





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



