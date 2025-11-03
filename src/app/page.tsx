import { getRecentTracks } from "@/data/spotify";
import HomeView from "@/screens/home";
import getGitHubContributions from "@/data/github";

export const revalidate = 30;

export default async function Home() {
	const tracks = await getRecentTracks();
	const contributions = await getGitHubContributions();
	return <HomeView lastPlayed={tracks[0]} contributions={contributions} />;
}
