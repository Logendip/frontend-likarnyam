"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation"; 
import { ALL_DOCTORS } from "@/data/doctors"; 
import styles from "./page.module.css";

export default function BookingPage() {
  const params = useParams(); 
  const router = useRouter(); 
  const rawId = params.id as string;
  
  const decodedId = decodeURIComponent(rawId || "");
  const doctorIdStr = decodedId.includes("=") ? decodedId.split("=")[1] : decodedId;
  const doctorIdNum = parseInt(doctorIdStr, 10);

  const doctor = ALL_DOCTORS.find((d) => d.id === doctorIdNum);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); 
  const [authError, setAuthError] = useState<string | null>(null); 

  useEffect(() => {
    const sessionStr = localStorage.getItem("user_session");
    if (sessionStr) {
      try {
        const sessionData = JSON.parse(sessionStr);
        if (sessionData && sessionData.isLoggedIn === true) {
          setIsLoggedIn(true);
        }
      } catch (e) {
        console.error("Error parsing user_session:", e);
      }
    }
  }, []);

  const [currentDate, setCurrentDate] = useState<Date>(new Date(2026, 5, 1)); 
  const [selectedDay, setSelectedDay] = useState<number | null>(9); 
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const totalDaysInMonth = new Date(year, month + 1, 0).getDate(); 
  const startDayOfWeek = new Date(year, month, 1).getDay(); 

  const blanksArray = Array.from({ length: startDayOfWeek }, (_, i) => null);
  const daysArray = Array.from({ length: totalDaysInMonth }, (_, i) => i + 1);
  const calendarGridItems = [...blanksArray, ...daysArray];

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDay(null); 
    setSelectedTime(null);
    setAuthError(null); 
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDay(null);
    setSelectedTime(null);
    setAuthError(null); 
  };

  const handleConfirm = () => {
    setAuthError(null); 

    if (!selectedDay) {
      alert("Please select an appointment date!");
      return;
    }
    if (!selectedTime) {
      alert("Please select an appointment time!");
      return;
    }

    if (!isLoggedIn) {
      setAuthError("You must be logged in to confirm an appointment.");
      return;
    }

    alert(`Appointment confirmed with ${doctor ? doctor.name : `Doctor ID: ${doctorIdNum}`} on ${monthNames[month]} ${selectedDay}, ${year} at ${selectedTime}`);
  };

  const timeSlots: [string, boolean][] = [
    ["10:00 AM", true],  ["10:30 AM", true],
    ["11:00 AM", true],  ["11:30 AM", false],
    ["12:00 PM", true],  ["12:30 PM", false],
    ["01:00 PM", true],  ["01:30 PM", true],
    ["02:00 PM", true],  ["02:30 PM", false],
    ["03:30 PM", true],  ["04:00 PM", false],
    ["04:30 PM", true],  ["05:00 PM", false],
  ];

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>Schedule your Appointment</h1>
        <p className={styles.subTitle}>Select a suitable date and time with your chosen specialist.</p>
        
        {doctor ? (
          <div className={styles.doctorBadge}>
            <div className={styles.doctorEmoji}>{doctor.emoji}</div>
            <div className={styles.doctorInfo}>
              <h2 className={styles.doctorName}>{doctor.name}</h2>
              <p className={styles.doctorSpecialty}>
                {doctor.specialty} • <span>{doctor.experience} experience</span>
              </p>
            </div>
          </div>
        ) : (
          <p className={styles.errorText}>Doctor with ID {doctorIdNum} not found</p>
        )}
      </header>

      <main className={styles.container}>
        <section className={styles.workspaceCard}>
          
          <div className={styles.calendarSection}>
            <div className={styles.calendarHeader}>
              <button className={styles.navBtn} onClick={handlePrevMonth}>&lt;</button>
              <span className={styles.currentMonth}>{monthNames[month]} {year}</span>
              <button className={styles.navBtn} onClick={handleNextMonth}>&gt;</button>
            </div>

            <div className={styles.weekdaysGrid}>
              <span>Su</span><span>Mon</span><span>Tu</span><span>We</span><span>Th</span><span>Fri</span><span>Sa</span>
            </div>

            <div className={styles.daysGrid}>
              {calendarGridItems.map((day, index) => {
                if (day === null) {
                  return <div key={`blank-${index}`} className={styles.emptyDaySpace} />;
                }

                return (
                  <button
                    key={`day-${day}`}
                    className={`${styles.dayButton} ${selectedDay === day ? styles.daySelected : ""}`}
                    onClick={() => {
                      setSelectedDay(day);
                      setSelectedTime(null);
                      setAuthError(null); 
                    }}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.verticalDivider}></div>

          <div className={styles.timeSection}>
            <h3 className={styles.timeSectionTitle}>Available Time Slots</h3>
            
            <div className={styles.slotsGrid}>
              {timeSlots.map(([time, isAvailable]) => (
                <button
                  key={time}
                  disabled={!isAvailable}
                  className={`${styles.slotButton} ${
                    !isAvailable ? styles.slotDisabled : selectedTime === time ? styles.slotSelected : ""
                  }`}
                  onClick={() => {
                    setSelectedTime(time);
                    setAuthError(null); 
                  }}
                >
                  {time}
                </button>
              ))}
            </div>

            {authError && (
              <div className={styles.authNotification}>
                <span className={styles.errorIcon}>⚠️</span>
                <div className={styles.authNotificationText}>
                  <p>{authError}</p>
                  <div className={styles.authLinksRow}>
                    <button 
                      className={styles.inlineSignUpBtn} 
                      onClick={() => router.push("/Signup")}
                    >
                      Sign Up
                    </button>
                    <span className={styles.authTextDivider}> or </span>
                    <button 
                      className={styles.inlineSignUpBtn} 
                      onClick={() => router.push("/Login")}
                    >
                      Log In
                    </button>
                    <span className={styles.authTextDivider}> now→</span>
                  </div>
                </div>
              </div>
            )} 

            <button className={styles.confirmButton} onClick={handleConfirm}>
              Confirm Appointment
            </button>
          </div>
        </section>
      </main>

      <footer className={styles.pageFooter}>
        <button className={styles.cancelLink} onClick={() => window.history.back()}>
          Cancel
        </button>
      </footer>
    </div>
  );
}