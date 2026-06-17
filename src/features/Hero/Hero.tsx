import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Providing Quality <span className={styles.teal}>Healthcare</span> For A <br />
          <span className={styles.green}>Brighter</span> And <span className={styles.green}>Healthy</span> Future
        </h1>
        
        <p className={styles.description}>
          At Our Hospital, We Are Dedicated To Providing Exceptional Medical Care 
          To Our Patients And Their Families. Our Experienced Team Of Medical 
          Professionals, Cutting-Edge Technology, And Compassionate Approach 
          Make Us A Leader In The Healthcare Industry.
        </p>
      </div>

      <div className={styles.imageWrapper}>
  <div className={styles.blob}></div>
  
  <img src="/doctor-hero.svg" alt="Doctor" className={styles.doctorImg} />

  
  <div className={styles.serviceBadge}>
    <span className={styles.tealText}>24/7</span> Service
  </div>

  
  <div className={styles.proBadge}>
    <p>Our Professionals</p>
    <div className={styles.avatarGroup}>
      <img src="/av1.svg" alt="pro" />
      <img src="/av2.svg" alt="pro" />
      <img src="/av3.svg" alt="pro" />
      <img src="/av4.svg" alt="pro" />
      <img src="/av5.svg" alt="pro" />
      <img src="/av6.svg" alt="pro" />
      <img src="/av7.svg" alt="pro" />
      <div className={styles.moreAvatars}>30+</div>
    </div>
  </div>
</div>
    </section>
  );
}