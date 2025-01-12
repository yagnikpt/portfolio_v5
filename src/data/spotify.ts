async function getAccessToken() {
	const clientId = process.env.SPOTIFY_CLIENT_ID;
	const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
	const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

	if (!clientId || !clientSecret || !refreshToken) {
		throw new Error("Missing environment variables");
	}

	const response = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
			refresh_token: refreshToken,
		}),
		next: {
			revalidate: 180,
		},
		cache: "force-cache",
	});

	const data = await response.json();
	return data.access_token;
}

export async function getRecentTracks() {
	const accessToken = await getAccessToken();

	const response = await fetch(
		"https://api.spotify.com/v1/me/player/recently-played?limit=1",
		{
			method: "get",
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
			next: {
				revalidate: 180,
			},
			cache: "force-cache",
		},
	);

	const data = await response.json();

	return data.items.map((item: any) => ({
		trackName: item.track.name,
		artist: item.track.artists[0].name,
		albumArt: item.track.album.images[0]?.url,
		playedAt: new Date(item.played_at).toISOString(),
		spotifyUrl: item.track.external_urls.spotify,
	}));
}
