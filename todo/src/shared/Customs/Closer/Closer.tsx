import React from "react";
import "./closer.css"

interface ICloserProps {
    onClick: () => void
}

export function Closer({ onClick }: ICloserProps) {
    return <button onClick={onClick} className="closer"></button>
}