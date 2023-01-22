import React from "react";
import { ITask } from "../Interfaces";

interface Props {
    task: ITask;
}

const ToDoTask = ({task}: Props) => {

    return(
        <div> {task.taskName} {task.deadline}</div>
    )
}

export default ToDoTask