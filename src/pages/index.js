import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Page Component
import Hero from './Hero';

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/heroes/:heroId?" component={Hero} />
            </Switch>
        </HashRouter>
    );
}

export default App;
