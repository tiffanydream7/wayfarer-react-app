import React, { Component } from "react";
import AuthModel from '../../models/AuthModel'

    class LogOut extends Component {
        componentDidMount(){
            setTimeout(this.logoutHandler, 1000)
        }

        logoutHandler = () => {
            AuthModel.logout();
            this.props.logout();
            this.props.onHide();
            // alert("this functionality is not yet complete")
        }

        addInfo = () => {
            console.log(this.props)
            this.props.yesm('mega!')
          }

        


    render() {

        return (
        <h2 onClick={this.addInfo}>You've been logged out. bye</h2>
        );
    }
    }


    export default LogOut;
    