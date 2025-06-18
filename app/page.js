'use client';

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StudentList from "../components/StudentList";
import StudentForm from "../components/StudentForm";
import studentData from "../data/students.json";

export default function Home() {
  const [students, setStudents] = useState(studentData);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "1rem 2rem" }}>
      <Navbar />
      <StudentList students={students} />
      <StudentForm onAdd={handleAddStudent} />
      <Footer />
    </div>
  );
}