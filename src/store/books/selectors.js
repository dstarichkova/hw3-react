import {Statuses} from "../../constants/statuses";
import {selectSectionModule} from "../section/selectors";

export const selectBookModule = (state) =>
    state.book;

export const selectBooks = (state) => {
    // console.log(state, 'store1')
    // console.log(selectBookModule(state).entities, 'store2')
    return Object.values(selectBookModule(state).entities);
}

export const selectBookById = (state, bookId) => {
    // console.log(state, 'store1')
    // console.log((selectBookModule(state).entities[bookId]), 'store2')
    return selectBookModule(state).entities[bookId]}

export const selectIsBooksLoading = (state) =>
    selectBookModule(state).status === Statuses.inProgress;

export const selectBookReviewIds = (state, bookId) => {
    // console.log(state, "storereviews")
    // console.log((selectBookModule(state).entities), "storeselectbookmodule")
    return selectBookModule(state).entities[bookId]?.reviews;
}

