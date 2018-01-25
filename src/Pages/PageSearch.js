import React from 'react'

import Dropdown from '../Components/Dropdown'
import SearchBox from "../Components/SearchBox";
import CourseBox from "../Components/CourseBox";

class PageSearch extends React.Component {
    render () {
        return (
            <div>
                <Dropdown/>
                <SearchBox/>
                <CourseBox/>
            </div>
        )
    }
}

export default PageSearch