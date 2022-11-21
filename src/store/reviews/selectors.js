import {Statuses} from "../../constants/statuses";

export const selectReviewModule = (state) =>
    state;

export const selectReviews = (state) =>
    Object.values(selectReviewModule(state).entities);

export const selectReviewById = (state, reviewId) => {
    console.log(state)
    // return selectReviewModule(state).entities.reviews[reviewId]
}


export const selectIsReviewsLoading = (state) =>
    selectReviewModule(state)?.status === Statuses.inProgress;