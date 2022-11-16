export const selectSectionModule = (state) => state.section;

export const selectSections = (state) =>
    Object.values(selectSectionModule(state).entities);

export const selectSectionById = (state, sectionId) =>
    selectSectionModule(state).entities[sectionId];

export const selectSectionBookIds = (state, sectionId) =>
    selectSectionModule(state).entities[sectionId].books;