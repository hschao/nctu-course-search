import React from 'react'
import CourseItem from "./CourseItem";

class CourseBox extends React.Component {
    render () {
        return (
            <div>
                {this.props.courseData.length > 0 ?
                    this.props.courseData.map(course =>
                        <CourseItem key={course.id} info={course}/>
                    ) :
                    <span>查無結果</span>
                }
            </div>
        )
    }
}

export default CourseBox