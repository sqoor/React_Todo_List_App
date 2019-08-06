const bodyParser = require('body-parser')
const express = require('express');
const app = express();

app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({extended: true}));


const tasks = [
    {
        id: 1,
        title: "Download Zoom",
        isCompleted: false
    },
    {
        id: 2,
        title: "Eat Fried Chicken",
        isCompleted: true
    },
    {
        id: 3,
        title: "Play Games",
        isCompleted: false
    },
    {
        id: 4,
        title: "Go for Shopping",
        isCompleted: false
    },
    {
        id: 5,
        title: "Watch Movie",
        isCompleted: false
    }
];

app.get('/', (req, res) => {
    res.send('homepage');
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
    const requestTaskId = parseInt(req.params.id);
    const requestedTask = tasks.filter(t => t.id === requestTaskId)

    res.json(requestedTask);
});

app.post('/tasks', (req, res) => {
    const newTask = req.body;
    newTask.id = tasks.length + 1;
    tasks.shift(newTask);

    console.log(tasks);
    console.log(newTask);

    res.json(tasks);
});

app.delete('/tasks/:id', (req, res) => {
    const toDeleteId = parseInt(req.params.id);
    console.log(toDeleteId);
    tasks = tasks.filter(t => t.id !== toDeleteId)

    res.json(requestedTask);
});


const PORT = 4000;
app.listen(PORT, () => console.log(`Listening to port ${PORT}...`));