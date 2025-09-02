import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Student } from "./model/student";

const initialStudents: Student[] = [
  new Student(1, "John", "Doe", "john.doe@example.com"),
  new Student(2, "Jane", "Smith", "jane.smith@example.com"),
  new Student(3, "Peter", "Jones", "peter.jones@example.com"),
  new Student(4, "Mary", "Johnson", "mary.johnson@example.com"),
  new Student(5, "David", "Williams", "david.williams@example.com"),
];

export default function StudentManagement() {
  const navigate = useNavigate();
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const savedStudentsJSON = localStorage.getItem("students");
    if (savedStudentsJSON) {
      const plainStudents = JSON.parse(savedStudentsJSON);
      // Re-instantiate Student objects from plain objects
      const loadedStudents = plainStudents.map(
        (s: Student) => new Student(s.id, s.firstName, s.lastName, s.email)
      );
      setStudents(loadedStudents);
    } else {
      // If no data in localStorage, use initial data and save it
      localStorage.setItem("students", JSON.stringify(initialStudents));
      setStudents(initialStudents);
    }
  }, []);

  const handleAddStudent = () => {
    navigate("/student");
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell component="th" scope="row">
                  {student.id}
                </TableCell>
                <TableCell>{student.firstName}</TableCell>
                <TableCell>{student.lastName}</TableCell>
                <TableCell>{student.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={handleAddStudent}>
        Add Student
      </Button>
    </>
  );
}
