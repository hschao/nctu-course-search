import React from 'react'


class CourseItem extends React.Component {

    render() {

        return (
            <div>
                <div>{this.props.info.course_name}</div>
                <div>{this.props.info.reg_limit}</div>
            </div>
        )
    }
}

export default CourseItem