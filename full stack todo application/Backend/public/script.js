

let getAllTodo = null;
let ConvertArray = null;


fetch("http://localhost:7000/todos")
    .then((res) => res.json())
    .then((response) => {
        console.log(response)
        getAllTodo = response;


    })
    .catch((error) => console.log(error.message));


let edit = (e) => {
    const inputTitle = prompt("Update Title")
    const inputDescription = prompt("Update Description")
    fetch(`http://localhost:7000/todos/${e}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title: inputTitle, description: inputDescription })
    })
        .then((res) => res.json())
        .then((response) => {
            alert("Blog Edit successfully")
            console.log(response)

        })
        .catch((error) => console.log(error.message));
};



let delet = (e) => {
    fetch(`http://localhost:7000/todos/${e}`, {
        method: "DELETE"
    })
        .then((res) => res.json())
        .then((response) => {
            alert("Blog delete successfully")
            console.log(response)

        })
        .catch((error) => console.log(error.message));
}