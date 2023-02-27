import React from "react";
import "./header.css";
import { Checkbox } from "../Customs/Checkbox/Checkbox";

interface iHeaderProps {
    isEmpty: boolean,
    checked: boolean,
    onChange: () => void
}

export function Header({ isEmpty, checked, onChange }: iHeaderProps) {
    return (
        <header className="header">
            {isEmpty ? <div className="header__container">
                <label className="header__input">
                    <Checkbox checked={checked} />
                    <input type="checkbox" className="header__checkbox" onChange={onChange} checked={!checked} />
                    <span className="input__name">Hide completed</span>
                </label>
            </div> : null}
        </header>
    )
}

