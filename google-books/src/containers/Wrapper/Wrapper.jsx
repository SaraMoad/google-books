import React, { useContext, useEffect } from 'react'
import Header from '../Header/Header'
import Home from '../Home/Home'
import BookModal from '../../components/BookModal/BookModal'
import styles from "./Wrapper.module.scss"

const Wrapper = () => {

    return (
      <>
        <Header />
        <Home />
        <BookModal />    
      </>
  )
}

export default Wrapper