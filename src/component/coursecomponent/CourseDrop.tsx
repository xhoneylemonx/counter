// Course Drop
import { useCourseStore } from '../../store/CourseStore';

export function CourseDrop() {
    const droppedCourses = useCourseStore((state) => state.droppedCourses);

    return (
        <div>
            <h2>รายวิชาที่ถอนแล้ว</h2>

            {droppedCourses.length === 0 ? (
                <p>ยังไม่มีรายวิชาที่ถูกถอน</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>รหัสวิชา</th>
                            <th>ชื่อวิชา (ไทย)</th>
                            <th>หน่วยกิต</th>
                        </tr>
                    </thead>

                    <tbody>
                        {droppedCourses.map((course) => (
                            <tr key={course.id}>
                                <td>{course.code}</td>
                                <td>{course.name_th}</td>
                                <td>{course.credits}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
