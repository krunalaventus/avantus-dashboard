import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import TaskDialog from './TaskDialog';
import TaskHeader from './TaskHeader';
import TaskList from './TaskList';
import TaskSidebarContent from './TaskSidebarContent';
import reducer from './store';
import { gettask } from './store/taskSlice';
import { getUserData } from './store/userSlice';

function TaskApp(props) {
	const dispatch = useDispatch();

	const pageLayout = useRef(null);
	const routeParams = useParams();

	useDeepCompareEffect(() => {
		dispatch(gettask(routeParams));
		dispatch(getUserData());
	}, [dispatch, routeParams]);

	return (
		<>
			<FusePageSimple
				classes={{
					contentWrapper: 'p-0 sm:p-24 h-full',
					content: 'flex flex-col h-full',
					leftSidebar: 'w-256 border-0',
					header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
					wrapper: 'min-h-0'
				}}
				header={<TaskHeader pageLayout={pageLayout} />}
				content={<TaskList />}
				// leftSidebarContent={<taskSidebarContent />}
				sidebarInner
				ref={pageLayout}
				innerScroll
			/>
			<TaskDialog />
		</>
	);
}

export default withReducer('taskApp', reducer)(TaskApp);
