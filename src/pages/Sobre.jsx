import styles from './Sobre.module.css'
import nba3gif from '../assets/nba3.gif'
import { Navigate, useNavigate } from 'react-router-dom'

function Sobre() {
  const navigate = useNavigate()
  return (
    <div className={styles.sobre}>
      <h1>Sobre</h1>
      <img src={nba3gif} alt="" className={styles.gif} />
      <button onClick={() => navigate('home')}>Home</button>
      <button onClick={() => navigate('contato')}>Contato</button>
    </div>
  )
}

export default Sobre
