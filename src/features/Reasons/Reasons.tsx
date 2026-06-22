import Link from 'next/link'; 
import Image from 'next/image';
import styles from './Reasons.module.css';

export default function Reasons() {
  return (
    <section className={styles.reasonsSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            You have lots of reasons <br /> to choose us
          </h2>
          <p className={styles.description}>
            Your health is our top priority. 
            We have created a space where every patient 
            receives not only expert medical care but also 
            personalized attention, support, and comfort 
            at every stage of their recovery.
          </p>
          <div className={styles.buttonGroup}>
     
            <Link href="/Signup" className={styles.btnPrimary}>
              Get started
            </Link>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <img 
            src="Reasons.svg" 
            alt="Medical specialists" 
            className={styles.mainImage}
          />
        </div>
      </div>
    </section>
  );
}