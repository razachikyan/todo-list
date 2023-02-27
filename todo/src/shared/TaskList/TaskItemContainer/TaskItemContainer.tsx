import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDone, setOpenedModal } from "../../../store/item/action";
import { ItemState } from "../../../store/item/reducer";
import { RootState } from "../../../store/reducer";
import { TaskItem } from "../TaskItem/TaskItem";

interface ITaskItemProps {
    id: string
}
export function TaskItemContainer({ id }: ITaskItemProps) {
    const todos = useSelector<RootState, ItemState[]>(state => state.todoList);
    // eslint-disable-next-line array-callback-return
    const [todo] = todos.filter(todo => {
        if (todo.id === id) {
            return todo
        }
    })
    const isOpenedModal = todo.isOpenedModal;
    const dispatch = useDispatch();
    return (
        <TaskItem id={id} isOpenedModal={isOpenedModal} todo={todo} onClick={() => {
            dispatch(setOpenedModal(id, true))
        }} onChange={() => {
            dispatch(setDone(!todo.isDone, todo.id))
        }} />
    )
}