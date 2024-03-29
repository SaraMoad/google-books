import React, { useState, createContext } from 'react'

export const BookContext = createContext(null)

const BookListContextProvider = ({ children }) => {
    const [bookList, setBookList] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPageNumber, setCurrentPageNumber] = useState(0)
    const [totalPageNumbers, setTotalPageNumbers] = useState(0)
    const [modalId, setModalId] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [error, setError] = useState(null)
    
    
    const providedContext = {
        bookList,
        setBookList,
        loading,
        setLoading,
        totalPageNumbers,
        setTotalPageNumbers,
        currentPageNumber,
        setCurrentPageNumber,
        modalId,
        setModalId,
        isModalOpen,
        setIsModalOpen,
        error,
        setError
    }

    return (
        <>
            <BookContext.Provider value={providedContext}>{children}</BookContext.Provider>
        </>
    )
}

export default BookListContextProvider