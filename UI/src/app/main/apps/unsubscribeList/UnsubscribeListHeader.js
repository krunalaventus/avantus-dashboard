import FuseAnimate from '@fuse/core/FuseAnimate';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { SvgIcon } from '@material-ui/core';
import { setunsubscribeListSearchText, openNewUnsubscribeListDialog } from './store/unsubscribeListSlice';

function UnsubscribeListHeader(props) {
	const dispatch = useDispatch();
	const searchText = useSelector(({ unsubscribeListApp }) => unsubscribeListApp.unsubscribeList.searchText);
	const mainTheme = useSelector(selectMainTheme);
	function onFileChange(file) {
		const formData = new FormData();
		const sfile = file.target.files[0];
		console.log(sfile);
		// Update the formData object
		formData.append('myFile', sfile, sfile.name);
		const token = localStorage.getItem('token');
		axios.post(`${process.env.REACT_APP_API_URL}leads/unsubscribe`, formData, {
			headers: {
				Authorization: token
			}
		});
		alert('File is uploaded and we are processing data. It may take time.');
	}
	return (
		<div className="flex flex-1 items-center justify-between p-4 sm:p-24">
			<div className="flex flex-shrink items-center sm:w-224">
				<div className="flex items-center">
					<FuseAnimate animation="transition.expandIn" delay={300}>
						<Icon className="text-32">account_box</Icon>
					</FuseAnimate>
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Typography variant="h6" className="mx-12 hidden sm:flex">
							File Manager
						</Typography>
					</FuseAnimate>
				</div>
			</div>

			<div className="flex flex-1 items-center justify-center px-8 sm:px-12">
				<ThemeProvider theme={mainTheme}>
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Paper
							className="flex p-4 items-center w-full max-w-512 h-48 px-8 py-4 rounded-8"
							elevation={1}
						>
							<input
								type="file"
								id="fileUploadButton"
								style={{ display: 'none' }}
								onChange={onFileChange}
							/>
							<label htmlFor={'fileUploadButton'}>
								<Button
									color="secondary"
									variant="contained"
									component="span"
									startIcon={
										<SvgIcon fontSize="small">
											<icon>upload</icon>
										</SvgIcon>
									}
								>
									Upload
								</Button>
							</label>
						</Paper>
					</FuseAnimate>
				</ThemeProvider>
			</div>
		</div>
	);
}

export default UnsubscribeListHeader;
