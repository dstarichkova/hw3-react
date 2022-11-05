import {Layout} from "./components/Layout/Layout";
import {BookPage} from "./pages/BookPage/BookPage";
import {SectionPage} from "./pages/SectionPage/SectionPage";
import {sections} from "./constants/mock";

export function App() {
    return <Layout>
        <SectionPage sections={sections}/>
        {/*<BookPage book={sections[0].books[0]}/>*/}
    </Layout>
}