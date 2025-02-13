// 일반적인 CSS
//import './Card2.css';
// CSS Module을 가져올 때는
import styles from './Card2.module.css';

function Card1() {
  return <article className={styles.card}>Card2</article>;
}

export default Card1;
