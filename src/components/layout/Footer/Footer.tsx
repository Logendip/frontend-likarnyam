import Container from '@/components/common/Container/Container';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brandColumn}>
            <div className={styles.logo}>Likarnyam</div>
            <p className={styles.copyright}>
              Copyright © 2026 BRIX Templates | All Rights Reserved
            </p>
          </div>

          <div className={styles.linksColumn}>
            <h4>Product</h4>
            <ul>
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Reviews</Link></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4>Support</h4>
            <ul>
              <li><Link href="#">Help center</Link></li>
              <li><Link href="#">Chat support</Link></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4>Follow us</h4>
            <ul className={styles.socials}>
              <li><Link href="#">Facebook</Link></li>
              <li><Link href="#">Twitter</Link></li>
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}