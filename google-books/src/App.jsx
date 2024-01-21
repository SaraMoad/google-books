import Header from "./containers/Header/Header"
import Home from "./containers/Home/Home"
import BookListContextProvider from "./context/BookListContextProvider"
import SearchTermContextProvider from "./context/SearchTermContextProvider"
import BookModal from "./components/BookModal/BookModal"
import "./app.css"

function App() {

  return (
        <SearchTermContextProvider>
          <BookListContextProvider>
            <Header />
            <BookModal />
            <Home />
          </BookListContextProvider>
        </SearchTermContextProvider>
  )
}

export default App
