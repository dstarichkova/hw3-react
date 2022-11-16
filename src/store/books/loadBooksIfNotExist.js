import {bookSlice} from "./index";
import {prepareData} from "../utils";
import {selectBooks} from "./selectors";

export const loadBooksIfNotExist = (sectionId) => (dispatch, getState) => {
    // if (selectBooks(getState())?.length > 0) {
    //     return;
    // }

    dispatch(bookSlice.actions.startLoading());
    fetch(`http://localhost:3001/api/books?sectionId=${sectionId}`)
        .then((response) => response.json())
        .then((sections) => {
            dispatch(bookSlice.actions.successLoading(prepareData(sections)));
        })
        .catch(() => {
            dispatch(bookSlice.actions.failLoading());
    });
}