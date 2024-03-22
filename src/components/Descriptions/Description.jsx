import { useContext } from 'react'
import { SearchContext } from '../../context/SearchTermContextProvider'
import styles from "./Description.module.scss"
import { BookContext } from '../../context/BookListContextProvider'

const Description = () => {
    const { searchTermContext } = useContext(SearchContext)
    const {error} = useContext(BookContext)
    
    return (
        <>
        { !error && searchTermContext &&
        <div className={styles.title}>Showing Results for "{searchTermContext}"</div>
        }
    </>
    )
}

export default Description