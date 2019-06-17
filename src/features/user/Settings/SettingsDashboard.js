import React from 'react'
import { Grid } from 'semantic-ui-react';
import SettingsNav from './SettingsNav';
import { Route } from 'react-router-dom';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import AccountPage from './AccountPage';
import {Redirect, Switch} from 'react-router-dom';
import {connect } from 'react-redux';
import {updatePassword} from '../../auth/authActions';
 
const actions = {
    updatePassword,

}

const SettingsDashboard = ({updatePassword, providerId}) => {
    return (
        <Grid>
            <Grid.Column width={12}>
            <Switch>
                <Redirect exact from="/settings" to='/settings/basic' />
                <Route exact path='/settings/basic' component={BasicPage} />
                <Route path='/settings/about' component={AboutPage} />
                <Route path='/settings/photos' component={PhotosPage} />
                <Route  path='/settings/account' render={() => <AccountPage updatePassword={updatePassword} providerId={providerId}/>} />
            </Switch>
            </Grid.Column>
            <Grid.Column width={4}>
                <SettingsNav />
            </Grid.Column>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        providerId: state.firebase.auth.providerData[0].providerId,
    }
}



export default connect(mapStateToProps , actions)(SettingsDashboard);
