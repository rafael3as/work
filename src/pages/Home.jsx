import styles from './Home.module.css'
import nba1gif from '../assets/nba1.gif'
import { Navigate, useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <img src={nba1gif} alt="" className={styles.gif} />
      <button onClick={() => navigate('sobre')}>Sobre</button>
      <button onClick={() => navigate('contato')}>Contato</button>
    </div>
  )
}

export default Home
