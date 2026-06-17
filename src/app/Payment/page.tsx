'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.paymentContainer}>
      {/* Left Side: Order Summary */}
      <div className={styles.orderSummary}>
        <div className={styles.header}>
          <h2 className={styles.logo}>Healthcare</h2>
        </div>
        
        <div className={styles.orderInfo}>
          <span className={styles.orderLabel}>YOUR ORDER:</span>
          <h1 className={styles.serviceTitle}>General Practitioner Consultation</h1>
          <p className={styles.appointmentDetail}>Appointment on May 14, 10:30</p>
          
          <div className={styles.priceContainer}>
            <span className={styles.price}>500.00 UAH</span>
          </div>
        </div>

        <p className={styles.disclaimer}>
          * By clicking the button, you agree to the terms of providing medical services.
        </p>
      </div>

      {/* Right Side: Payment Form */}
      <div className={styles.paymentForm}>
        <h2 className={styles.formTitle}>Payment details</h2>
        
        <div className={styles.formGroup}>
          <label>NAME ON CARD</label>
          <input 
            type="text" 
            name="cardName"
            placeholder="Hryhorii Skovoroda" 
            value={formData.cardName}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>CARD NUMBER</label>
          <input 
            type="text" 
            name="cardNumber"
            placeholder="0000 0000 0000 0000" 
            value={formData.cardNumber}
            onChange={handleChange}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>EXPIRY DATE</label>
            <input 
              type="text" 
              name="expiry"
              placeholder="MM/YY" 
              value={formData.expiry}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>CVV</label>
            <input 
              type="password" 
              name="cvv"
              placeholder="***" 
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className={styles.payBtn}>Pay now</button>

        <div className={styles.securityNote}>
          <span className={styles.lockIcon}>🔒</span>
          Secure 256-bit SSL Encrypted Payment
        </div>
      </div>
    </div>
  );
}