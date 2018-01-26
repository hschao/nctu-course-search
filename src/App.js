import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import PageSearch from './Pages/PageSearch'

const Home = () => (
    <div>
        <h1>Home</h1>
        <Link to={`${process.env.PUBLIC_URL}/search`}>Search</Link>
    </div>
)
const NotFound = () => <h1>404 Not Found</h1>

const App = () => (
    <BrowserRouter>

        {/* page routes */}
        <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/search`} component={PageSearch} />

            {/* 404 not found */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)


export default App;