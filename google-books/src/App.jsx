import Header from "./containers/Header/Header"
import Home from "./containers/Home/Home"
import BookListContextProvider from "./context/BookListContextProvider"
import SearchTermContextProvider from "./context/SearchTermContextProvider"
import BookModal from "./components/BookModal/BookModal"
import "./app.css"
import Wrapper from "./containers/Wrapper/Wrapper"

function App() {

  return (
      <SearchTermContextProvider>
        <BookListContextProvider>
          <Wrapper />
        </BookListContextProvider>
      </SearchTermContextProvider>
  )
}

export default App
