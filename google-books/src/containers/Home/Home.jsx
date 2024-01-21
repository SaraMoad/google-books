import BookList from '../BookList/BookList'
import Pagination from '../../components/Pagination/Pagination'
import styles from "./Home.module.scss"
import { useContext } from 'react'
import { BookContext } from '../../context/BookListContextProvider'

const Home = () => {
    const {error} = useContext(BookContext)
     return (
        <main className={styles.container}> 
             {error &&
                 <div>
                     <p>{error}</p>
                </div>}
            <BookList />
            <Pagination />
        </main>
    )
}

export default Home