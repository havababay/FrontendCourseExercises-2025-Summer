import './App.css'
import StudentGrade from './StudentGrade'

function App() {
  let name = 'Grades Application'

  const grades = [85, 90, 78, 92, 88];
  return (
    <>
      <h1>{name.toUpperCase()}</h1>
      <p>Welcome to the {name = 'lll'}!</p>
      <p>Welcome to the {name}!</p>
      <p>This application helps you manage and track your grades.</p>
      <p>Feel free to explore the features and functionalities.</p>
      <p>Enjoy your experience!</p>
      <p>Happy grading!</p>
      {grades.map((grade, index) => (
        <StudentGrade key={index} grade={grade} />
      ))}     
    </>
  )
}

export default App
