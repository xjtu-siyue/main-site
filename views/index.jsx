/**
    Index : 入口
*/
var React = require('react');
var ReactDOM = require('react-dom');
require('react-tap-event-plugin')();

var Home = require('./home.jsx');

var Index = React.createClass({
    propTypes : {
        appTitle : React.PropTypes.string.isRequired,
    },
    getInitialState : function getInitialState(){
        return {
            title : this.props.appTitle,
        };
    },
    render : function render(){
        document.body.style = 'margin : 0';
        document.title = this.state.title;
        return (
            <Home 
                appTitle={this.state.title}
            />
        );
    }
});
ReactDOM.render(<Index appTitle="思跃社" />, document.getElementById('main'));