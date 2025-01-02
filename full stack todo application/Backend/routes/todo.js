const express = require('express')
const app = express()
const routes = require('express').Router()
// const bodyparser = require('body-parser')



// routes.use(bodyparser.json)
routes.use(express.json())
routes.use(express.urlencoded({ extended: true }))
// import ejs
// meny ejs app mey import kia hey kion key router key pass set ka method nhi hota 


// CRUD 


//  todos list 
const todos = [
    {
        id: 1,
        title: "Javascript Book",
        description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 2,
        title: "Html Book",
        description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 3,
        title: "Css Book",
        description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 4,
        title: "Php Book",
        description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
]

//  todos list 


// route / 
routes.get('/', (req, res) => {
    res.render("todo", {
        title: "Todos Application",
        data: todos.map((todo) => `
 <div class="card text-bg-danger mb-3 mx-2" style="max-width: 18rem;">
        <div class="card-header">${todo.id}</div>
        <div class="card-body">
            <h5 class="card-title">${todo.title}</h5>
            <p class="card-text">${todo.description}</p>
                <div class="d-grid gap-2">
  <button class="btn btn-dark" type="button" onclick="edit(${todo.id})">Update</button>
  <button class="btn btn-dark" type="button" onclick="delet(${todo.id})">Delete</button>
</div>
        </div>
    </div>
 `)
    })

})

// get all todo 
routes.get('/todos', (req, res) => {
    res.json({ todos })
})

// one todo 
routes.get('/todos/:todoId', (req, res) => {
    const getId = req.params.todoId;
    const find = todos.findIndex((todo) => todo.id == getId);
    if (find == -1) {
        res.json({ Message: "No Todo Exist" })
    } else {
        res.json({ Message: "Your Todo Found", Todo: todos[getId - 1] })
    }
    console.log(req.params.todoId, find)
})

// add todo 
routes.post('/todos', (req, res) => {
    const resTodo = req.body
    const adder = { Message: "added Todo Sucsess fully", AllTodo: [...todos, todos.push(resTodo)] }
    res.json({ Message: "Todo Added" })
})

// edit todo 
routes.put('/todos/:id', (req, res) => {
    const idget = req.params.id
    const allTodo = todos.find((todo) => todo.id == idget)

    allTodo.title = '';
    let edit = allTodo.title = req.body.title;
    console.log(edit)

    res.json({ Message: "Todo Edit successfully", edit })
})

// delete todo 
routes.delete('/todos/:id', (req, res) => {
    const deleteId = req.params.id;
    const todoIndex = todos.findIndex((todo) => todo.id == deleteId);

    if (todoIndex === -1) {
        return res.status(404).json({ message: "Todo not found" });
    }
    const deletedTodo = todos.splice(todoIndex, 1);
    res.status(200).json({ message: "Todo deleted successfully", todo: deletedTodo[0] });
})




module.exports = routes
