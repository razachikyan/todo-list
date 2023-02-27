import { ActionCreator } from "redux";

export const SET_OPENED_MODAL = "SET_OPENED_MODAL";
export type setOpenedModalAction = {
    type: typeof SET_OPENED_MODAL,
    isOpenedModal: boolean,
    id: string
}

export const SET_DONE = "SET_DONE";
export type setDoneAction = {
    type: typeof SET_DONE,
    isDone: boolean,
    id: string
}

export const SET_INDEX = "SET_INDEX";
export type setIndexAction = {
    type: typeof SET_INDEX,
    index: number,
    isDone: boolean
}

export const setDone: ActionCreator<setDoneAction> = (isDone, id) => {
    return { type: SET_DONE, isDone, id };
}

export const setIndex: ActionCreator<setIndexAction> = (index, isDone) => {
    return { type: SET_INDEX, index, isDone }
}

export const setOpenedModal: ActionCreator<setOpenedModalAction> = (id, isOpenedModal) => {
    return { type: SET_OPENED_MODAL, isOpenedModal, id }
}