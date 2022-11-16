const router = require("express").Router();
const { sections, books, reviews, users } = require("./mock");
const { reply, getById } = require("./utils");

router.get("/sections", (req, res, next) => {
    reply(res, sections);
});

router.get("/books", (req, res, next) => {
    const { sectionId } = req.query;
    let result = books;

    if (sectionId) {
        const section = getById(sections)(sectionId);
        if (section) {
            result = section.books.map(getById(result));
        }
    }
    reply(res, result);
});

router.get("/reviews", (req, res, next) => {
    const { sectionId, bookId } = req.query;
    let result = reviews;
    if (sectionId) {
        const section = getById(sections)(sectionId);
        if (section) {
            const book = getById(books)(bookId);
            if (book) {
                result = section.book.reviews.map(getById(result));
            }
        }
    }
    reply(res, result);
});

router.get("/users", (req, res, next) => {
    reply(res, users);
});

module.exports = router;
