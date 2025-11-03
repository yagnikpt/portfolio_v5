const levels = {
	NONE: 0,
	FIRST_QUARTILE: 1,
	SECOND_QUARTILE: 2,
	THIRD_QUARTILE: 3,
	FOURTH_QUARTILE: 4,
};

export default async function getGitHubContributions() {
	const now = new Date();
	const toDate = new Date(now);
	toDate.setUTCHours(0, 0, 0, 0);
	const fromDate = new Date(toDate);
	fromDate.setDate(fromDate.getDate() - 216);
	const startWeekOffset = fromDate.getUTCDay();
	fromDate.setDate(fromDate.getDate() - startWeekOffset);
	const to = toDate.toISOString();
	const from = fromDate.toISOString();
	const query = `
  query {
    user(login: "yagnikpt") {
      contributionsCollection(from: "${from}", to: "${to}") {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

	const response = await fetch("https://api.github.com/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
		},
		body: JSON.stringify({ query }),
	});

	if (!response.ok) {
		throw new Error(
			`GitHub API error: ${response.status} ${response.statusText}`,
		);
	}

	const { data } = await response.json();

	const result = data.user.contributionsCollection.contributionCalendar.weeks
		.flatMap((week: any) => week.contributionDays)
		.map((day: any) => ({
			date: day.date,
			count: day.contributionCount,
			level: levels[day.contributionLevel as unknown as keyof typeof levels],
		}));
	return result;
}
