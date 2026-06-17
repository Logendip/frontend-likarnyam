'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Дістаємо масив зареєстрованих користувачів
    const currentUsers = JSON.parse(localStorage.getItem('users_db') || '[]');

    // 2. Шукаємо користувача з таким email та password
    const foundUser = currentUsers.find(
      (u: any) => u.email === email && u.password === password
    );

    if (!foundUser) {
      alert("❌ Invalid email or password! Please check your credentials.");
      return;
    }

    // 3. Якщо знайшли — створюємо сесію входу
    const sessionUser = {
      name: foundUser.name,
      email: foundUser.email,
      isLoggedIn: true
    };

    localStorage.setItem('user_session', JSON.stringify(sessionUser));

    // 4. Перенаправляємо на головну сторінку лікарів із повним перезавантаженням
    window.location.href = '/Doctors';
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.illustrationSide}>
          <div className={styles.circleBg}>
             <img src="/auth-img.svg" alt="Healthcare" className={styles.image} />
          </div>
          <h2>Healthcare Digital</h2>
          <p>The future of health is in your hands</p>
        </div>

        <div className={styles.formSide}>
          <div className={styles.header}>
            <h1>Welcome Back</h1>
            <p>Enter your credentials to access your account</p>
          </div>

          <form className={styles.form} onSubmit={handleLogin}>
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

            <button type="submit" className={styles.submitBtn}>Log In</button>
          </form>

          <p className={styles.footerText}>
            Don't have an account? <Link href="/Signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </main>
  );
}