import { selectCartBookIds } from "./selectors";
import { loadBooksIfNotExist } from "../books/loadBooksIfNotExist";

export const loadCartIfNotExist = (dispatch, getState) => {
    const items = selectCartBookIds(getState());
    items.forEach((item) => loadBooksIfNotExist(item)(dispatch, getState));
};