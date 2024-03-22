import React, { useContext, useRef, useState } from 'react'
import { BookContext } from '../../context/BookListContextProvider'
import { SearchContext } from '../../context/SearchTermContextProvider'
import Button from '../Button/Button'
import { fetchBooks } from '../../data/fetchBooks'
import styles from "./SearchBar.module.scss"

const SearchBar = () => {
    const inputRef = useRef(null)
    const { setError, setLoading, setBookList, setCurrentPageNumber, setTotalPageNumbers, totalPageNumbers } = useContext(BookContext)
    const {setSearchTermContext } = useContext(SearchContext)

    const onFormSubmit = (e) => {
        e.preventDefault();        
        const inputValue = inputRef.current.value;
        setError(null)
        if (inputValue.trim() === "") {
            return setError("invalid search input.")
        }
        setLoading(true)
        setCurrentPageNumber(0)
        fetchBooks(inputValue)
            .then((res) => { 
                setBookList(res.dataToRender); setTotalPageNumbers(Math.floor(Number(res.results.totalResults) / 20))
            })
            .catch((e) => {setError(e.message); setBookList([]); setTotalPageNumbers(0)})
            .finally(() => { setCurrentPageNumber(0); setLoading(false); setSearchTermContext(inputValue); })
    }
    

    return (
        <form>
            <input className={ styles.input }type="text" placeholder='search' ref={inputRef}></input>
            <Button className={styles.search__button} handleClick={onFormSubmit}>Search</Button>
        </form>
    )
}

export default SearchBar