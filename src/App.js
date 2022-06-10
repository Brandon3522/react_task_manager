import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask";
import { useState } from "react"; // Hook for state
import React from "react";

function App() {
    const [showAddTask, setShowAddTask] = useState(true);
    // Keeps the state of tasks within the component
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Meeting",
            day: "Feb 6",
            reminder: true,
        },
        {
            id: 2,
            text: "Shopping",
            day: "Feb 5",
            reminder: true,
        },
    ]);

    // Add task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    // Delete task
    // filter: creates a new array with elements that pass the
    // test provided in the function
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Toggle reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    // Props: tasks, onDelete
    // Passed down to tasks component
    return (
        <div className="container">
            <h2>
                <Header onAdd={() => setShowAddTask(!showAddTask)} />
            </h2>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                "No tasks"
            )}
        </div>
    );
}

export default App;
