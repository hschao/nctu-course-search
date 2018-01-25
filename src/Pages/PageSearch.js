import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import SearchBox from "../Components/SearchBar";
import CourseBox from "../Components/CourseBox";

class PageSearch extends React.Component {
    render () {
        return (
            <Grid>
                <Row>
                    <SearchBox/>
                </Row>
                <Row>
                    <CourseBox/>
                </Row>
            </Grid>
        )
    }
}

export default PageSearch