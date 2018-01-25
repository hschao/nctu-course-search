import React from 'react'


class SearchBox extends React.Component {
    render () {
        return (
            <div>
                <input type='text' placeholder='輸入'/>
                <button type='button'>搜尋</button>
            </div>
        )
    }
}

export default SearchBox