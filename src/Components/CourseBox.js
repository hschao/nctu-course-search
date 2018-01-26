import React from 'react'
import CourseItem from "./CourseItem";

import './CourseBox.css'

class CourseBox extends React.Component {
    render () {
        return (
            <div className='course-box'>
                {this.props.courseData.length > 0 ?
                    this.props.courseData.map(course =>
                        <CourseItem key={course.id} info={course}/>
                    ) :
                    <span>{ this.props.msg }</span>
                }
            </div>
        )
    }
}

export default CourseBox