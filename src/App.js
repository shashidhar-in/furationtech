import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import IndexPage from './components/pages/IndexPage';
import AboutPage from './components/pages/AboutPage';
import FreeBookPage from './components/pages/FreeBookPage';
import BookDetailPage from "./components/pages/BookDetailPage";
import NotFound from "./components/pages/NotFound";
import SearchPage from "./components/pages/SearchPage";
import SearchBooksContextProvider from "./contexts/SearchBooksContext";
import BookContextProvider from './contexts/BookContext';
import CheckOut from "./components/pages/CheckOut";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SearchBooksContextProvider>
        <BookContextProvider>
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route  path="/" element={<IndexPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/freebook" element={<FreeBookPage/>} />
            <Route path="/search/:keyword" element={<SearchPage/>}/>
            <Route path="/books/:book_id" element={<BookDetailPage/>}/>
                        <Route path="/checkout" element={<CheckOut/>} />

            <Route path="*" element={ <NotFound />} />
             
            
          </Routes>
        </div>
        </BookContextProvider>
        </SearchBooksContextProvider>
      </div>
    </BrowserRouter>
  );
}



export default App;
