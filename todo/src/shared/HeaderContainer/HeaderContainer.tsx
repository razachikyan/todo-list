import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setChecked } from "../../store/reducer";
import { Header } from "../Header/Header";

export function HeaderContainer() {
    const checked = useSelector<RootState, boolean>(state => state.checked);
    const isEmpty = useSelector<RootState, boolean>(state => state.isEmpty);
    const dispatch = useDispatch();
    return (
        <Header checked={checked} isEmpty={isEmpty} onChange={() => dispatch(setChecked(!checked))} />
    )
}

