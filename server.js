const bodyParser = require('body-parser')
const cors = require('cors');
const express = require('express');
const app = express();


app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


let tasks = [
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
    },
    {
        id: 6,
        title: "Water the trees",
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
    const requestedTaskId = parseInt(req.params.id);
    const requestedTask = tasks.filter(t => t.id === requestedTaskId)

    res.json(requestedTask);
});

app.post('/tasks', (req, res) => {
    const newTask = req.body;
    newTask.id = tasks.length + 1;
    tasks.push(newTask);

    res.json(tasks);
});

app.delete('/tasks/:id', (req, res) => {
    const toBeDeletedId = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== toBeDeletedId)

    res.json(tasks);
});

app.put('/tasks/:id', (req, res) => {
    const toBeUpdateId = parseInt(req.params.id);
    const newValue = req.body.isCompleted;

    tasks = tasks.map(task => {
        if(task.id === toBeUpdateId)
            task.isCompleted = newValue
        
        return task;
    });

    res.json(tasks);
});


const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => console.log(`Listening to port ${PORT}...`));