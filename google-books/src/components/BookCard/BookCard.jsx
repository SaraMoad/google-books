import React from 'react'
// -   Each book in the grid should have an image, author, title and description
import styles from "./BookCard.module.scss"

const BookCard = ({ handleClick, image, title, authors, description }) => {
    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.image__container}>
                {image ? <img src={image.thumbnail} /> : <p>Image not found </p>}
            </div>
            <div className={styles.book__information__container}>
                {title ? <h3 className={styles.title}>{title}</h3> : <h3 className={styles.title}>Unknown Title</h3>}
                {!Array.isArray(authors) ?
                    <p>Authors: Unknown</p> : <p>{authors.join(",  ")}</p>
                }
                {description && <p className={styles.description}>{description}</p>}
            </div>
       
        </div>
    )
}

export default BookCard