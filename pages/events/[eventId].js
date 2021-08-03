import { useRouter } from "next/router";

const EventDetailPage = () => {
	const router = useRouter();
	return (
		<div>
			<h1>Event Details Page</h1>
			<h2>Path name : {router.pathname}</h2>
			<h2>Route name : {JSON.stringify(router.query)}</h2>
		</div>
	);
};

export default EventDetailPage;
