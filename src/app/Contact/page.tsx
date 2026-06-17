import React from 'react';
import Container from '@/components/common/Container/Container';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      <Container>
        <div className={styles.header}>
          <p className={styles.subTitle}>Get In Touch</p>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <form className={styles.contactForm}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" placeholder="Enter your first name" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" placeholder="Enter your last name" required />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone number</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" required />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="topic">Choose a topic</label>
            <select id="topic" required>
              <option value="">Select one..</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="billing">Billing</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Type your message..." rows={6} required></textarea>
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I accept the terms</label>
          </div>

          <div className={styles.btnWrapper}>
            <button type="submit" className={styles.submitBtn}>Submit</button>
          </div>
        </form>
      </Container>
    </main>
  );
}