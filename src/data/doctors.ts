export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  emoji: string;
  symptoms: string[];
}

export const ALL_DOCTORS: Doctor[] = [
  { 
    id: 1, 
    name: 'Dr. Oleksandr Koval', 
    specialty: 'Cardiologist', 
    experience: '15 years', 
    emoji: '👨‍⚕️',
    symptoms: ['heart pain', 'high blood pressure', 'shortness of breath', 'palpitations']
  },
  { 
    id: 2, 
    name: 'Dr. Olena Vitvytska', 
    specialty: 'General Practitioner', 
    experience: '8 years', 
    emoji: '👩‍⚕️',
    symptoms: ['cough', 'fever', 'headache', 'fatigue', 'sore throat']
  },
  { 
    id: 3, 
    name: 'Dr. Ihor Petrenko', 
    specialty: 'Dentist', 
    experience: '12 years', 
    emoji: '👨‍⚕️',
    symptoms: ['toothache', 'gum sensitivity', 'cavity', 'bleeding gums']
  },
  { 
    id: 4, 
    name: 'Dr. Maria Sokolova', 
    specialty: 'Dermatologist', 
    experience: '10 years', 
    emoji: '👩‍⚕️',
    symptoms: ['acne', 'rash', 'itching', 'skin redness', 'moles']
  },
  { 
    id: 5, 
    name: 'Dr. Andriy Shevchenko', 
    specialty: 'Neurologist', 
    experience: '14 years', 
    emoji: '👨‍⚕️',
    symptoms: ['dizziness', 'migraine', 'numbness', 'insomnia', 'back pain']
  },
  { 
    id: 6, 
    name: 'Dr. Svitlana Boyko', 
    specialty: 'Ophthalmologist', 
    experience: '9 years', 
    emoji: '👩‍⚕️',
    symptoms: ['blurred vision', 'dry eyes', 'eye pain', 'redness']
  },
  { 
    id: 7, 
    name: 'Dr. Volodymyr Bondar', 
    specialty: 'Orthopedist', 
    experience: '18 years', 
    emoji: '👨‍⚕️',
    symptoms: ['joint pain', 'fracture', 'sports injury', 'scoliosis']
  },
  { 
    id: 8, 
    name: 'Dr. Tetiana Moroz', 
    specialty: 'Pediatrician', 
    experience: '11 years', 
    emoji: '👩‍⚕️',
    symptoms: ['child fever', 'vaccination', 'infant care', 'growth monitoring']
  },
  { 
    id: 9, 
    name: 'Dr. Artem Kravets', 
    specialty: 'Psychiatrist', 
    experience: '7 years', 
    emoji: '👨‍⚕️',
    symptoms: ['anxiety', 'depression', 'mood swings', 'panic attacks']
  },
  { 
    id: 10, 
    name: 'Dr. Natalia Melnyk', 
    specialty: 'General Practitioner', 
    experience: '20 years', 
    emoji: '👩‍⚕️',
    symptoms: ['flu', 'stomach ache', 'nausea', 'allergies']
  }
];