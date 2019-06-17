import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import {connect} from 'react-redux';
import {openModal} from '../../modals/modalActions';
import {withFirebase} from 'react-redux-firebase';

const actions = {
    openModal,
}

class Navbar extends Component {

    handleSignIn = () => { 
        this.props.openModal('LoginModal');
    }

    handleRegister = () => {
        this.props.openModal('RegisterModal');
    }

    handleSignOut = () => { 
        this.props.firebase.logout();
        this.props.history.push('/');
    }

    render() {
        const { auth, profile } = this.props;
        const authenticated = auth.isLoaded && !auth.isEmpty;
        return (
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item as={NavLink} exact to="/" header>
                        <img src="assets/logo.png" alt="logo" />
                        Re-vents
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/events" name="Events" />
                    {authenticated && 
                        <React.Fragment>
                            <Menu.Item as={NavLink} to="/people" name="People" />
                            <Menu.Item as={NavLink} to="/test" name="Test" />
                            <Menu.Item >
                                <Button as={Link} to="/createEvent" floated="right" positive inverted content="Create Event" />
                            </Menu.Item>
                        </React.Fragment>
                    }
                    {authenticated ? 
                    <SignedInMenu signOut={this.handleSignOut} profile={profile}/> : 
                    <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister}/>}
                </Container>
            </Menu> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}

export default withRouter(withFirebase(connect(mapStateToProps, actions)(Navbar)));