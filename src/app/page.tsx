import { getRecentTracks } from "@/data/spotify";
import HomeView from "@/screens/home";

export const revalidate = 30;

export default async function Home() {
	const tracks = await getRecentTracks();

	return <HomeView lastPlayed={tracks[0]} />;
}
