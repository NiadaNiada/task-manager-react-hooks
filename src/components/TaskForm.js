import React, { useState, useContext, useEffect } from "react";
import { TasksContext } from "../context/TaskContext";

const TaskForm = () => {
    const { addTask, editTask, editItem, editInputRef } = useContext(
        TasksContext
    );
    const [title, setTitle] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!editItem) {
            addTask(title);
            setTitle("");
        } else {
            editTask(title, editItem.id);
        }
    };

    const handleChange = e => {
        setTitle(e.target.value);
    };

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title);
        } else {
            setTitle("");
        }
    }, [editItem]);

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                ref={editInputRef}
                type="text"
                placeholder="Add Task..."
                value={title}
                onChange={handleChange}
                required
                className="task-input"
            />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    {editItem ? "Edit Task" : "Add Task"}
                </button>
            </div>
        </form>
    );
};

export default TaskForm;
