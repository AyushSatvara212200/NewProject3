import React, { Component } from 'react';
import Nominee from './nomineeDetailPage/nominee';
import { Navigate } from "react-router";
import SideNavbar from '../sideNavbar';

export default class AddMember extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");
        let authUser = true;
        if (token === null) {
            authUser = false;
        }
        this.state = {
            token,
            authUser

        }
    }
    render() {
        if (this.state.authUser === false) {
            return <Navigate replace={true} to="/login" />;
        }
        return (
            <>
            <SideNavbar/>
                <Nominee />
            </>
        )
    }
}
