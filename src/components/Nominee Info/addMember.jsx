import React, { Component } from 'react';
import Nominee from './nomineeDetailPage/nominee';
import SideNavbar from '../sideNavbar';

export default class AddMember extends Component {

    render() {
        return (
            <>
            <SideNavbar/>
                <Nominee />
            </>
        )
    }
}
