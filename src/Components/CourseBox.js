import React from 'react'
import CourseItem from "./CourseItem";

const fakeData = [
    {
        "id": 41825,
        "grade": "2",
        "cos_type": "外語",
        "time": "2GH",
        "room": "A506",
        "course_name": "新聞英語",
        "credit": 2,
        "dept_name": "語言教學與研究中心",
        "teacher_name": "秦毓婷",
        "ct_id": 15126,
        "reg_num": "0",
        "reg_limit": "30",
        "brief": "進階(87 )",
        "semester": 23,
        "memo": ""
    },
    {
        "id": 34277,
        "grade": "2",
        "cos_type": "選修",
        "time": "5IJK",
        "room": "AB101",
        "course_name": "營建管理",
        "credit": 3,
        "dept_name": "土木系",
        "teacher_name": "黃玉霖",
        "ct_id": 2571,
        "reg_num": "200",
        "reg_limit": "200",
        "brief": "自然/進階(96 )",
        "semester": 20,
        "memo": "通識選修(外系支援)課程：同學選他院課程，可採計為通識學分（選本院課程則不可採計為通識）"
    },
    {
        "id": 40947,
        "grade": "all",
        "cos_type": "選修",
        "time": "2G5CD",
        "room": "ED102",
        "course_name": "資料流分析演算法(英文授課)",
        "credit": 3,
        "dept_name": "資科工所",
        "teacher_name": "N/A",
        "ct_id": 18986,
        "reg_num": "0",
        "reg_limit": "30",
        "brief": "",
        "semester": 23,
        "memo": "本院學生優先；英文授課[English Medium Course]"
    }
]

class CourseBox extends React.Component {
    render () {
        return (
            <div>
                {fakeData.map(course =>
                    <CourseItem info={course}/>
                )}
            </div>
        )
    }
}

export default CourseBox