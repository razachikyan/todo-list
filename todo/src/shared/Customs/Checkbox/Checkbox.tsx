import React from "react";
import "./checkbox.css";

interface ICheckBoxProps {
    checked?: boolean;
}

export function Checkbox({ checked }: ICheckBoxProps) {
    const className = checked ? "on" : "off";
    return (
        <span className={className}></span>
    )
}