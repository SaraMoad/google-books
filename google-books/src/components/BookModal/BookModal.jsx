import { useContext } from 'react'
import { BookContext } from '../../context/BookListContextProvider'
import Button from '../Button/Button'
import styles from "./BookModal.module.scss"

const BookModal = () => {
    const { isModalOpen, setIsModalOpen, bookList, modalId } = useContext(BookContext)
    const book = bookList.find((book) => book.id === modalId)
    
    const handleClose = () => {
        setIsModalOpen(false)
    }
    
    return (
        <>
            {isModalOpen && book &&
                <div className={styles.modal}>
                    <div className={styles.modal__content}>
                        <div>
                            <Button className={styles.close} handleClick={handleClose}>X</Button>
                        </div>
                        <div>

                            {book.image ? <img src={book.image.smallThumbnail} /> : <p>Image not found</p>}
                            {book.title ? <h3>{book.title}</h3> : <h3>Unknown Title</h3> }
                            {book.authors ? <p> Authors: {book.authors}</p> : <p> Authors: Unknown Authors</p>}
                            {book.publishedDate ? <p> Published on: {book.publishedDate}</p> : <p> Published on: Unknown Date</p>}
                            {book.publisher ? <p> Published by: {book.publisher}</p> : <p>Published by: Unknown Publisher</p>}
                            {book.language ? <p>Languages available: {book.language}</p> : <p> Languages available: Unknown</p>}
                            {book.description ? <p> Description: {book.description}</p> : <p>Description: not provided</p>}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default BookModal