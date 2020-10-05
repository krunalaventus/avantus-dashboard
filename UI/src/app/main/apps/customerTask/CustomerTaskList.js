import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomerTaskMultiSelectMenu from './CustomerTaskMultiSelectMenu';
import CustomerTaskTable from './CustomerTaskTable';
import { openEditCustomerTaskDialog, selectcustomerTask } from './store/customerTaskSlice';

function CustomerTaskList(props) {
	const dispatch = useDispatch();
	const customerTask = useSelector(selectcustomerTask);
	const searchText = useSelector(({ customerTaskApp }) => customerTaskApp.customerTask.searchText);
	const user = useSelector(({ customerTaskApp }) => customerTaskApp.user);

	const [filteredData, setFilteredData] = useState(null);
	function CompletionFlag(prop) {
		return <Icon>check_circle</Icon>;
	}

	function DecompletionFlag(prop) {
		return <Icon>highlight_off</Icon>;
	}
	function IsCompletionFlag(prop) {
		const isCompleted = prop.completion_flag;
		if (isCompleted === 'COMPLETED') {
			return <CompletionFlag />;
		}
		return <DecompletionFlag />;
	}
	const columns = React.useMemo(
		() => [
			{
				Header: 'Title',
				accessor: 'task_title',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Description',
				accessor: 'task_description',
				className: 'font-bold',
				sortable: true
			},
			{
				id: 'action',
				Header: 'Completed',
				width: 128,
				sortable: false,
				Cell: ({ row }) => (
					<div className="flex items-center">
						<IsCompletionFlag completion_flag={row.original.completion_flag} />
					</div>
				)
			}
		],
		[dispatch, user.starred]
	);

	useEffect(() => {
		function getFilteredArray(entities, _searchText) {
			if (_searchText.length === 0) {
				return customerTask;
			}
			return FuseUtils.filterArrayByString(customerTask, _searchText);
		}

		if (customerTask) {
			setFilteredData(getFilteredArray(customerTask, searchText));
		}
	}, [customerTask, searchText]);

	if (!filteredData) {
		return null;
	}

	if (filteredData.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="textSecondary" variant="h5">
					There are no Task!
				</Typography>
			</div>
		);
	}

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			<CustomerTaskTable columns={columns} data={filteredData} />
		</FuseAnimate>
	);
}

export default CustomerTaskList;
