import Container from '@/components/common/Container/Container';
import Hero from '@/features/Hero/Hero';
import DoctorSearch from '@/features/DoctorSearch/DoctorSearch';
import Services from '@/features/Services/Services'; 
import Reasons from '@/features/Reasons/Reasons';
import styles from './page.module.css'; 

const LandingStats = () => {
  const stats = [
    { value: '99%', label: 'Customer satisfaction' },
    { value: '15k', label: 'Online Patients' },
    { value: '12k', label: 'Patients Recovered' },
    { value: '240%', label: 'Company growth' },
  ];

  return (
    <section style={{ background: '#F8FBFA', padding: '80px 0' }}>
      <Container>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '20px' 
        }}>
          {stats.map((item, idx) => (
            <div key={idx} style={{ textAlign: 'center', flex: '1', minWidth: '200px' }}>
              <h2 style={{ 
                fontSize: '48px', 
                color: 'var(--primary-teal)', 
                fontWeight: '800',
                marginBottom: '5px' 
              }}>
                {item.value}
              </h2>
              <p style={{ fontWeight: '600', color: '#444' }}>{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default function LandingPage() {
  return (
    <main>
      
      <Container>
        <Hero />
        <DoctorSearch className={styles.searchLandingPos} />
        <Reasons />
        <Services />
        <LandingStats />
      </Container>
    </main>
  );
}