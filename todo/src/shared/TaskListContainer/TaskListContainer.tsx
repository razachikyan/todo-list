import React from "react";
import { useSelector } from "react-redux";
import { ItemState } from "../../store/item/reducer";
import { RootState } from "../../store/reducer";
import { TaskList } from "../TaskList/TaskList";

export function TaskListContainer() {
    const todos = useSelector<RootState, ItemState[]>(state => state.todoList);
    const isHided = useSelector<RootState, boolean>(state => state.checked);
    const isEmpty = useSelector<RootState, boolean>(state => state.isEmpty);
    return (
        <TaskList isEmpty={isEmpty} isHided={isHided} todos={todos} />
    )
}