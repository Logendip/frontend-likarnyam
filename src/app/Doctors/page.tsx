'use client';
import { useState, useMemo, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ALL_DOCTORS, Doctor } from '@/data/doctors'; 
import styles from './page.module.css';
import modalStyles from './modal.module.css';

function DoctorsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const specialtyParam = searchParams.get('specialty');

  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDoctor, setActiveDoctor] = useState<Doctor | null>(null);

  const allSpecialties = useMemo(() => {
    const specialties = ALL_DOCTORS.map(doctor => doctor.specialty);
    return ['All Specialties', ...Array.from(new Set(specialties))].sort();
  }, []);

  useEffect(() => {
    if (specialtyParam) {
      const matchedSpecialty = allSpecialties.find(
        (s) => s.toLowerCase() === specialtyParam.toLowerCase()
      );
      if (matchedSpecialty) {
        setSelectedSpecialty(matchedSpecialty);
      }
    }
  }, [specialtyParam, allSpecialties]);

  const allPossibleSymptoms = useMemo(() => {
    const symptoms = ALL_DOCTORS.flatMap(doctor => doctor.symptoms);
    return Array.from(new Set(symptoms)).sort();
  }, []);

  const filteredDoctors = useMemo(() => {
    let results = ALL_DOCTORS.filter((doctor) => {
      const matchesSymptom = selectedSymptoms.length === 0 || 
        selectedSymptoms.some(s => doctor.symptoms.includes(s));
      const matchesSpecialty = 
        selectedSpecialty === 'All Specialties' || 
        doctor.specialty === selectedSpecialty;
      return matchesSymptom && matchesSpecialty;
    });

    return results.sort((a, b) => {
      if (a.specialty === 'General Practitioner' && b.specialty !== 'General Practitioner') return -1;
      if (a.specialty !== 'General Practitioner' && b.specialty === 'General Practitioner') return 1;
      return 0;
    });
  }, [selectedSymptoms, selectedSpecialty]);

  const showRecommendation = useMemo(() => {
    if (selectedSymptoms.length < 2) return false;
    const matchedSpecialties = new Set(
      ALL_DOCTORS.filter(d => d.symptoms.some(s => selectedSymptoms.includes(s)))
                 .map(d => d.specialty)
    );
    return matchedSpecialties.size > 1;
  }, [selectedSymptoms]);

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) ? prev.filter(s => s !== symptom) : [...prev, symptom]
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveDoctor(null);
  };

  const handleBookAppointment = (doctorId: number) => {
    router.push(`/Doctors/doctorId=${doctorId}`);
  };
    
  return (
    <main className={styles.main}>
      <section className="container">
        <div className={styles.hero}>
          <h1>Our Specialists</h1>
          <p>Select your symptoms or specialty to find the right care</p>
        </div>

        {showRecommendation && (
          <div className={styles.recommendation}>
            <span className={styles.lightbulb}>💡</span>
            <p>Multiple areas affected. We suggest starting with a <strong>General Practitioner</strong>.</p>
          </div>
        )}

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.filterSection}>
              <h3>Specialty</h3>
              <select 
                className={styles.select}
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                {allSpecialties.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            <div className={styles.filterSection}>
              <h3>Symptoms</h3>
              <div className={styles.symptomsList}>
                {allPossibleSymptoms.map(symptom => (
                  <label key={symptom} className={styles.checkboxLabel}>
                    <input 
                      type="checkbox" 
                      checked={selectedSymptoms.includes(symptom)}
                      onChange={() => toggleSymptom(symptom)}
                    />
                    {symptom}
                  </label>
                ))}
              </div>
              {selectedSymptoms.length > 0 && (
                <button className={styles.clearBtn} onClick={() => setSelectedSymptoms([])}>
                  Reset symptoms
                </button>
              )}
            </div>
          </aside>

          <div className={styles.content}>
            <div className={styles.grid}>
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className={styles.card}>
                  <div className={styles.avatar}><span>{doctor.emoji}</span></div>
                  <span className={styles.specialtyLabel}>{doctor.specialty.toUpperCase()}</span>
                  <h3 className={styles.name}>{doctor.name}</h3>
                  
                  <div className={styles.matchedSymptoms}>
                    {doctor.symptoms.filter(s => selectedSymptoms.includes(s)).map(s => (
                      <span key={s} className={styles.matchTag}>✓ {s}</span>
                    ))}
                  </div>

                  <p className={styles.experience}>Experience: {doctor.experience}</p>
                  <button 
                    className={styles.bookBtn} 
                    onClick={() => handleBookAppointment(doctor.id)}
                  >
                    Book an Appointment
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && activeDoctor && (
        <div className={modalStyles.overlay} onClick={closeModal}>
          <div className={modalStyles.modalBox} onClick={(e) => e.stopPropagation()}>
            <button className={modalStyles.closeX} onClick={closeModal}>&times;</button>
            <div className={modalStyles.modalFlex}>
              <div className={modalStyles.summarySide}>
                <p className={modalStyles.orderTag}>YOUR ORDER:</p>
                <h2 className={modalStyles.modalTitle}>{activeDoctor.specialty} Consultation</h2>
                <p className={modalStyles.modalDoc}>With {activeDoctor.name}</p>
                <div className={modalStyles.modalPrice}>500.00 UAH</div>
                <p className={modalStyles.modalNote}>* Secure encrypted payment</p>
              </div>
              <div className={modalStyles.formSide}>
                <h3>Payment details</h3>
                <div className={modalStyles.field}><label>NAME ON CARD</label><input type="text" placeholder="Hryhorii Skovoroda" /></div>
                <div className={modalStyles.field}><label>CARD NUMBER</label><input type="text" placeholder="0000 0000 0000 0000" /></div>
                <div className={modalStyles.row}>
                  <div className={modalStyles.field}><label>EXPIRY</label><input type="text" placeholder="MM/YY" /></div>
                  <div className={modalStyles.field}><label>CVV</label><input type="password" placeholder="***" /></div>
                </div>
                <button className={modalStyles.modalPayBtn}>Pay now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}


export default function DoctorsPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '100px', fontSize: '18px' }}>Loading specialists...</div>}>
      <DoctorsPageContent />
    </Suspense>
  );
}