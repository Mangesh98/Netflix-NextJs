import styles from "@/app/styles/common.module.css";
import Image from "next/image";
type Props = {
	params: { id: string };
};
export default async function Page({ params }: Props) {
	let data = [];
	const id = params.id;
	const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
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
		data = result[0].details;
		// console.log(data);
	} catch (error) {
		console.error(error);
	}
	return (
		<>
			<div className={styles.container}>
				<h2 className={styles.movie_title}>
					Netflix \ <span> {data.type} </span>
				</h2>
				<div className={styles.card_section}>
					<div>
						<Image
							src={data.backgroundImage.url}
							alt={data.title}
							width={600}
							height={300}
							loading="lazy"
						/>
					</div>
					<div>
						<h1>{data.title}</h1>
						<p>{data.synopsis}</p>
					</div>
				</div>
			</div>
		</>
	);
}
