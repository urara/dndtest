import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
    dragEnter: function (e) {
        console.log("dragEnter...");
    },
    dragLeave: function (e) {
        console.log("dragLeave...");
    },
    render: function () {
        onSubmit:
            return (
                <div className="col-md-8">
                    <iframe ref="iframe" src="iframe-index.html" onDragEnter={this.dragEnter}
                            onDragLeave={this.dragLeave}></iframe>
                </div>
            );
    }
});
