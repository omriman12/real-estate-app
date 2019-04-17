import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './controllers/actions';
import Button from '@material-ui/core/Button';

//components
import AppContentLayout from '../../Layouts/AppContentLayout';
import AppTitleLayout from '../../Layouts/AppTitleLayout';

class Users extends Component {
    constructor(props){
        super(props);

        this.state = {
            userToAdd: ''
        }

        this.onUserAddChange = this.onUserAddChange.bind(this);
        this.onUserAddClick = this.onUserAddClick.bind(this);
        // this.getContent = this.getContent.bind(this);
    }

    componentWillMount(){
        console.log('componentWillMount inside');
        this.props.actions.getUsers();
    }

    onUserAddChange(event){
        let userName = event.target.value;
        this.setState({
            userToAdd: userName
        })
    }

    onUserAddClick(){
        console.log('user add click');
        this.props.actions.addUser(this.state.userToAdd);
    }


    render() {
        console.log(this.props);
        return (
            
            <React.Fragment>
                <AppTitleLayout>
                    Users page
                </AppTitleLayout>
                <AppContentLayout>
                    <input type="text" placeholder="your user" value={this.state.userName} onChange={this.onUserAddChange}/>
                    
                    <Button variant="contained" color="primary" onClick={this.onUserAddClick}>
                        Add
                    </Button>

                    <div className="up__users-list"> 
                        {this.props.users.map( (user, index) => <div key={index}>{user}</div>)}   
                    </div>

                </AppContentLayout>
            </React.Fragment>
           
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        users: state.users.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);  