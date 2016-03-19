/**
    Home : 主页
*/
var React = require('react');

var AppBar = require('material-ui/lib/app-bar');
var LeftNav = require('material-ui/lib/left-nav');
var Paper = require('material-ui/lib/paper');
var MenuItem = require('material-ui/lib/menus/menu-item');
var FontIcon = require('material-ui/lib/font-icon');
var IconButton = require('material-ui/lib/icon-button');
var SvgIcon = require('material-ui/lib/svg-icons');
var RepositoryList = require('./repository-list.jsx');

module.exports = React.createClass({
    displayName : "Home",
    propTypes : {
        appTitle : React.PropTypes.string.isRequired,
        
    },
    getInitialState : function getInitialState(){
        return {
            title : this.props.appTitle,
            open : false,
            content : this.getRepositoryList(),
        };
    },
    getStyle : function getStyle(){
        return {
            AppBar : {
                position : 'fixed',
                top : 0,
            },
            LeftNav : {
                marginTop : '65px',
            },
            Container : {
                marginTop : '65px',
                marginLeft : this.state.open? '280px' : 0,
            },
            
        }
    },
    getRepositoryList : function(){
        return (<RepositoryList />)
    },
    handleToggleLeftNav : function handleToggleLeftNav(){
        this.setState({
            open : !this.state.open,
        })
    },
    handleGoToGitHub : function handleGoToGitHub(){
        
    },
    render : function render(){
        var styles = this.getStyle();
        return (
            <div>
                <AppBar 
                    title={this.state.title}
                    style={styles.AppBar}
                    onLeftIconButtonTouchTap={this.handleToggleLeftNav}
                    iconElementRight={
                        <IconButton 
                            tooltip="View Code"
                            onTouchTap={()=>{window.location = 'https://github.com/xjtu-siyue'}}
                        >
                            <SvgIcon.ActionCode color="white"/>
                        </IconButton>
                    }
                    onRightIconButtonTouchTap={this.handleGoToGitHub}
                />
                <LeftNav
                    open={this.state.open}
                    style={styles.LeftNav}
                >
                </LeftNav>
                <Paper style={styles.Container}>
                    {this.state.content}
                </Paper>

            </div>
        );
    }
});