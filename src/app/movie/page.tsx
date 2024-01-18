import Link from "next/link";

// import fetch from "node-fetch";
export default async function Movie() {
	const url =
		"https://netflix-data.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": process.env.RAPID_API_KEY || "",
			"X-RapidAPI-Host": process.env.RAPID_API_HOST || "",
		},
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
	} catch (error) {
		console.error(error);
	}

	return (
		<>
			<h1>Movie Page</h1>
			<Link href="/movie/12">This is link</Link>
		</>
	);
}
