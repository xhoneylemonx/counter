import './App'
import { useEffect } from 'react';
import { CourseDrop } from './component/coursecomponent/CourseDrop';
import { CourseForm } from './component/coursecomponent/CourseForm';
import { CourseList } from './component/coursecomponent/CourseList';

import { useCourseStore } from './store/CourseStore'
import { TodoForm } from './component/Todocomponent/todoForm';
import { ShowTodoList } from './component/Todocomponent/showTodoList';


function App() {

  const gpa = useCourseStore((state) => state.gpa);
  const registeredCourses = useCourseStore((state) => state.registeredCourses);
  const calculateGPA = useCourseStore((state) => state.calculateGPA);

  useEffect(() => {
    calculateGPA();
  }, [registeredCourses, calculateGPA]);

  return (
    <>
      <div>
        <h1>GPA: {gpa.toFixed(2)}</h1>
        <CourseForm />
        <CourseList />
        <CourseDrop />
        <TodoForm/>
        <ShowTodoList/>

        
      </div>
    </>
  )
}

export default App