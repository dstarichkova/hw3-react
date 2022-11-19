import { selectBooks } from "../books/selectors";

export const selectCartModule = (state) => state.cart;

export const selectBookCount = (state, bookId) =>
    selectCartModule(state)[bookId]

export const selectCartBookCountById = (id) => (state) =>
    selectCartModule(state)[id] || 0;

export const selectCartBookIds = (state) =>
    Object.keys(selectCartModule(state)).filter(
        (id) => !!selectCartBookCountById(id)(state)
    );

export const selectCart = (state) =>
    selectCartBookIds(state).map((id) => ({
        bookId: id,
        count: selectCartModule(state)[id],
    }));

export const selectCartBooks = (state) => {
    const cart = selectCartBookIds(state);
    return selectBooks(state).filter((book) => cart.indexOf(book.id) >= 0);
};

export const selectCartTotal = (state) =>
    selectCartBooks(state).reduce(
        (sum, p) => (sum += p.price * selectCartBookCountById(p.id)(state)),
        0
    );

