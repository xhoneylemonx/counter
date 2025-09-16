// Course List
import { useCourseStore } from '../../store/CourseStore';

export function CourseList() {
    const registeredCourses = useCourseStore((state) => state.registeredCourses);
    const dropCourse = useCourseStore((state) => state.dropCourse);

    return (
        <div>
            <h2>รายวิชาที่ลงทะเบียน</h2>

            {registeredCourses.length === 0 ? (
                <p>ยังไม่มีรายวิชาที่ลงทะเบียน</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>รหัสวิชา</th>
                            <th>ชื่อวิชา (ไทย)</th>
                            <th>หน่วยกิต</th>
                            <th>เกรด</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {registeredCourses.map((course) => (
                            <tr key={course.id}>
                                <td>{course.code}</td>
                                <td>{course.name_th}</td>
                                <td>{course.credits}</td>
                                <td>{course.grade}</td>
                                <td>
                                    <button onClick={() => dropCourse(course.id)}>
                                        ถอน
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
