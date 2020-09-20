import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskMultiSelectMenu from './TaskMultiSelectMenu';
import TaskTable from './TaskTable';
import { openEditTaskDialog, removeTask, toggleStarredTask, selecttask } from './store/taskSlice';

function TaskList(props) {
	const dispatch = useDispatch();
	const task = useSelector(selecttask);
	const searchText = useSelector(({ taskApp }) => taskApp.task.searchText);
	const user = useSelector(({ taskApp }) => taskApp.user);

	const [filteredData, setFilteredData] = useState(null);

	const columns = React.useMemo(
		() => [
			{
				Header: 'Title',
				accessor: 'task_title',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Completion Flag',
				accessor: 'completion_flag',
				className: 'font-bold',
				sortable: true
			},
			{
				id: 'action',
				width: 128,
				sortable: false,
				Cell: ({ row }) => (
					<div className="flex items-center">
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch(removeTask(row.original.id));
							}}
						>
							<Icon>delete</Icon>
						</IconButton>
					</div>
				)
			}
		],
		[dispatch, user.starred]
	);

	useEffect(() => {
		function getFilteredArray(entities, _searchText) {
			if (_searchText.length === 0) {
				return task;
			}
			return FuseUtils.filterArrayByString(task, _searchText);
		}

		if (task) {
			setFilteredData(getFilteredArray(task, searchText));
		}
	}, [task, searchText]);

	if (!filteredData) {
		return null;
	}

	if (filteredData.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="textSecondary" variant="h5">
					There are no task!
				</Typography>
			</div>
		);
	}

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			<TaskTable
				columns={columns}
				data={filteredData}
				onRowClick={(ev, row) => {
					if (row) {
						dispatch(openEditTaskDialog(row.original));
					}
				}}
			/>
		</FuseAnimate>
	);
}

export default TaskList;
