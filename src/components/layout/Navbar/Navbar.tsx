'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

interface UserSession {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export default function Navbar() {
  const [user, setUser] = useState<UserSession | null>(null);

  useEffect(() => {
    const session = localStorage.getItem('user_session');
    if (session) {
      setUser(JSON.parse(session));
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem('user_session');
    setUser(null);
    window.location.href = '/Login';
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo}>
            Likarnyam
          </Link>

          <ul className={styles.links}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Service">Service</Link></li>
            <li><Link href="/Contact">Contact Us</Link></li>
            <li><Link href="/Doctors">Doctors</Link></li>
            <li><Link href="/Information">Information</Link></li>
          </ul>

          <div className={styles.auth}>
            {user ? (
              <>
                <span className={styles.userInfo}>👋 Hi, {user.name}</span>
                <button onClick={handleLogOut} className={styles.logOutBtn}>
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link href="/Signup" className={styles.signUp}>
                  Sign Up
                </Link>
                <Link href="/Login" className={styles.logIn}>
                  Log In
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}