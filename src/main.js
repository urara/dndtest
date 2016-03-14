import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './panel';
import Child from './child';

var Container = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <Panel />
                    <Child />
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Container />,
    document.getElementById('content')
);

