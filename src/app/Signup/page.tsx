'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("⚠️ Passwords do not match!");
      return;
    }

    const currentUsers = JSON.parse(localStorage.getItem('users_db') || '[]');

    const userExists = currentUsers.some((u: any) => u.email === email);
    if (userExists) {
      alert("⚠️ A user with this email already exists!");
      return;
    }

    const newUser = {
      name: fullName,
      email: email,
      password: password
    };
    
    currentUsers.push(newUser);
    localStorage.setItem('users_db', JSON.stringify(currentUsers));

    const sessionUser = {
      name: fullName,
      email: email,
      isLoggedIn: true
    };
    localStorage.setItem('user_session', JSON.stringify(sessionUser));

    alert(`🎉 Account created successfully! Welcome, ${fullName}!`);
    
    window.location.href = '/Doctors';
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.illustrationSide}>
          <div className={styles.circleBg}>
              <img src="/auth-img.svg" alt="Healthcare" className={styles.image} />
          </div>
          <h2>Join Healthcare</h2>
          <p>Start your journey to a healthier life today</p>
        </div>

        <div className={styles.formSide}>
          <div className={styles.header}>
            <h1>Create Account</h1>
            <p>Fill in the details below to get started</p>
          </div>

          <form className={styles.form} onSubmit={handleSignup}>
            <div className={styles.inputGroup}>
              <label>FULL NAME</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required 
              />
            </div>

            <div className={styles.inputGroup}>
              <label>EMAIL ADDRESS</label>
              <input 
                type="email" 
                placeholder="example@mail.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>

            <div className={styles.inputGroup}>
              <label>PASSWORD</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <div className={styles.inputGroup}>
              <label>CONFIRM PASSWORD</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
              />
            </div>

            <button type="submit" className={styles.submitBtn}>Sign Up</button>
          </form>

          <p className={styles.footerText}>
            Already have an account? <Link href="/Login">Log In</Link>
          </p>
        </div>
      </div>
    </main>
  );
}