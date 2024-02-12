import { useContext, useEffect } from 'react'
import Button from '../Button/Button'
import { BookContext } from '../../context/BookListContextProvider'
import { fetchBooks } from '../../data/fetchBooks'
import { SearchContext } from '../../context/SearchTermContextProvider'
import styles from "./Pagination.module.scss"

const Pagination = () => {
    const { setError, setLoading, currentPageNumber, setCurrentPageNumber, totalPageNumbers, setBookList } = useContext(BookContext)
    const { searchTermContext } = useContext(SearchContext)
    
    const decrementPageNumber = () => {
        const newPageNumber = currentPageNumber - 1;
        setCurrentPageNumber(newPageNumber)
        setLoading(true)
        fetchBooks(searchTermContext, newPageNumber * 40)
            .then((res) => setBookList(res.dataToRender))
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false))
    }
    const incrementPageNumber = () => {
        const newPageNumber = currentPageNumber + 1;
        setCurrentPageNumber(newPageNumber)
        setLoading(true)
        fetchBooks(searchTermContext, newPageNumber * 40)
            .then((res) => setBookList(res.dataToRender))
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false))

    }

    return (
        <div className={styles.container}>
            {currentPageNumber > 0 &&
                <Button className={styles.pagination__buttons} handleClick={decrementPageNumber}>Previous Page</Button>}
            {!currentPageNumber == 0  && < h2 > { currentPageNumber }</h2>}
            {currentPageNumber < totalPageNumbers &&
                <Button className={styles.pagination__buttons} handleClick={incrementPageNumber}>Next Page</Button>}
        </div>
    )
}

export default Pagination