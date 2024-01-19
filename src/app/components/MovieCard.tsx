import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
	jawSummary: {
		id?: any;
		backgroundImage?: {
			url: string;
		};
		title?: string;
		synopsis?: string;
	};
}

const MovieCard: React.FC<MovieCardProps> = React.memo(({ jawSummary }) => {
	const { id, backgroundImage, title, synopsis } = jawSummary;
	const img = backgroundImage?.url || "";

	const truncatedTitle = title?.substring(0, 18) || "";
	const truncatedSynopsis = synopsis?.substring(0, 66) || "";

	return (
		<div className={styles.card}>
			<div className={styles.card_image}>
				<Image
					src={img}
					alt={title || ""}
					width={260}
					height={200}
					loading="lazy"
				/>
			</div>
			<div className={styles.card_data}>
				<h2>{truncatedTitle}</h2>
				<p>{`${truncatedSynopsis} ...`}</p>

				<Link href={`/movie/${id}`}>
					<button>Read More</button>
				</Link>
			</div>
		</div>
	);
});
MovieCard.displayName = "MovieCard";
export default MovieCard;
