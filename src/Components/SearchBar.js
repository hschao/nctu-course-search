import React from 'react'
import { Col, Button, FormControl, DropdownButton, MenuItem } from 'react-bootstrap'

class SearchBox extends React.Component {
    render () {
        return (
            <div>
                <div className='pull-left'>
                    <DropdownButton title='搜尋學期' id='dropdown-semester'>
                        <MenuItem eventKey=''>所有學期</MenuItem>
                        <MenuItem eventKey='23'>106下</MenuItem>
                        <MenuItem eventKey='22'>106上</MenuItem>
                        <MenuItem eventKey='21'>105暑</MenuItem>
                        <MenuItem eventKey='20'>105下</MenuItem>
                        <MenuItem eventKey='19'>105上</MenuItem>
                        <MenuItem eventKey='18'>104暑</MenuItem>
                        <MenuItem eventKey='17'>104下</MenuItem>
                        <MenuItem eventKey='16'>104上</MenuItem>
                        <MenuItem eventKey='15'>103暑</MenuItem>
                        <MenuItem eventKey='14'>103下</MenuItem>
                        <MenuItem eventKey='13'>103上</MenuItem>
                        <MenuItem eventKey='12'>102暑</MenuItem>
                        <MenuItem eventKey='11'>102下</MenuItem>
                        <MenuItem eventKey='10'>102上</MenuItem>
                        <MenuItem eventKey='9'>101暑</MenuItem>
                        <MenuItem eventKey='8'>101下</MenuItem>
                        <MenuItem eventKey='7'>101上</MenuItem>
                        <MenuItem eventKey='6'>100暑</MenuItem>
                        <MenuItem eventKey='5'>100下</MenuItem>
                        <MenuItem eventKey='4'>100上</MenuItem>
                        <MenuItem eventKey='3'>99暑</MenuItem>
                        <MenuItem eventKey='2'>99下</MenuItem>
                        <MenuItem eventKey='1'>99上</MenuItem>
                    </DropdownButton>
                </div>
                <Col xs={9}>
                    <FormControl type='text' placeholder='輸入'/>
                </Col>
                <Button className='col-xs-1'>搜尋</Button>
            </div>
        )
    }
}

export default SearchBox