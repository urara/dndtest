import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
    getInitialState() {
        return ({
            count: 0
        });
    },
    onClick(e) {
        // e is SyntheticEvent
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count);
    },
    dragStart(e){
        //var FrameWindow = ReactDOM.findDOMNode(this.refs.iframe).contentWindow
        console.log("drag start")
        //e.dataTransfer.setData("text/uri-list",target.src);
    },
    dragEnd(e){
        console.log("drag End")
    },
    render: function() {
        return (
            <div className="col-md-4">
                <div className="panel">
                    <div className="btn btn-default" draggable='true' onDragStart={this.dragStart} onDragEnd={this.dragEnd} onClick={this.onClick}>テスト用ボタン</div>
                </div>
            </div>
        );
    }
});
