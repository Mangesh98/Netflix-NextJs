import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

export default async function Movie() {
	let data = [];
	const url =
		"https://netflix-data.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=2&limit_suggestions=2";
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
		data = result.titles;
		console.log(data);
	} catch (error) {
		console.error(error);
	}

	return (
		<>
			<section className={styles.movieSection}>
				<div className={styles.container}>
					<h1>Movie Page</h1>
					{data.map((curElem: any) => {
						return <MovieCard key={curElem.id} {...curElem} />;
					})}
				</div>
			</section>
		</>
	);
}
