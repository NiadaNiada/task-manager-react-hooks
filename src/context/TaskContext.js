import React, { createContext, useEffect, useState, useRef } from "react";

export const TasksContext = createContext({});

const TasksContextProvider = props => {
    const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

    const [tasks, setTasks] = useState(initialState);
    const [editItem, setEditItem] = useState(null);

    const editInputRef = useRef();

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const uniq = () => Date.now();

    const addTask = title => {
        setTasks([...tasks, { title, id: uniq() }]);
    };

    const deleteTask = id => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const findItem = id => {
        const item = tasks.find(task => task.id === id);

        setEditItem(item);
        editInputRef.current.focus();
    };
    // Edit task
    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task));

        setTasks(newTasks);
        setEditItem(null);
    };

    return (
        <TasksContext.Provider
            value={{
                tasks,
                addTask,
                deleteTask,
                editTask,
                editItem,
                findItem,
                editInputRef
            }}
        >
            {props.children}
        </TasksContext.Provider>
    );
};

export default TasksContextProvider;
