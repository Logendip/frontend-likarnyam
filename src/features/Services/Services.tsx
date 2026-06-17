'use client';

import { useRouter } from 'next/navigation';
import { 
  Hospital, Stethoscope, HeartPulse, BrainCircuit, 
  FlaskConical, ShieldPlus, Microscope, Activity 
} from 'lucide-react';
import styles from './Services.module.css';

// Додаємо точне поле "filter", яке один в один збігається з твоїм ALL_DOCTORS
const specialisations = [
  { name: 'Dentistry', filter: 'Dentist', icon: <Hospital size={44} strokeWidth={1.2} /> },
  { name: 'Primary Care', filter: 'General Practitioner', icon: <Stethoscope size={44} strokeWidth={1.2} /> },
  { name: 'Cardiology', filter: 'Cardiologist', icon: <HeartPulse size={44} strokeWidth={1.2} /> },
  { name: 'Neurology', filter: 'Neurologist', icon: <BrainCircuit size={44} strokeWidth={1.2} /> }, // змінено під твого Dr. Shevchenko
  { name: 'Psychiatry', filter: 'Psychiatrist', icon: <ShieldPlus size={44} strokeWidth={1.2} /> }, // змінено під твого Dr. Kravets
  // Для інших категорій, якщо лікарів поки немає, залишаємо пошук по назві
  { name: 'Blood Test', filter: 'Blood Test', icon: <FlaskConical size={44} strokeWidth={1.2} /> },
  { name: 'Laboratory', filter: 'Laboratory', icon: <Microscope size={44} strokeWidth={1.2} /> },
  { name: 'X-Ray', filter: 'X-Ray', icon: <Activity size={44} strokeWidth={1.2} /> },
];

export default function Services() {
  const router = useRouter();

  const handleCategoryClick = (filterValue: string) => {
    const encodedFilter = encodeURIComponent(filterValue);
    // Тепер передаємо в URL саме те значення, яке очікує сторінка лікаря
    router.push(`/Doctors?specialty=${encodedFilter}`);
  };

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Find By Specialisation</h2>
        
        <div className={styles.grid}>
          {specialisations.map((item, index) => (
            <div 
              key={index} 
              className={styles.card} 
              onClick={() => handleCategoryClick(item.filter)} // <--- Передаємо правильний фільтр
            >
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <p className={styles.name}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}