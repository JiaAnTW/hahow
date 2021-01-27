import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// Redux
import store from '@/models/store';

// Page Component
import Hero from './Hero';

function App() {
    return (
        <HashRouter>
            <Provider store={store}>
                <Switch>
                    <Route path="/heroes/:heroId?" component={Hero} />
                </Switch>
            </Provider>
        </HashRouter>
    );
}

export default App;
