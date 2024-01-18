type Props = {
	params: { id: string };
};
export default function Page({ params }: Props) {
	return <h1>Dynamic root {params.id}</h1>;
}
