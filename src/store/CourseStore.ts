// Course Store
import { create } from 'zustand';

interface Course {
  id: string;
  code: string;
  name_th: string;
  name_en: string;
  credits: number;
  instructor: string;
  grade: string;
}

interface CourseStoreState {
  registeredCourses: Course[];
  droppedCourses: Course[];
  gpa: number;
  
  addCourse: (course: Course) => void;
  dropCourse: (courseId: string) => void;
  calculateGPA: () => void;
}

export const useCourseStore = create<CourseStoreState>((set) => ({

  registeredCourses: [],
  droppedCourses: [],
  gpa: 0.0,

  addCourse: (newCourse) => set((state) => ({
    registeredCourses: [...state.registeredCourses, newCourse]
  })),

  dropCourse: (courseId) => set((state) => {
    const courseToDrop = state.registeredCourses.find(c => c.id === courseId);
    if (!courseToDrop) return state;

    return {
      registeredCourses: state.registeredCourses.filter(c => c.id !== courseId),
      droppedCourses: [...state.droppedCourses, courseToDrop],
    };
  }),

  calculateGPA: () => set((state) => {

    const gradePoints: { [key: string]: number } = {
      'A': 4.0,
      'B+': 3.5,
      'B': 3.0,
      'C+': 2.5,
      'C': 2.0,
      'D+': 1.5,
      'D': 1.0,
      'F': 0.0,
    };

    let totalPoints = 0;
    let totalCredits = 0;

    state.registeredCourses.forEach(course => {
      const points = gradePoints[course.grade] ?? 0;
      totalPoints += points * course.credits;
      totalCredits += course.credits;
    });

    const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0.0;
    return { gpa };
  }),
}));