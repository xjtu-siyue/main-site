/**
    RepositoryCard : Show a Repository
*/
var React = require('react');

var Card = require('material-ui/lib/card/card');
var CardHeader = require('material-ui/lib/card/card-header');
var CardText = require('material-ui/lib/card/card-text');
var CardActions = require('material-ui/lib/card/card-actions');
var CardTitle = require('material-ui/lib/card/card-title');
var CardMedia = require('material-ui/lib/card/card-media');
var RaisedButton = require('material-ui/lib/raised-button');
var FontIcon = require('material-ui/lib/font-icon');
var IconButton = require('material-ui/lib/icon-button');

module.exports = React.createClass({
    displayName : "RepositoryCard",
    propTyps : {
        name : React.PropTypes.string, // repo name
        owner : React.PropTypes.string, // owner name
        description : React.PropTypes.string, // description
        
    }, 
    render : function(){
        return (
            <Card>
                <CardHeader
                  title={this.props.name}
                  subtitle={this.props.owner}
                  actAsExpander={true}
                  showExpandableButton={true}
                />
                <CardText 
                    expandable={true} 
                >
                    <p>{this.props.description}</p>
                </CardText>
                <CardActions expandable={true}>
                    <RaisedButton 
                        label="详细"
                        onTouchTap={this.handleGetDetails}
                    />
                </CardActions>
            </Card>
        );
    },

})