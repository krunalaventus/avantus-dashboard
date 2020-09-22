import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import CustomerTaskHeader from './CustomerTaskHeader';
import CustomerTaskList from './CustomerTaskList';
import CustomerTaskSidebarContent from './CustomerTaskSidebarContent';
import reducer from './store';
import { getcustomerTask } from './store/customerTaskSlice';
import { getUserData } from './store/userSlice';

function CustomerTaskApp(props) {
	const dispatch = useDispatch();

	const pageLayout = useRef(null);
	const routeParams = useParams();

	useDeepCompareEffect(() => {
		dispatch(getcustomerTask(routeParams));
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
				header={<CustomerTaskHeader pageLayout={pageLayout} />}
				content={<CustomerTaskList />}
				// leftSidebarContent={<customerTaskSidebarContent />}
				sidebarInner
				ref={pageLayout}
				innerScroll
			/>
		</>
	);
}

export default withReducer('customerTaskApp', reducer)(CustomerTaskApp);
