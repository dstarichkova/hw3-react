import {Layout} from "./components/Layout/Layout";
import {BookPage} from "./pages/BookPage/BookPage";
import {SectionPage} from "./pages/SectionPage/SectionPage";
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {Books} from "./components/Books/Books";
import {Section} from "./components/Section/Section";

export function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<SectionPage/>}>
                            <Route path=":sectionId" element={<Section/>}/>
                        </Route>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                    {/*<BookPage book={sections[0].books[0]}/>*/}
                </Layout>
            </BrowserRouter>
        </Provider>
    );
}