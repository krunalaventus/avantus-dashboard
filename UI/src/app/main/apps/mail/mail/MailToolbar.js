import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import { updateMail } from '../store/mailSlice';

const pathToRegexp = require('path-to-regexp');

function MailToolbar(props) {
	const dispatch = useDispatch();
	const mail = useSelector(({ mailApp }) => mailApp.mail);
	const theme = useTheme();

	const toPath = pathToRegexp.compile(props.match.path);

	const routeParams = useParams();
	const matchParams = { ...routeParams };
	delete matchParams.mailId;
	const deselectUrl = toPath(matchParams);
	// if (!mail) {
	// 	return null;
	// }

	return (
		<div className="flex flex-1 items-center justify-between overflow-hidden sm:px-16">
			<IconButton onClick={() => props.history.push(deselectUrl)}>
				<Icon>arrow_back</Icon>
			</IconButton>
		</div>
	);
}

export default withRouter(MailToolbar);
