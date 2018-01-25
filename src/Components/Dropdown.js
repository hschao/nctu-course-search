import React from 'react'

class Dropdown extends React.Component {
    render () {
        return (
            <select>
                <option value=''>所有學期</option>
                <option value='23'>106下</option>
                <option value='22'>106上</option>
                <option value='21'>105暑</option>
                <option value='20'>105下</option>
                <option value='19'>105上</option>
                <option value='18'>104暑</option>
                <option value='17'>104下</option>
                <option value='16'>104上</option>
                <option value='15'>103暑</option>
                <option value='14'>103下</option>
                <option value='13'>103上</option>
                <option value='12'>102暑</option>
                <option value='11'>102下</option>
                <option value='10'>102上</option>
                <option value='9'>101暑</option>
                <option value='8'>101下</option>
                <option value='7'>101上</option>
                <option value='6'>100暑</option>
                <option value='5'>100下</option>
                <option value='4'>100上</option>
                <option value='3'>99暑</option>
                <option value='2'>99下</option>
                <option value='1'>99上</option>
            </select>
        )
    }
}

export default Dropdown