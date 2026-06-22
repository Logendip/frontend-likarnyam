export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  emoji: string;
  symptoms: string[];
  price: string;
  availableSlots: [string, boolean][];
}

export const ALL_DOCTORS: Doctor[] = [
  { 
    id: 1, 
    name: 'Dr. Oleksandr Koval', 
    specialty: 'Cardiologist', 
    experience: '15 years', 
    emoji: '👨‍⚕️',
    symptoms: ['heart pain', 'high blood pressure', 'shortness of breath', 'palpitations'],
    price: '250.00 PLN',
    availableSlots: [
      ["09:00 AM", true], ["09:30 AM", true], ["10:00 AM", true], ["10:30 AM", false],
      ["11:00 AM", true], ["11:30 AM", true], ["02:00 PM", true], ["02:30 PM", false]
    ]
  },
  { 
    id: 2, 
    name: 'Dr. Olena Vitvytska', 
    specialty: 'General Practitioner', 
    experience: '8 years', 
    emoji: '👩‍⚕️',
    symptoms: ['cough', 'fever', 'headache', 'fatigue', 'sore throat'],
    price: '150.00 PLN',
    availableSlots: [
      ["10:00 AM", true], ["10:30 AM", true], ["11:00 AM", true], ["11:30 AM", false],
      ["12:00 PM", true], ["12:30 PM", false], ["01:00 PM", true], ["01:30 PM", true]
    ]
  },
  { 
    id: 3, 
    name: 'Dr. Ihor Petrenko', 
    specialty: 'Dentist', 
    experience: '12 years', 
    emoji: '👨‍⚕️',
    symptoms: ['toothache', 'gum sensitivity', 'cavity', 'bleeding gums'],
    price: '200.00 PLN',
    availableSlots: [
      ["09:00 AM", true], ["10:00 AM", true], ["11:00 AM", false], ["12:00 PM", true],
      ["02:00 PM", true], ["03:00 PM", true], ["04:00 PM", false], ["05:00 PM", true]
    ]
  },
  { 
    id: 4, 
    name: 'Dr. Maria Sokolova', 
    specialty: 'Dermatologist', 
    experience: '10 years', 
    emoji: '👩‍⚕️',
    symptoms: ['acne', 'rash', 'itching', 'skin redness', 'moles'],
    price: '180.00 PLN',
    availableSlots: [
      ["08:30 AM", true], ["09:00 AM", true], ["09:30 AM", false], ["10:00 AM", true],
      ["03:30 PM", true], ["04:00 PM", true], ["04:30 PM", false], ["05:00 PM", false]
    ]
  },
  { 
    id: 5, 
    name: 'Dr. Andriy Shevchenko', 
    specialty: 'Neurologist', 
    experience: '14 years', 
    emoji: '👨‍⚕️',
    symptoms: ['dizziness', 'migraine', 'numbness', 'insomnia', 'back pain'],
    price: '220.00 PLN',
    availableSlots: [
      ["11:00 AM", true], ["11:30 AM", true], ["12:00 PM", true], ["12:30 PM", false],
      ["01:00 PM", true], ["01:30 PM", true], ["04:30 PM", true], ["05:00 PM", false]
    ]
  },
  { 
    id: 6, 
    name: 'Dr. Svitlana Boyko', 
    specialty: 'Ophthalmologist', 
    experience: '9 years', 
    emoji: '👩‍⚕️',
    symptoms: ['blurred vision', 'dry eyes', 'eye pain', 'redness'],
    price: '170.00 PLN',
    availableSlots: [
      ["10:00 AM", true], ["11:00 AM", true], ["12:00 PM", false], ["01:00 PM", true],
      ["02:00 PM", true], ["03:00 PM", false], ["04:00 PM", true], ["05:00 PM", true]
    ]
  },
  { 
    id: 7, 
    name: 'Dr. Volodymyr Bondar', 
    specialty: 'Orthopedist', 
    experience: '18 years', 
    emoji: '👨‍⚕️',
    symptoms: ['joint pain', 'fracture', 'sports injury', 'scoliosis'],
    price: '260.00 PLN',
    availableSlots: [
      ["09:00 AM", true], ["09:30 AM", false], ["10:00 AM", true], ["10:30 AM", true],
      ["02:00 PM", true], ["02:30 PM", true], ["03:30 PM", true], ["04:00 PM", false]
    ]
  },
  { 
    id: 8, 
    name: 'Dr. Tetiana Moroz', 
    specialty: 'Pediatrician', 
    experience: '11 years', 
    emoji: '👩‍⚕️',
    symptoms: ['child fever', 'vaccination', 'infant care', 'growth monitoring'],
    price: '160.00 PLN',
    availableSlots: [
      ["09:00 AM", true], ["10:00 AM", true], ["11:00 AM", true], ["12:00 PM", false],
      ["01:00 PM", true], ["02:00 PM", true], ["03:30 PM", false], ["04:30 PM", true]
    ]
  },
  { 
    id: 9, 
    name: 'Dr. Artem Kravets', 
    specialty: 'Psychiatrist', 
    experience: '7 years', 
    emoji: '👨‍⚕️',
    symptoms: ['anxiety', 'depression', 'mood swings', 'panic attacks'],
    price: '210.00 PLN',
    availableSlots: [
      ["12:00 PM", true], ["12:30 PM", true], ["01:00 PM", true], ["01:30 PM", false],
      ["02:00 PM", true], ["02:30 PM", false], ["03:30 PM", true], ["04:00 PM", true]
    ]
  },
  { 
    id: 10, 
    name: 'Dr. Natalia Melnyk', 
    specialty: 'General Practitioner', 
    experience: '20 years', 
    emoji: '👩‍⚕️',
    symptoms: ['flu', 'stomach ache', 'nausea', 'allergies'],
    price: '150.00 PLN',
    availableSlots: [
      ["08:00 AM", true], ["08:30 AM", true], ["09:00 AM", true], ["09:30 AM", false],
      ["10:00 AM", true], ["10:30 AM", false], ["11:00 AM", true], ["11:30 AM", true]
    ]
  }
];