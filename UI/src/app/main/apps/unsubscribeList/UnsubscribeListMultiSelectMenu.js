import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeUnsubscribeList } from './store/unsubscribeListSlice';

function UnsubscribeListMultiSelectMenu(props) {
	const dispatch = useDispatch();
	const { selectedLeadIds } = props;

	const [anchorEl, setAnchorEl] = useState(null);

	function openSelectedLeadMenu(event) {
		setAnchorEl(event.currentTarget);
	}

	function closeSelectedUnsubscribeListMenu() {
		setAnchorEl(null);
	}

	return (
		<>
			<IconButton
				className="p-0"
				aria-owns={anchorEl ? 'selectedUnsubscribeListMenu' : null}
				aria-haspopup="true"
				onClick={openSelectedLeadMenu}
			>
				<Icon>more_horiz</Icon>
			</IconButton>
			<Menu
				id="selectedUnsubscribeListMenu"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={closeSelectedUnsubscribeListMenu}
			>
				<MenuList>
					<MenuItem
						onClick={() => {
							dispatch(removeUnsubscribeList(selectedLeadIds));
							closeSelectedUnsubscribeListMenu();
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

export default UnsubscribeListMultiSelectMenu;
