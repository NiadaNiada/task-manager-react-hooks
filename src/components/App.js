import React from "react";
import TasksContextProvider from "../context/TaskContext";
import "./App.css";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Header from "./Header";

const App = () => {
    return (
        <TasksContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <div className="main">
                        <TaskForm />
                        <TaskList />
                    </div>
                </div>
            </div>
        </TasksContextProvider>
    );
};
export default App;