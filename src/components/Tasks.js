import Task from "./Task";
import React from "react";

// Destructure props to access tasks specifiacally
export const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default Tasks;
