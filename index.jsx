import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './store/store';
import { Router, Route, Link, browserHistory } from 'react-router'

class About extends React.Component{
    render() {
        return (
            <div>
                test
            </div>
        );
    }
}


render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                {/*<IndexRoute component={Home} />*/}
            </Route>
            <Route path="about" component={About}/>
        </Router>
    </Provider>,
    document.getElementById('root')
)


