"use client";

import React, { useState } from "react";
import styles from "./PatientDetailsModal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onProceed: (details: any) => void;
}

export function PatientDetailsModal({ isOpen, onClose, onProceed }: Props) {
  const [details, setDetails] = useState({ gender: '', address: '', bloodType: '', notes: '' });
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!details.gender || !details.address || !details.bloodType) {
      setError('Please fill in all required fields.');
      return;
    }
    
    setError('');
    onProceed(details);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Additional Information</h2>
        
        {error && <p className={styles.errorMessage}>{error}</p>}
        
    
        <select 
          className={styles.inputField} 
          onChange={(e) => setDetails({...details, gender: e.target.value})}
          value={details.gender}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input 
          className={styles.inputField} 
          placeholder="Address" 
          onChange={(e) => setDetails({...details, address: e.target.value})} 
        />

 
        <select 
          className={styles.inputField} 
          onChange={(e) => setDetails({...details, bloodType: e.target.value})}
          value={details.bloodType}
        >
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <textarea 
          className={styles.textArea} 
          placeholder="Notes" 
          onChange={(e) => setDetails({...details, notes: e.target.value})} 
        />
        
        <div className={styles.actions}>
          <button className={`${styles.btn} ${styles.btnSkip}`} onClick={() => onProceed(null)}>Skip</button>
          <button className={`${styles.btn} ${styles.btnSubmit}`} onClick={handleSubmit}>Submit & Proceed</button>
        </div>
      </div>
    </div>
  );
}