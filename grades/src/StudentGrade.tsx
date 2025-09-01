import React from "react";

interface StudentGradeProps {
  grade?: number;
}

export default function StudentGrade({ grade }: StudentGradeProps) {
  return (
    <div>
      <p>Your Grade: {grade ?? "Grade is not available"}</p>

      {grade && grade > 90 && <p>Amazing!</p>}
    </div>
  );
}
