import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import PageSearch from './Pages/PageSearch'

const Home = () => <h1>Home</h1>
const NotFound = () => <h1>404 Not Found</h1>

const App = () => (
    <BrowserRouter>

        {/* page routes */}
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/search' component={PageSearch} />

            {/* 404 not found */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)


export default App;