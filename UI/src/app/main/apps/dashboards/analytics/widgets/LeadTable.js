import Loader from 'react-loader-spinner';
import _ from '@lodash';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

function LeadTable(selected, props) {
	const [data1, setgraphData] = React.useState();
	const [state, setState] = React.useState({ loading: true });
	useEffect(() => {
		(async () => {
			const token = localStorage.getItem('token');
			const response = await fetch(
				`${process.env.REACT_APP_API_URL}leads/get/label/${selected.Data.campaignId ?? 0}/${
					selected.Data.label
				}`,
				{
					headers: {
						Authorization: token
					}
				}
			);
			const res = await response.json();
			const ddata = res.data;
			setgraphData(ddata);
			setState({ loading: false });
		})();
	}, []);
	function sleep(delay = 0) {
		return new Promise(resolve => {
			setTimeout(resolve, delay);
		});
	}
	const theme = useTheme();
	function renderTableData() {
		return data1.map((dv, index) => {
			return (
				<tr>
					<td>{dv.email}</td>
					<td>{dv.title}</td>
					<td>{dv.firstName}</td>
					<td>{dv.lastName}</td>
					<td>{dv.campaignName}</td>
					<td>{dv.phone}</td>
					<td>{dv.linkedinUrl}</td>
					<td>{dv.companyName}</td>
					<td>{dv.icebreaker}</td>
					<td>{dv.jobTitle}</td>
					<td>{dv.website}</td>
					<td>{dv.industry}</td>
					<td>{dv.linkedin}</td>
					<td>{dv.fullName}</td>
					<td>{dv.location}</td>
					<td>{dv.sentStep}</td>
					<td>{dv.sentAt}</td>
					<td>{dv.repliedAt}</td>
					<td>{dv.openedAt}</td>
					<td>{dv.bouncedAt}</td>
					<td>{dv.unsubscribedAt}</td>
					<td>{dv.clickedAt}</td>
					<td>{dv.flag}</td>
				</tr>
			);
		});
	}
	if (data1 !== undefined && data1 !== null) {
		return state.loading ? (
			<Loader type="Puff" color="#00BFFF" height={100} width={100} />
		) : (
			<Card className="w-full rounded-8 shadow-1">
				<div className="relative p-24 flex flex-row items-center justify-between scrollsmarttable">
					<table className="smarttable">
						<thead>
							<tr>
								<td>Email</td>
								<td>Title</td>
								<td>First Name</td>
								<td>Last Name</td>
								<td>Campaign Name</td>
								<td>Phone</td>
								<td>Linkedin Url</td>
								<td>Company Name</td>
								<td>Icebreaker</td>
								<td>Job Title</td>
								<td>Website</td>
								<td>Industry</td>
								<td>LinkedIn</td>
								<td>Full Name</td>
								<td>Location</td>
								<td>Sent Step</td>
								<td>Sent At</td>
								<td>Replied At</td>
								<td>Opened At</td>
								<td>Bounced At</td>
								<td>Unsubscribed At</td>
								<td>Clicked At</td>
								<td>Gmail Label</td>
							</tr>
						</thead>
						<tbody>{renderTableData()}</tbody>
					</table>
				</div>
			</Card>
		);
	}
	return '';
}

export default React.memo(LeadTable);
