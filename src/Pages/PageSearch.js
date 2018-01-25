import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import SearchBar from "../Components/SearchBar";
import CourseBox from "../Components/CourseBox";


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


class PageSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchWord: '',
            searchSemester: '',
            courseData: fakeData
        }
    }

    render () {
        return (
            <Grid>
                <Row>
                    <SearchBar onWordChange={this.handleWordChange} onSemChange={this.handleSemesterChange} onSearch={this.handleServerSearch}/>
                </Row>
                <Row>
                    <CourseBox courseData={this.state.courseData}/>
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
        fetch(HOST + param)
            .then( response => {
                if (!response.ok)
                    throw new Error(response.statusText)
                return response.json()
            })
            .then( json => {
                this.setState({ courseData: json })
            })
            .catch( error => {
                alert(error)
            })
    }

}

export default PageSearch