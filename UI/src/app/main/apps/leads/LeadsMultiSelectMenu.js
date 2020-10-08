import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeLeads } from './store/leadsSlice';

function LeadsMultiSelectMenu(props) {
	const user = useSelector(({ auth }) => auth.user);
	const dispatch = useDispatch();
	const { selectedLeadIds } = props;

	const [anchorEl, setAnchorEl] = useState(null);

	function openSelectedLeadMenu(event) {
		setAnchorEl(event.currentTarget);
	}

	function closeSelectedLeadsMenu() {
		setAnchorEl(null);
	}

	return user.role === 'AsCustomer' ? (
		''
	) : (
		<>
			<IconButton
				className="p-0"
				aria-owns={anchorEl ? 'selectedLeadsMenu' : null}
				aria-haspopup="true"
				onClick={openSelectedLeadMenu}
			>
				<Icon>more_horiz</Icon>
			</IconButton>
			<Menu id="selectedLeadsMenu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeSelectedLeadsMenu}>
				<MenuList>
					<MenuItem
						onClick={() => {
							dispatch(removeLeads(selectedLeadIds));
							closeSelectedLeadsMenu();
						}}
					>
						<ListItemIcon className="min-w-40">
							<Icon>delete</Icon>
						</ListItemIcon>
						<ListItemText primary="Remove" />
					</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
}

export default LeadsMultiSelectMenu;
