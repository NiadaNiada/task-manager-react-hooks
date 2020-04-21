import React, { useContext } from "react";
import { TasksContext } from "../context/TaskContext";
import Task from "./Task";

const TaskList = () => {
    const { tasks } = useContext(TasksContext);

    return (
        <div>
            {tasks.length ? (
                <ol className="list">
                    {tasks.map(task => {
                        return <Task task={task} key={task.id} />;
                    })}
                </ol>
            ) : (
                <div className="no-tasks">No Tasks</div>
            )}
        </div>
    );
};

export default TaskList;