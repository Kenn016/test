const StudentCard = ({ student }) => (
  <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "0.5rem 0" }}>
    <h4>{student.firstName} {student.lastName}</h4>
    <p><strong>DOB:</strong> {student.dob}</p>
    <p><strong>Grade:</strong> {student.grade}</p>
  </div>
);
export default StudentCard;