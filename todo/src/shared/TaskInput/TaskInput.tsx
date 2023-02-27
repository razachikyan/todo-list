import React, { FormEvent } from "react";
import "./taskinput.css"

interface ITaskInputProps {
    isValidated: boolean;
    value: string;
    onChange: (ev: any) => void;
    onClick: (ev: FormEvent) => void;
}

export function TaskInput({ isValidated, value, onChange, onClick }: ITaskInputProps) {
    const inputClassName = isValidated ? "inputSuccess" : "inputError";
    return (
        <form className="taskinput__container">
            <span className="taskinput__name">
                Task
            </span>
            <div className="taskinput__box">
                <input placeholder="Write here" type="text" className={inputClassName} value={value} onChange={onChange} />
                <button type="submit" className="taskinput__button" onClick={onClick}>Add</button>
            </div>
            {!isValidated ? <p className="err_message">Task content can contain max 54 characters.</p> : null}
        </form>
    )
}

