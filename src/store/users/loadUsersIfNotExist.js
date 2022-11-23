import {userSlice} from "./index";
import {prepareData} from "../utils";

export const loadUsersIfNotExist = (userId) => (dispatch, getState) => {

    dispatch(userSlice.actions.startLoading());

    fetch(`http://localhost:3001/api/users`)
        .then((response) => response.json())
        .then((users) => {
            dispatch(userSlice.actions.successLoading(prepareData(users)));
        })
        .catch(() => {
            dispatch(userSlice.actions.failLoading());
        });
}