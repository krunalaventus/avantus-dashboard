import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFolders } from '../store/foldersSlice';
import { selectLabels } from '../store/labelsSlice';
import {
	toggleLabelOnSelectedMails,
	setFolderOnSelectedMails,
	selectMailsByParameter,
	deselectAllMails,
	selectAllMails,
	selectMails
} from '../store/mailsSlice';

function MailToolbar(props) {
	const dispatch = useDispatch();
	const selectedMailIds = useSelector(({ mailApp }) => mailApp.mails.selectedMailIds);
	const mails = useSelector(selectMails);
	const labels = useSelector(selectLabels);
	const folders = useSelector(selectFolders);

	const [menu, setMenu] = useState({
		selectMenu: null,
		foldersMenu: null,
		labelsMenu: null
	});

	function handleMenuOpen(event, _menu) {
		setMenu({
			..._menu,
			[_menu]: event.currentTarget
		});
	}

	function handleMenuClose(event, _menu) {
		setMenu({
			..._menu,
			[_menu]: null
		});
	}

	function handleCheckChange(event) {
		return event.target.checked ? dispatch(selectAllMails()) : dispatch(deselectAllMails());
	}

	return '';
}

export default MailToolbar;
