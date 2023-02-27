import { Reducer } from "redux";
import { setDoneAction, setIndexAction, setOpenedModalAction, SET_DONE, SET_INDEX, SET_OPENED_MODAL } from "./action";

export type ItemState = {
    isDone: boolean,
    text: string,
    index: number,
    readonly id: string,
    isOpenedModal: boolean
}

export type ItemAction = setDoneAction | setIndexAction | setOpenedModalAction;

const initialItemState = {
    isDone: false,
    text: "",
    index: 0,
    id: "",
    isOpenedModal: false
}

export const itemReducer: Reducer<ItemState, ItemAction> = (state = initialItemState, action) => {
    switch (action.type) {
        case SET_DONE: {
            return {
                ...state,
                isDone: action.isDone,
                id: action.id
            }
        }
        case SET_INDEX: {
            return {
                ...state,
                index: action.index,
                isDone: action.isDone
            }
        }
        case SET_OPENED_MODAL: {
            return {
                ...state,
                isOpenedModal: action.isOpenedModal,
                id: action.id
            }
        }
        default:
            return state;
    }
}