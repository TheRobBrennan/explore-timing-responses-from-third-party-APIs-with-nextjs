import styles from './page.module.css'
import APIComparison from './components/api-comparison/api-comparison'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <APIComparison />
      </div>

    </main>
  )
}
