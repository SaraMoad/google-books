import BookList from '../BookList/BookList'
import Pagination from '../../components/Pagination/Pagination'
import styles from "./Home.module.scss"
import { useContext } from 'react'
import { BookContext } from '../../context/BookListContextProvider'
import Error from '../../components/Error/Error'

const Home = () => {
    const { error } = useContext(BookContext)
     return (
        <main className={styles.container}> 
            {error && <Error error={error} />}
            <BookList />
            <Pagination />
        </main>
    )
}

export default Home