import FuseAnimate from '@fuse/core/FuseAnimate';
import { Button, IconButton } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Loader from 'react-loader-spinner';

// const accounts = {
// 	creapond: 'johndoe@creapond.com',
// 	withinpixels: 'johndoe@withinpixels.com'
// };

function MailAppSidebarHeader(props) {
	const [selectedAccount, setSelectedCount] = useState('creapond');
	const { t } = useTranslation('mailApp');
	const [state, setState] = React.useState({ loading: false });
	function loadEmails() {
		// alert('load');
		setState({ loading: true });
		const url = `${process.env.REACT_APP_API_URL}imapEmails/loadEmails/all`;
		const token = localStorage.getItem('token');
		const response = axios
			.get(url, {
				headers: {
					Authorization: token
				}
			})
			.then(() => {
				// const dataResponse = response.data.message;
				setState({ loading: false });
				alert('Successfully Reloaded');
				window.location.reload();
			});
	}
	function handleAccountChange(ev) {
		setSelectedCount(ev.target.value);
	}
	// function loadloader() {
	// 	if (state === true) {
	// 		return <Loader type="Puff" color="#00BFFF" height={50} width={50} />;
	// 	}

	// 	return '';
	// }
	return (
		<div className="flex flex-col justify-center h-full p-24">
			<div className="flex items-center flex-1">
				<FuseAnimate animation="transition.expandIn" delay={300}>
					<Icon className="text-32">mail</Icon>
				</FuseAnimate>
				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<span className="text-24 mx-16">{t('APP_TITLE')}</span>
				</FuseAnimate>
			</div>
			{state.loading === false ? (
				<FuseAnimate animation="transition.slideUpIn" delay={300}>
					<Button onClick={loadEmails}>Reload</Button>
				</FuseAnimate>
			) : (
				<div>
					<Loader type="Puff" color="#00BFFF" height={50} width={50} />
					<b>Mails are loading!!!</b>
				</div>
			)}
		</div>
	);
}

export default MailAppSidebarHeader;
