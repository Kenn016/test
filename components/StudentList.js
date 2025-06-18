import StudentCard from "./StudentCard";

const StudentList = ({ students }) => (
  <div>
    <h3>Student List</h3>
    {students.map(student => <StudentCard key={student.id} student={student} />)}
  </div>
);
export default StudentList;