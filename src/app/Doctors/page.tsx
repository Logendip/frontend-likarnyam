'use client';
import { useState, useMemo, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ALL_DOCTORS, Doctor } from '@/data/doctors';
import styles from './page.module.css';

// Приклад того, як ми мапимо симптоми в ID для бекенда
const SYMPTOM_MAP: Record<string, number> = {
  'Headache': 1,
  'Fever': 2,
  'Cough': 3,
  // Додай сюди всі свої симптоми та їх відповідні ID з бази даних
};

function DoctorsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const specialtyParam = searchParams.get('specialty');

  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');

  useEffect(() => {
    const savedSymptoms = localStorage.getItem('user_symptoms');
    if (savedSymptoms) {
      setSelectedSymptoms(JSON.parse(savedSymptoms));
    }
  }, []);

  const allSpecialties = useMemo(() => {
    const specialties = ALL_DOCTORS.map(doctor => doctor.specialty);
    return ['All Specialties', ...Array.from(new Set(specialties))].sort();
  }, []);

  useEffect(() => {
    if (specialtyParam) {
      const matchedSpecialty = allSpecialties.find(
        (s) => s.toLowerCase() === specialtyParam.toLowerCase()
      );
      if (matchedSpecialty) setSelectedSpecialty(matchedSpecialty);
    }
  }, [specialtyParam, allSpecialties]);

  const allPossibleSymptoms = useMemo(() => {
    const symptoms = ALL_DOCTORS.flatMap(doctor => doctor.symptoms);
    return Array.from(new Set(symptoms)).sort();
  }, []);

  const filteredDoctors = useMemo(() => {
    return ALL_DOCTORS.filter((doctor) => {
      const matchesSymptom = selectedSymptoms.length === 0 ||
        selectedSymptoms.some(s => doctor.symptoms.includes(s));
      const matchesSpecialty =
        selectedSpecialty === 'All Specialties' ||
        doctor.specialty === selectedSpecialty;
      return matchesSymptom && matchesSpecialty;
    }).sort((a, b) => {
      if (a.specialty === 'General Practitioner' && b.specialty !== 'General Practitioner') return -1;
      return 0;
    });
  }, [selectedSymptoms, selectedSpecialty]);

  const toggleSymptom = (symptom: string) => {
    const newSymptoms = selectedSymptoms.includes(symptom)
      ? selectedSymptoms.filter(s => s !== symptom)
      : [...selectedSymptoms, symptom];
    
    setSelectedSymptoms(newSymptoms);
    localStorage.setItem('user_symptoms', JSON.stringify(newSymptoms));
  };

  
  const handleFinalBooking = async (doctor: Doctor, date: string) => {
    const payload = {
      doctor_id: doctor.id,
      symptom_ids: selectedSymptoms.map(s => SYMPTOM_MAP[s] || 0), 
      appointment_date: date
    };

    try {
      const response = await fetch('https://api.your-backend.com/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        alert("Booking successful!");
      } else {
        alert("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  const handleBookAppointment = (doctor: Doctor) => {
    router.push(`/Doctors/${doctor.id}`);
  };
   
  return (
    <main className={styles.main}>
      <section className="container">
        <div className={styles.hero}>
          <h1>Our Specialists</h1>
        </div>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.filterSection}>
              <h3>Specialty</h3>
              <select className={styles.select} value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.target.value)}>
                {allSpecialties.map(spec => <option key={spec} value={spec}>{spec}</option>)}
              </select>
            </div>
            <div className={styles.filterSection}>
              <h3>Symptoms</h3>
              <div className={styles.symptomsList}>
                {allPossibleSymptoms.map(symptom => (
                  <label key={symptom} className={styles.checkboxLabel}>
                    <input type="checkbox" checked={selectedSymptoms.includes(symptom)} onChange={() => toggleSymptom(symptom)} />
                    {symptom}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div className={styles.content}>
            <div className={styles.tagsContainer}>
              {selectedSymptoms.map(s => (
                <span key={s} className={styles.tag}>{s}
                  <button className={styles.removeTagBtn} onClick={() => toggleSymptom(s)}>✕</button>
                </span>
              ))}
            </div>

            {selectedSymptoms.length >= 2 && (
              <div style={{ 
                padding: '16px', 
                marginBottom: '20px', 
                backgroundColor: '#f0f9ff', 
                border: '1px solid #bae7ff', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '14px',
                color: '#0050b3'
              }}>
                <span style={{ fontSize: '20px' }}>💡</span>
                <p style={{ margin: 0 }}>
                  Multiple symptoms selected. We suggest starting with a <strong>General Practitioner</strong>.
                </p>
              </div>
            )}

            <div className={styles.grid}>
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className={styles.card}>
                  <div className={styles.avatar}><span>{doctor.emoji}</span></div>
                  <h3>{doctor.name}</h3>
                  <p>{doctor.specialty.toUpperCase()}</p>
                  <button className={styles.bookBtn} onClick={() => handleBookAppointment(doctor)}>
                    Book an Appointment
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function DoctorsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DoctorsPageContent />
    </Suspense>
  );
}