import { useContext, useEffect } from 'react'
import Button from '../Button/Button'
import { BookContext } from '../../context/BookListContextProvider'
import { fetchBooks } from '../../data/fetchBooks'
import { SearchContext } from '../../context/SearchTermContextProvider'
import styles from "./Pagination.module.scss"

const Pagination = () => {
    const { setLoading, currentPageNumber, setCurrentPageNumber, totalPageNumbers, setBookList } = useContext(BookContext)
    const { searchTermContext } = useContext(SearchContext)
    
    const decrementPageNumber = () => {
        setCurrentPageNumber(currentPageNumber - 1)
        setLoading(true)
        fetchBooks(searchTermContext, (currentPageNumber - 1) * 40)
            .then((res) => setBookList(res.dataToRender))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false))
        console.log(currentPageNumber)
    }
    const incrementPageNumber = async () => {
        console.log(currentPageNumber, "before")
       await setCurrentPageNumber(currentPageNumber + 1)
        fetchBooks(searchTermContext, (currentPageNumber + 1) * 40)
            .then((res) => setBookList(res.dataToRender))
            .catch((e) => console.log(e))

    }

    return (
        <div className={styles.container}>
            {currentPageNumber > 0 && <Button className={styles.pagination__buttons} handleClick={decrementPageNumber}>Previous Page</Button>}
            {!currentPageNumber == 0  && < h2 > { currentPageNumber }</h2>}
            {currentPageNumber < totalPageNumbers && <Button className={styles.pagination__buttons} handleClick={incrementPageNumber}>Next Page</Button>}
        </div>
    )
}

export default Pagination