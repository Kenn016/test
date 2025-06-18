import { useState } from "react";

const StudentForm = ({ onAdd }) => {
  const [student, setStudent] = useState({ firstName: "", lastName: "", dob: "", grade: "" });

  const handleChange = e => setStudent({ ...student, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!student.firstName || !student.lastName || !student.dob || !student.grade) {
      alert("All fields are required!");
      return;
    }
    onAdd({ ...student, id: Date.now() });
    setStudent({ firstName: "", lastName: "", dob: "", grade: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
      <h3>Add New Student</h3>
      <input name="firstName" placeholder="First Name" value={student.firstName} onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" value={student.lastName} onChange={handleChange} />
      <input type="date" name="dob" value={student.dob} onChange={handleChange} />
      <input name="grade" placeholder="Grade" value={student.grade} onChange={handleChange} />
      <button type="submit">Add Student</button>
    </form>
  );
};
export default StudentForm;