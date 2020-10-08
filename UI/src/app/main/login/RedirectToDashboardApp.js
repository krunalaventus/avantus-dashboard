import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import { useHistory, useParams } from 'react-router';
import reducer from 'app/fuse-layouts/shared-components/chatPanel/store';

function RedirectToDashboardApp() {
	const routeParams = useParams();
	// history.pushState('');
}

export default withReducer('redirectToDashboardApp', reducer)(RedirectToDashboardApp);
