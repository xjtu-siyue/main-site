/**
    WorkList : 作品集
*/
var $ = require('jquery');
var React = require('react');

var IconButton = require('material-ui/lib/icon-button');
var FontIcon = require('material-ui/lib/font-icon');

var RepositoryCard = require('./repository-card.jsx');
module.exports = React.createClass({
    displayName : "RepositoryList",
    propTypes : {

    },
    getInitialState : function(){
        return {
            repositoryList : [],
        }
    },
    componentDidMount : function(){
        $.get('/repository',function(data){
            this.setState({
                repositoryList : data.body,
            });
        }.bind(this));
    },
    render : function render(){
        return (
            <div>
                {
                    this.state.repositoryList.map(function(e){
                        return (
                            <RepositoryCard 
                                key={e._id}
                                name={e.name}
                                owner={e.owner}
                                
                            />
                        );
                    })
                }
            </div>
        );
    }
})