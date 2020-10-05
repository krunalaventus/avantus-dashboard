import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import reducer from './store';
import { selectWidgetsEntities, getWidgets } from './store/widgetsSlice';
import Widget2 from './widgets/Widget2';
import Widget3 from './widgets/Widget3';
import Widget4 from './widgets/Widget4';
import Widget5 from './widgets/Widget5';
import LeadTabs from './widgets/LeadTabs';
import Widget41 from './widgets/Widget41';

function AnalyticsDashboardApp() {
	const dispatch = useDispatch();
	const [data, setData] = React.useState([]);
	const widgets = useSelector(selectWidgetsEntities);
	let i = 1;
	useEffect(() => {
		if (i === 1) {
			(async () => {
				const token = localStorage.getItem('token');
				const response = await fetch(`${process.env.REACT_APP_API_URL}leads/total/0`, {
					headers: {
						Authorization: token
					}
				});
				const res = await response.json();
				const ddata = res.data;
				setData(ddata);
			})();
			i = 2;
		}
	});

	useEffect(() => {
		dispatch(getWidgets());
	}, [dispatch]);

	if (_.isEmpty(widgets)) {
		return null;
	}

	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<div className="flex flex-col md:flex-row sm:p-8 container">
					<div className="flex flex-1 flex-col min-w-0">
						<div className="flex flex-col sm:flex sm:flex-row pb-32">
							<div className="widget sm:w-1/6 p-16">
								<div className="widget">
									<Widget2 data={data} />
								</div>
								<br />
								<br />
								<div className="widget">
									<Widget3 data={data} />
								</div>
							</div>
							<div className="widget sm:w-1/6 p-16">
								<div className="widget">
									<Widget4 data={data} />
								</div>
								<br />
								<br />
								<div className="widget">
									<Widget41 data={data} />
								</div>
							</div>
							<div className="widget sm:w-1/2 p-16">
								<div className="widget w-full">
									<Widget5 data={i} />
								</div>
							</div>
						</div>
						<div>
							<LeadTabs />
						</div>
					</div>
				</div>
			</FuseAnimate>
		</div>
	);
}

export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);
