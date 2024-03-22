import styles from "./Error.module.scss"

const Error = ({ error }) => {
  return (
      <div className={styles.container}>
         <p>{error}</p>
    </div>
  )
}

export default Error