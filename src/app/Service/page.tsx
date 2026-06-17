"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Container from '@/components/common/Container/Container';
import styles from './page.module.css';
import DoctorSearch from '@/features/DoctorSearch/DoctorSearch';
import { ALL_DOCTORS } from '@/data/doctors';

const servicesData = [
  { 
    title: 'Dental treatments', 
    img: '/dental.svg',
    desc: 'Comprehensive oral care, from routine cleanings and fillings to advanced orthodontic and restorative treatments for a healthy smile.'
  },
  { 
    title: 'Bones treatments', 
    img: '/bones.svg',
    desc: 'Expert orthopedic care focusing on bone health, fracture treatment, joint diseases, and tailored rehabilitation programs.'
  },
  { 
    title: 'Diagnosis', 
    img: '/diagnosis.svg',
    desc: 'Advanced medical diagnostics, precise laboratory tests, and modern imaging services for accurate and timely health assessments.'
  },
  { 
    title: 'Cardiology', 
    img: '/cardiology.svg',
    desc: 'Specialized cardiovascular care, comprehensive heart health monitoring, and expert treatments for various cardiac conditions.'
  },
  { 
    title: 'Surgery', 
    img: '/surgery.svg',
    desc: 'High-quality, safe surgical treatments ranging from minimally invasive daycare procedures to complex specialized operations.'
  },
  { 
    title: 'Eye care', 
    img: '/eye.svg',
    desc: 'Professional vision testing, treatment of ophthalmological diseases, and modern care options to preserve your eyesight.'
  },
];

export default function ServicePage() {
  const router = useRouter();

  const [department, setDepartment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!department) {
      alert("Please select a department!");
      return;
    }

    const matchedDoctor = ALL_DOCTORS.find(
      (doc) => doc.specialty.toLowerCase() === department.toLowerCase()
    );

    if (matchedDoctor) {
      router.push(`/Doctors/${matchedDoctor.id}`);
    } else {
      alert(`Right now we don't have available doctors in this department.`);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <Container>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>Meet the Best <br /> Hospital</h1>
              <p>We know how large objects will act, but things on a small scale.</p>
              <div className={styles.heroBtns}>
                <button className={styles.btnPrimary}>Get Quote Now</button>
                <button className={styles.btnOutline}>Learn More</button>
              </div>
            </div>

            <div className={styles.appointmentForm}>
              <h3>Book Appointment</h3>
              <form onSubmit={handleAppointmentSubmit}>
                <div className={styles.inputGroup}>
                  <label>Name *</label>
                  <input 
                    type="text" 
                    placeholder="Full Name *" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Email address *</label>
                  <input 
                    type="email" 
                    placeholder="example@gmail.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Department *</label>
                  <select 
                    required 
                    value={department} 
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option value="">Please Select</option>
                    <option value="Dentist">Dental Treatments (Dentist)</option>
                    <option value="Orthopedist">Bones Treatments (Orthopedist)</option>
                    <option value="Cardiologist">Cardiology (Cardiologist)</option>
                    <option value="General Practitioner">General Medicine / Diagnosis</option>
                    <option value="Dermatologist">Dermatology (Skin Care)</option>
                    <option value="Neurologist">Neurology (Neurologist)</option>
                    <option value="Ophthalmologist">Eye Care (Ophthalmologist)</option>
                    <option value="Pediatrician">Pediatrics (Pediatrician)</option>
                    <option value="Psychiatrist">Psychiatry (Psychiatrist)</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>Time *</label>
                  <select 
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="afternoon">Afternoon (1:00 PM - 5:00 PM)</option>
                  </select>
                </div>
                <button type="submit" className={styles.btnSubmit}>
                  Find & Book Doctor
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.searchSection}>
        <Container>
          <DoctorSearch className={styles.searchServicePos} />
        </Container>
      </section>

      <section className={styles.servicesSection}>
        <Container>
          <div className={styles.servicesHeader}>
            <h2>Services we provide</h2>
            <p>Our clinic offers a wide range of specialized healthcare options tailored to your individual medical and diagnostic requirements.</p>
          </div>

          <div className={styles.servicesGrid}>
            {servicesData.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.cardImageWrapper}>
                  <Image 
                    src={service.img} 
                    alt={service.title} 
                    fill 
                    className={styles.svgIcon}
                  />
                </div>
                <div className={styles.cardBody}>
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}