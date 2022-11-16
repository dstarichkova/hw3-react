import {sectionSlice} from "./index";
import {prepareData} from "../utils";
import {selectSections} from "./selectors";

export const loadSectionsIfNotExist = (dispatch, getState) => {
    if (selectSections(getState())?.length > 0) {
        return;
    }

    dispatch(sectionSlice.actions.startLoading());
    fetch('http://localhost:3001/api/sections')
        .then((response) => response.json())
        .then((sections) => {
            dispatch(sectionSlice.actions.successLoading(prepareData(sections)))
        }).catch(() => {
            dispatch(sectionSlice.actions.failLoading());
    });
}