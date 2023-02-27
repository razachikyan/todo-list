import React from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { ItemState } from "../../store/item/reducer";
import { RootState, setIsEmpty, setItem, setTodos, setValidated, updateInputValue } from "../../store/reducer";
import { TaskInput } from "../TaskInput/TaskInput";

export function TaskInputContainer() {
    const value = useSelector<RootState, string>(state => state.inputValue);
    const isValidated = useSelector<RootState, boolean>(state => state.validated);
    const dispatch = useDispatch();
    const todos = useSelector<RootState, ItemState[]>(state => state.todoList);
    return (
        <TaskInput isValidated={isValidated} value={value} onChange={(ev) => {
            dispatch(updateInputValue(ev.target.value));
            if (ev.target.value.trim().length < 54) {
                dispatch(setValidated(true));
            } else {
                dispatch(setValidated(false));
            }
        }} onClick={(ev) => {
            ev.preventDefault();
            if (value.trim().length > 0 && value.trim().length < 54) {
                const id = nanoid();
                dispatch(setItem({ text: value.trim(), isDone: false, index: 0, id }));
                todos.unshift({ text: value.trim(), isDone: false, index: 0, id, isOpenedModal: false });
                if (todos.length > 0) {
                    dispatch(setTodos(todos.map((todo, i) => {
                        todo.index = i;
                        return todo;
                    })));
                    dispatch(setIsEmpty(todos.length > 0));
                }
                dispatch(updateInputValue(""));
            }
        }} />
    )
}

