

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let todos = [];




app.get('/todos', (req, res) => {
    res.json({ todos });
});

app.post('/todos', (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ error: 'Task is required!' });
    }
    const newTodo = { id: Date.now(), task };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});


app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id == id);
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'Todo not found!' });
    }
    const deletedTodo = todos.splice(todoIndex, 1);
    res.json(deletedTodo);
});



