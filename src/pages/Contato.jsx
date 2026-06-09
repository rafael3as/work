import styles from './Contato.module.css'
import nba2gif from '../assets/nba2.gif'
import { Navigate, useNavigate } from 'react-router-dom'

function Contato() {
  const navigate = useNavigate()
  return (
    <div className={styles.contato}>
      <h1>Contato</h1>
      <img src={nba2gif} alt="" className={styles.gif} />
      <button onClick={() => navigate('home')}>Home</button>
      <button onClick={() => navigate('sobre')}>Sobre</button>
    </div>
  )
}

export default Contato
