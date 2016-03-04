var Container = React.createClass({
  render: function() {
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

var Panel = React.createClass({
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

var Child = React.createClass({
  dragEnter: function(e){
    console.log("dragEnter...");
  },
  dragLeave: function(e){
    console.log("dragLeave...");
  },  
  render: function() {
    onSubmit: 
    return(
        <div className="col-md-8">
            <iframe ref="iframe" src="index2.html" onDragEnter={this.dragEnter} onDragLeave={this.dragLeave}></iframe>
        </div>
    );
  }
});

ReactDOM.render(
  <Container />,
  document.getElementById('content')
);

