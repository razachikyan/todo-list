import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState, setIsEmpty, setTodos } from "../../../../store/reducer";
import { ItemState } from "../../../../store/item/reducer";
import { setOpenedModal } from "../../../../store/item/action";
import { Modal } from "../ModalWin/Modal";


export function ModalContainer({ id }: { id: string }) {
    const todos = useSelector<RootState, ItemState[]>(state => state.todoList);
    const dispatch = useDispatch();
    // eslint-disable-next-line array-callback-return
    const [todo] = todos.filter(todo => {
        if (todo.id === id) {
            return todo
        }
    });

    return (
        <Modal id={id} onClose={
            () => {
                // eslint-disable-next-line array-callback-return
                dispatch(setTodos(todos.filter((item) => {
                    if (item.id !== todo.id) {
                        return item;
                    }
                })));
                dispatch(setIsEmpty((todos.length - 1) > 0))
            }
        }
            onCansle={
                () => {
                    dispatch(setOpenedModal(id, false))
                }
            } />
    )
}