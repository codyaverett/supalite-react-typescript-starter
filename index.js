import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
}

function App() {
    return <h1>Hello, Dude!</h1>;
}

ReactDOM.render(<App />, document.getElementById('app'));

