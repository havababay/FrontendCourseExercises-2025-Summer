import React from 'react';

interface StudentCardProps {
  name: string;
  average: number;
}

function StudentCard({ name, average }: StudentCardProps) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>Average Grade: {average.toFixed(2)}</p>
    </div>
  );
};

export default StudentCard;
