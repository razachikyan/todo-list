import React from "react";
import { ItemState } from "../../store/item/reducer";
import { TaskItemContainer } from "./TaskItemContainer/TaskItemContainer";
import "./tasklist.css";

interface ITaskListProps {
    isEmpty: boolean;
    isHided: boolean;
    todos: ItemState[];
}

export function TaskList({ isEmpty, isHided, todos }: ITaskListProps) {
    return (
        <div className="tasklist__container">
            {isEmpty ? <ul className="list">
                {
                    // eslint-disable-next-line array-callback-return
                    isHided ? todos.filter((todo, i) => {
                        let count = 0;
                        if (!todo.isDone) {
                            todo.index = i - count;
                            return todo;
                        }

                    }).map(todo => {
                        return <TaskItemContainer key={todo.id} id={todo.id} />
                    }) : todos.map(todo => {
                        return <TaskItemContainer key={todo.id} id={todo.id} />
                    })
                }
            </ul> :
                <div className="message_box">
                    <p className="tasklist__descr">your life is a blank page. You write on it.</p>
                    <p className="tasklist__message">So start by adding your tasks here.</p>
                </div>}
        </div>
    )
}