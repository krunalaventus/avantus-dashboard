import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function CustomerTaskMultiSelectMenu(props) {
	const dispatch = useDispatch();
	const { selectedCustomerTaskIds } = props;

	const [anchorEl, setAnchorEl] = useState(null);

	function openSelectedCustomerTaskMenu(event) {
		setAnchorEl(event.currentTarget);
	}

	function closeSelectedcustomerTaskMenu() {
		setAnchorEl(null);
	}

	return (
		<>
			<IconButton
				className="p-0"
				aria-owns={anchorEl ? 'selectedcustomerTaskMenu' : null}
				aria-haspopup="true"
				onClick={openSelectedCustomerTaskMenu}
			>
				<Icon>more_horiz</Icon>
			</IconButton>
		</>
	);
}

export default CustomerTaskMultiSelectMenu;
