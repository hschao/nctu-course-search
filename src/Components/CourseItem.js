import React from 'react'
import { Label } from 'react-bootstrap'

import './CourseItem.css'

const semesterToStr = {
    23: '106下',
    22: '106上',
    21: '105暑',
    20: '105下',
    19: '105上',
    18: '104暑',
    17: '104下',
    16: '104上',
    15: '103暑',
    14: '103下',
    13: '103上',
    12: '102暑',
    11: '102下',
    10: '102上',
    9: '101暑',
    8: '101下',
    7: '101上',
    6: '100暑',
    5: '100下',
    4: '100上',
    3: '99暑',
    2: '99下',
    1: '99上'
}

class CourseItem extends React.Component {

    render() {
        let info = this.props.info
        return (
            <div className='course-item' >
                <div>
                    <span style={{ fontWeight: 400, fontSize: 16, marginRight: 15 }}>{ info.course_name }</span>
                    <span style={{ marginRight: 15 }}>{info.dept_name}</span>
                    <span>{info.teacher_name}</span>
                </div>
                <div>
                    <Label>{ semesterToStr[info.semester] }</Label>
                    <Label>{ info.cos_type }</Label>
                    <Label>{ info.grade }</Label>
                    <span className="pull-right ">
                        <strong>
                            <span>{ info.time }/</span>
                            <span>{ info.room }</span>
                        </strong>
                        <span> | </span>
                        <strong>
                            <span>{ info.reg_num }/</span>
                            <span>{ info.reg_limit }</span>
                        </strong>
                    </span>
                </div>
            </div>
        )
    }
}

export default CourseItem