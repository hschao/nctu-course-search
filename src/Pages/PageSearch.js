import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import SearchBar from "../Components/SearchBar";
import CourseBox from "../Components/CourseBox";


class PageSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchWord: '',
            searchSemester: '',
            courseData: [],
            msg: '交大課程搜尋'
        }
    }

    render () {
        return (
            <Grid>
                <Row style={{marginTop: 50}}>
                    <SearchBar onWordChange={this.handleWordChange} onSemChange={this.handleSemesterChange} onSearch={this.handleServerSearch}/>
                </Row>
                <Row style={{marginTop: 20}}>
                    <CourseBox msg={this.state.msg} courseData={this.state.courseData}/>
                </Row>
            </Grid>
        )
    }

    componentDidMount() {
        // this.handleServerSearch()
    }

    handleSemesterChange = (searchSemester) => {
        this.setState({ searchSemester })
    }

    handleWordChange = (searchWord) => {
        console.log(searchWord)
        this.setState({ searchWord })
    }

    handleServerSearch = () => {
        const HOST = 'http://hschao.nctu.me/courses/search_api'
        let param = `?search=${this.state.searchWord}&semester=${this.state.searchSemester}`

        this.setState({
            courseData: [],
            msg: '查詢課程中...'
        })

        fetch(HOST + param)
            .then( response => {
                if (!response.ok)
                    throw new Error(response.statusText)
                return response.json()
            })
            .then( json => {
                this.setState({
                    courseData: json,
                    msg: '查無結果'
                })
            })
            .catch( error => {
                this.setState({
                    msg: error
                })
            })
    }

}

export default PageSearch