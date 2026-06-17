'use client';

import Link from 'next/link';
import DoctorSearch from '@/features/DoctorSearch/DoctorSearch';
import { ALL_DOCTORS } from '@/data/doctors';
import styles from './page.module.css';

export default function InformationPage() {
  return (
    <div className={styles.pageContainer}>
      <DoctorSearch />

      <div className={styles.infoSections}>
        
        <section id="doctors-section" className={styles.infoBlock}>
          <h2>👤 Our Professional Specialists</h2>
          <p className={styles.sectionSubtitle}>
            Meet our team of highly qualified medical experts. Our doctors have international clinical experience and are dedicated to providing personalized care for every patient.
          </p>

          <div className={styles.doctorsGrid}>
            {ALL_DOCTORS.map((doctor) => (
              <div key={doctor.id} className={styles.doctorCard}>
                <div className={styles.doctorImageWrapper}>
                  <span className={styles.doctorEmojiAvatar}>{doctor.emoji}</span>
                </div>
                <div className={styles.doctorContent}>
                  <span className={styles.doctorTag}>{doctor.specialty}</span>
                  <h3>{doctor.name}</h3>
                  <p className={styles.doctorBio}>
                    Treats symptoms such as: {doctor.symptoms.join(', ')}.
                  </p>
                  <div className={styles.doctorMeta}>
                    <span>💼 {doctor.experience}</span>
                    <span>⭐ 5.0 Rating</span>
                  </div>
                  <Link href={`/Doctors/doctorId=${doctor.id}`} className={styles.bookButton}>
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="labs-section" className={styles.infoBlock}>
          <h2>🧪 Laboratory & Diagnostic Labs</h2>
          <p className={styles.sectionSubtitle}>
            Our laboratory complex provides a full spectrum of modern biochemical, cytological, and radiological diagnostics. We use premium automated systems to ensure European standards of accuracy and patient safety.
          </p>

          <div className={styles.labsGrid}>
            <div className={styles.labCard}>
              <div className={styles.labImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80" 
                  alt="MRI Diagnostics" 
                  className={styles.labImage} 
                />
              </div>
              <div className={styles.labContent}>
                <h3>Magnetic Resonance Imaging (MRI)</h3>
                <p>
                  High-precision imaging of internal structures using a modern 1.5 Tesla closed-bore tomograph. This method is completely safe and does not expose the patient to radiation. It allows for the earliest detection of neuroimaging anomalies, soft tissue pathologies, ligament tears, brain vascular diseases, and spinal disorders. 
                </p>
                <div className={styles.labDetails}>
                  <strong>Preparation:</strong> Remove all metal objects and jewelry before the procedure.
                </div>
                <span className={styles.labTime}>⏱ Results within 24 hours</span>
              </div>
            </div>

            <div className={styles.labCard}>
              <div className={styles.labImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
                  alt="Blood Analysis" 
                  className={styles.labImage} 
                />
              </div>
              <div className={styles.labContent}>
                <h3>Advanced Blood Analysis & Immunology</h3>
                <p>
                  Comprehensive screening performed on automated clinical analyzers. We examine general blood parameters, metabolic panels, glucose levels, thyroid hormones, and tumor markers. State-of-the-art barcoding of test tubes completely eliminates human error during sample processing and identification in the laboratory system.
                </p>
                <div className={styles.labDetails}>
                  <strong>Preparation:</strong> Strict fasting is required (do not eat for 8–12 hours before sampling).
                </div>
                <span className={styles.labTime}>⏱ Results within 4-6 hours</span>
              </div>
            </div>

            <div className={styles.labCard}>
              <div className={styles.labImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80" 
                  alt="X-Ray Diagnostics" 
                  className={styles.labImage} 
                />
              </div>
              <div className={styles.labContent}>
                <h3>Digital X-Ray & Low-Dose Imaging</h3>
                <p>
                  Modern digital radiography that delivers instant, crystal-clear images with minimal radiation exposure (up to 90% less than traditional film X-rays). It is widely used for rapid examinations of the thoracic cavity, bone fractures, dental mapping, and joint degenerations. Images are instantly saved to the digital archive.
                </p>
                <div className={styles.labDetails}>
                  <strong>Preparation:</strong> No special preparation is needed; just inform the technician if you might be pregnant.
                </div>
                <span className={styles.labTime}>⏱ Instant digital results</span>
              </div>
            </div>
          </div>
        </section>

        <section id="hospitals-section" className={styles.infoBlock}>
          <h2>🏥 Partner Hospitals & Clinics</h2>
          <p>Discover our clinic network branches, stationary departments, and emergency care facilities.</p>
          <div className={styles.mapWrapper}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d41113.14920216773!2d20.985223364239854!3d52.23303102377855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospitals!5e0!3m2!1spl!2spl!4v1717612345678!5m2!1spl!2spl" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospitals Map"
            ></iframe>
          </div>
        </section>

        <section id="store-section" className={styles.infoBlock}>
          <h2>💊 Medical Store & Pharmacy</h2>
          <p className={styles.sectionSubtitle}>
            Find prescribed medicines, healthcare equipment, and vitamins available directly at our pharmacy points.
          </p>

          <div className={styles.sliderContainer}>
            <div className={styles.sliderTrack}>
              <div className={styles.storeCard}>
                <span className={styles.storeEmoji}>💊</span>
                <h3>Paracetamol 500mg</h3>
                <p>Effective pain relief and fever reduction.</p>
                <span className={styles.storePrice}>$4.50</span>
              </div>
              <div className={styles.storeCard}>
                <span className={styles.storeEmoji}>🌿</span>
                <h3>Vitamin C ZINC</h3>
                <p>Immune system support and antioxidants.</p>
                <span className={styles.storePrice}>$12.20</span>
              </div>
              <div className={styles.storeCard}>
                <span className={styles.storeEmoji}>🧴</span>
                <h3>Antiseptic Spray</h3>
                <p>Fast protection against bacteria and germs.</p>
                <span className={styles.storePrice}>$6.80</span>
              </div>
              <div className={styles.storeCard}>
                <span className={styles.storeEmoji}>🩹</span>
                <h3>Medical Plasters</h3>
                <p>Waterproof protection for minor wounds.</p>
                <span className={styles.storePrice}>$3.10</span>
              </div>
              <div className={styles.storeCard}>
                <span className={styles.storeEmoji}>🐟</span>
                <h3>Omega-3 Fish Oil</h3>
                <p>Supports heart, brain, and joint health.</p>
                <span className={styles.storePrice}>$18.50</span>
              </div>
              <div className={styles.storeCard}>
                <span className={styles.storeEmoji}>💊</span>
                <h3>Paracetamol 500mg</h3>
                <p>Effective pain relief and fever reduction.</p>
                <span className={styles.storePrice}>$4.50</span>
              </div>
              <div className={styles.storeCard}>
                <span className={styles.storeEmoji}>🌿</span>
                <h3>Vitamin C ZINC</h3>
                <p>Immune system support and antioxidants.</p>
                <span className={styles.storePrice}>$12.20</span>
              </div>
              <div className={styles.storeCard}>
                <span className={styles.storeEmoji}>🧴</span>
                <h3>Antiseptic Spray</h3>
                <p>Fast protection against bacteria and germs.</p>
                <span className={styles.storePrice}>$6.80</span>
              </div>
              <div className={styles.storeCard}>
                <span className={styles.storeEmoji}>🩹</span>
                <h3>Medical Plasters</h3>
                <p>Waterproof protection for minor wounds.</p>
                <span className={styles.storePrice}>$3.10</span>
              </div>
              <div className={styles.storeCard}>
                <span className={styles.storeEmoji}>🐟</span>
                <h3>Omega-3 Fish Oil</h3>
                <p>Supports heart, brain, and joint health.</p>
                <span className={styles.storePrice}>$18.50</span>
              </div>
            </div>
          </div>
        </section>

        <section id="ambulance-section" className={styles.infoBlock}>
          <h2>🚑 24/7 Emergency Ambulance Service</h2>
          <p className={styles.sectionSubtitle}>
            Our urgent medical care units operate round-the-clock, equipped with ICU-level life support devices and staffed by senior resuscitation specialists.
          </p>

          <div className={styles.ambulanceContainer}>
            <div className={styles.emergencyCallBanner}>
              <div className={styles.bannerLeft}>
                <span className={styles.pulseIcon}>🚨</span>
                <div>
                  <h3>24/7 Emergency Dispatch Hotline</h3>
                  <p>Call for immediate critical care transport and resuscitation teams</p>
                </div>
              </div>
              <a href="tel:112" className={styles.callButton}>📞 Call 112 / 999 / +480 000 000</a>
            </div>

            <div className={styles.ambulanceGrid}>
              
              <div className={styles.ambulanceCard}>
                <div className={styles.ambulanceIconWrapper}>⚡</div>
                <h3>Ultra-Fast Response Time</h3>
                <p>
                  Our vehicles are strategically placed across the city districts, ensuring a maximum response time of 10-15 minutes from the call confirmation.
                </p>
              </div>

              <div className={styles.ambulanceCard}>
                <div className={styles.ambulanceIconWrapper}>🫁</div>
                <h3>Advanced ICU Equipment</h3>
                <p>
                  Every ambulance features mobile ventilators (IVL), defibrillators, multi-parameter patient monitors, and emergency medication packages.
                </p>
              </div>

              <div className={styles.ambulanceCard}>
                <div className={styles.ambulanceIconWrapper}>🩺</div>
                <h3>Specialized Teams</h3>
                <p>
                  We dispatch specific teams based on requirements: Pediatric emergency, Cardiac resuscitation, or General polytrauma specialists.
                </p>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}