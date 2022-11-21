import {reviewSlice} from "./index";
import {prepareData} from "../utils";
import {selectBooks} from "./selectors";

export const loadBooksIfNotExist = (sectionId) => (dispatch, getState) => {
    // if (selectBooks(getState())?.length > 0) {
    //     return;
    // }

    dispatch(reviewSlice.actions.startLoading());
    fetch(`http://localhost:3001/api/reviews?bookId=${bookId}`)
        .then((response) => response.json())
        .then((books) => {
            dispatch(reviewSlice.actions.successLoading(prepareData(books)));
        })
        .catch(() => {
            dispatch(reviewSlice.actions.failLoading());
        });
}