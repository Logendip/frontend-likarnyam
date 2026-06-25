'use client';

import React, { useState } from 'react';
import styles from './PaymentModal.module.css';

export interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void; 
  doctorName: string;
  appointmentTime: string;
  price: string;
}

export default function PaymentModal({ isOpen, onClose, onPaymentSuccess, doctorName, appointmentTime, price }: PaymentModalProps) {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Збираємо симптоми з пам'яті браузера
    const savedSymptoms = localStorage.getItem('user_symptoms');
    const symptoms = savedSymptoms ? JSON.parse(savedSymptoms) : [];

    // Формуємо об'єкт для передачі бекендеру
    const bookingData = {
      doctorName,
      appointmentTime,
      price,
      symptoms,
      payment: formData
    };

    try {
      // Заміни URL на адресу сервера твого друга
      const response = await fetch('https://api.your-backend.com/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });

      if (response.ok) {
        onPaymentSuccess();
      } else {
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        
        <div className={styles.modalContent}>
          <div className={styles.orderSummary}>
            <div className={styles.header}>
              <h2 className={styles.logo}>Healthcare</h2>
            </div>
            
            <div className={styles.orderInfo}>
              <span className={styles.orderLabel}>YOUR ORDER:</span>
              <h1 className={styles.serviceTitle}>{doctorName}</h1>
              <p className={styles.appointmentDetail}>Appointment on {appointmentTime}</p>
              
              <div className={styles.priceContainer}>
                <span className={styles.price}>{price}</span>
              </div>
            </div>

            <p className={styles.disclaimer}>
              * By clicking the button, you agree to the terms of providing medical services.
            </p>
          </div>

          <form className={styles.paymentForm} onSubmit={handleSubmit}>
            <h2 className={styles.formTitle}>Payment details</h2>
            
            <div className={styles.formGroup}>
              <label>NAME ON CARD</label>
              <input type="text" name="cardName" placeholder="Hryhorii Skovoroda" value={formData.cardName} onChange={handleChange} required />
            </div>

            <div className={styles.formGroup}>
              <label>CARD NUMBER</label>
              <input type="text" name="cardNumber" placeholder="0000 0000 0000 0000" value={formData.cardNumber} onChange={handleChange} required />
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>EXPIRY DATE</label>
                <input type="text" name="expiry" placeholder="MM/YY" value={formData.expiry} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label>CVV</label>
                <input type="password" name="cvv" placeholder="***" value={formData.cvv} onChange={handleChange} required />
              </div>
            </div>

            <button type="submit" className={styles.payBtn} disabled={loading}>
              {loading ? 'Processing...' : 'Pay now'}
            </button>

            <div className={styles.securityNote}>
              <span className={styles.lockIcon}>🔒</span> Secure 256-bit SSL Encrypted Payment
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}