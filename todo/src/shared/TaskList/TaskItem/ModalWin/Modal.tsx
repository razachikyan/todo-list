import "./modal.css";
import React, { useEffect, useRef } from "react";
import { setOpenedModal } from "../../../../store/item/action";
import { useDispatch } from "react-redux";

interface IModalProps {
    id: string;
    onClose: () => void;
    onCansle: () => void
}

export function Modal({ id, onClose, onCansle }: IModalProps) {
    const ref = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target === ref.current) {
                dispatch(setOpenedModal(id, false));
            }
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick)
        };
    }, [])
    return (
        <div className="modal__container" ref={ref}>
            <div className="modal__box">
                <p className="modal__message">
                    Are you sure you want to delete?
                </p>
                <div className="modal__controls">
                    <button className="modal__btn" onClick={onClose}>Yes</button>
                    <button className="modal__btn" onClick={onCansle}>No</button>
                </div>
            </div>
        </div>
    )
}
