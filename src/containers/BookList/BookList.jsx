import React, { useContext, useEffect } from 'react'
import BookCard from '../../components/BookCard/BookCard.jsx'
import { BookContext } from '../../context/BookListContextProvider.jsx'
import styles from "./bookList.module.scss"
import { SearchContext } from '../../context/SearchTermContextProvider.jsx'
import Description from '../../components/Descriptions/Description.jsx'

const BookList = () => {
    const { bookList, loading, setModalId, setIsModalOpen } = useContext(BookContext);
    const { searchTermContext } = useContext(SearchContext);

    const handleOpen = (id) => {
        console.log("clicked", id)
        setIsModalOpen(true)
        setModalId(id)
    };
    
    return (
        <>
            { searchTermContext &&
                <section className={styles.container}>
                    {searchTermContext &&
                        <div className={styles.description__container}>
                            <Description searchTerm={searchTermContext} />
                        </div>
                    }
                    {loading &&
                        <div>
                        <p className={styles.loading}>Loading...</p>
                        </div>}
                    <div className={styles.bookList__container}>
                    {bookList && bookList.map((book) => {
                        return (
                        <BookCard
                        key={book.id}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        image={book.image}
                        handleClick={()=>handleOpen(book.id)}
                        />
                        )
                    })}
                    </div>
                </section>
            }     
        </>
    )
}

export default BookList