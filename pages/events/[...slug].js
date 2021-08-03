import { useRouter } from "next/router";

const FilteredEventsPage = () => {
	const router = useRouter();
	return (
		<div>
			<h1>Filtered Events Page</h1>
			<h2>Path name : {router.pathname}</h2>
			<h2>Route name : {JSON.stringify(router.query)}</h2>
		</div>
	);
};

export default FilteredEventsPage;
