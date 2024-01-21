import React, { useContext, useRef, useState } from 'react'
import { BookContext } from '../../context/BookListContextProvider'
import { SearchContext } from '../../context/SearchTermContextProvider'
import Button from '../Button/Button'
import { fetchBooks } from '../../data/fetchBooks'
import styles from "./SearchBar.module.scss"

const SearchBar = () => {
    const inputRef = useRef(null)
    const { setError, setLoading, setBookList, setCurrentPageNumber, setTotalPageNumbers } = useContext(BookContext)
    const {setSearchTermContext } = useContext(SearchContext)

    const OnFormSubmit = (e) => {
        e.preventDefault();
        setError(null)
        if (inputRef.current.value === "") {
            return setError("invalid search query")
        }
        setLoading(true)
        setSearchTermContext(inputRef.current.value)
        setCurrentPageNumber(0)
        fetchBooks(inputRef.current.value)
            .then((res) => { 
                console.log(res.undefined)
                if (res.results === undefined) {
                    setError("No books found matching your search")
                } else {
                    setBookList(res.dataToRender), setTotalPageNumbers(Math.floor(Number(res.results.totalResults) / 20))
                }
})
            .catch((e) => setError(e.message, "test"))
            .finally(() => { setCurrentPageNumber(0), setLoading(false)})
    }

    return (
        <form>
            <input className={ styles.input }type="text" placeholder='search' ref={inputRef}></input>
            <Button className={styles.search__button} handleClick={OnFormSubmit}>Search</Button>
        </form>
    )
}

export default SearchBar