import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BookIndexPage from "./pages/books/BookIndexPage";
import BookShowPage from "./pages/books/BookShowPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {/* Institutional pages */}
          <Route index element={<HomePage />}></Route>
          <Route index path="about" element={<AboutPage />}></Route>

          {/* Books pages */}
          <Route path="books">
            <Route index element={<BookIndexPage />}></Route>
            <Route path=":id" element={<BookShowPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
