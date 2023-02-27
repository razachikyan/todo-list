import React from "react";
import { ItemState } from "../../../store/item/reducer";
import { Checkbox } from "../../Customs/Checkbox/Checkbox";
import { Closer } from "../../Customs/Closer/Closer";
import { ModalContainer } from "./ModalWinContainer/ModalContainer";
import "./taskitem.css";

interface ITaskItemProps {
    id: string;
    isOpenedModal: boolean,
    todo: ItemState;
    onChange: () => void;
    onClick: () => void
}

export function TaskItem({ id, isOpenedModal, todo, onChange, onClick }: ITaskItemProps) {
    return (
        <li className="item">
            <div className="item__box">
                {isOpenedModal ? <ModalContainer id={id} /> : null}
                <label className="item__label">
                    <Checkbox checked={todo.isDone} />
                    <input type="checkbox" className="item__checkbox" checked={todo.isDone} onChange={onChange} />
                    <p className="item__task">
                        {todo.text}
                    </p>
                </label>
                <Closer onClick={onClick} />
            </div>
        </li>
    )
}