// Course Form
import { useState } from 'react';
import { useCourseStore } from '../../store/CourseStore';

export function CourseForm() {
    const addCourse = useCourseStore((state) => state.addCourse);
    
    const [courseData, setCourseData] = useState({
        code: '',
        name_th: '',
        name_en: '',
        credits: 0,
        instructor: '',
        grade: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCourseData((prevData) => ({
            ...prevData,
            [name]: name === 'credits' ? parseInt(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const newCourse = {
            id: courseData.code,
            ...courseData,
        };

        if (newCourse.code && newCourse.name_th && newCourse.credits > 0) {
            addCourse(newCourse);
            setCourseData({
                code: '',
                name_th: '',
                name_en: '',
                credits: 0,
                instructor: '',
                grade: ''
            });
        } else {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>รหัสวิชา:</label>
                <input type="text" name="code" value={courseData.code} onChange={handleChange} required />
            </div>
            <div>
                <label>ชื่อวิชา (ไทย):</label>
                <input type="text" name="name_th" value={courseData.name_th} onChange={handleChange} required />
            </div>
            <div>
                <label>ชื่อวิชา (อังกฤษ):</label>
                <input type="text" name="name_en" value={courseData.name_en} onChange={handleChange} />
            </div>
            <div>
                <label>หน่วยกิต:</label>
                <input type="number" name="credits" value={courseData.credits} onChange={handleChange} required />
            </div>
            <div>
                <label>ชื่ออาจารย์:</label>
                <input type="text" name="instructor" value={courseData.instructor} onChange={handleChange} />
            </div>
            <div>
                <label>เกรด:</label>
                <input type="text" name="grade" value={courseData.grade} onChange={handleChange} required  placeholder='A,B,C,D,F'/>
            </div>
            <button type="submit">เพิ่มรายวิชา</button>
        </form>
    );
}