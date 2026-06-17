'use client'; 
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './DoctorSearch.module.css';

const categories = [
  { id: 1, name: 'Doctors', icon: '👤', targetId: 'doctors-section' },
  { id: 2, name: 'Labs', icon: '🧪', targetId: 'labs-section' },
  { id: 3, name: 'Hospitals', icon: '🏥', targetId: 'hospitals-section' },
  { id: 4, name: 'Medical Store', icon: '💊', targetId: 'store-section' },
  { id: 5, name: 'Ambulance', icon: '🚑', targetId: 'ambulance-section' },
];

interface DoctorSearchProps {
  className?: string; 
}

export default function DoctorSearch({ className }: DoctorSearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (targetId: string) => {
    if (pathname === '/Information') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      router.push(`/Information#${targetId}`);
    }
  };

  return (
    <section className={`${styles.wrapper} ${isScrolled ? styles.scrolled : ''} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.categoriesSection}>
          <p className={styles.title}>You may be looking for</p>
          
          <div className={styles.grid}>
            {categories.map((cat) => (
              <div 
                key={cat.id} 
                className={styles.card}
                onClick={() => handleCardClick(cat.targetId)}
              >
                <div className={styles.cardIcon}>{cat.icon}</div>
                <p>{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}