import {Statuses} from "../../constants/statuses";

export const selectUserModule = (state) =>
    state.user;

export const selectUser = (state) =>
    Object.values(selectUserModule(state).entities);

export const selectUserById = (state, userId) => {
    console.log(state)
    return selectUserModule(state).entities[userId];
}


export const selectIsUsersLoading = (state) => {
    console.log(state)
    return selectUserModule(state)?.status === Statuses.inProgress;
}
